import {
    CreditCard,
    Wallet,
    Receipt,
    Download,
} from "lucide-react";
import { downloadInvoice } from "../../../services/bookingService";

const PaymentCard = ({ booking }) => {
    const paymentStatusColors = {
        paid: "bg-green-100 text-green-700",
        unpaid: "bg-red-100 text-red-700",
        pending: "bg-yellow-100 text-yellow-700",
    };

    const paymentMethodColors = {
        online: "bg-blue-100 text-blue-700",
        cash: "bg-purple-100 text-purple-700",
    };

    const handleInvoice = async () => {
        try {
            const response = await downloadInvoice(booking._id);

            const url = window.URL.createObjectURL(
                new Blob([response.data])
            );

            const link = document.createElement("a");

            link.href = url;

            link.download = `invoice-${booking._id}.pdf`;

            document.body.appendChild(link);

            link.click();

            link.remove();

            window.URL.revokeObjectURL(url);

            toast.success("Invoice downloaded successfully.");
        } catch (err) {
            toast.error(
                err.response?.data?.message || "Invoice download failed."
            );
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-md border p-6">

            {/* Header */}

            <div className="flex justify-between items-center mb-6">

                <div>
                    <h2 className="text-xl font-bold text-gray-800">
                        Payment Details
                    </h2>

                    <p className="text-sm text-gray-500">
                        Payment Information
                    </p>
                </div>

                <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${paymentStatusColors[booking.paymentStatus] ||
                        "bg-gray-100 text-gray-700"
                        }`}
                >
                    {booking.paymentStatus.toUpperCase()}
                </span>

            </div>

            <div className="space-y-5">

                {/* Payment Method */}

                <InfoItem
                    icon={<Wallet size={20} />}
                    title="Payment Method"
                    value={
                        <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${paymentMethodColors[booking.paymentMethod] ||
                                "bg-gray-100 text-gray-700"
                                }`}
                        >
                            {booking.paymentMethod.toUpperCase()}
                        </span>
                    }
                />

                {/* Payment Status */}

                <InfoItem
                    icon={<CreditCard size={20} />}
                    title="Payment Status"
                    value={booking.paymentStatus}
                />

                {/* Transaction */}

                <InfoItem
                    icon={<Receipt size={20} />}
                    title="Transaction ID"
                    value={booking.transactionId || "N/A"}
                />

            </div>

            {/* Invoice */}

            <div className="mt-8">

                <button
                    onClick={handleInvoice}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold transition"
                >
                    <Download size={18} />

                    Download Invoice
                </button>

            </div>

        </div>
    );
};

const InfoItem = ({ icon, title, value }) => {
    return (
        <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">

            <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                {icon}
            </div>

            <div className="flex-1 min-w-0">

                <p className="text-sm text-gray-500">
                    {title}
                </p>

                <div className="font-semibold text-gray-800 break-all">
                    {value}
                </div>

            </div>

        </div>
    );
};

export default PaymentCard;