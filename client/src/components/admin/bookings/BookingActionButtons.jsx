import { useState } from "react";
import { toast } from "react-hot-toast";
import {
    CheckCircle,
    LogIn,
    LogOut,
    Download,
} from "lucide-react";

import {
    markBookingAsPaid,
    checkInBooking,
    checkOutBooking,
    downloadInvoice,
} from "../../../services/bookingService";

const BookingActionButtons = ({ booking, refreshBooking }) => {
    const [loading, setLoading] = useState(false);

    const handleAction = async (apiCall, successMessage) => {
        try {
            setLoading(true);

            const res = await apiCall(booking._id);

            toast.success(res.message || successMessage);

            refreshBooking();
        } catch (error) {
            toast.error(
                error?.response?.data?.message || "Something went wrong."
            );
        } finally {
            setLoading(false);
        }
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
        <div className="bg-white rounded-2xl border shadow-md p-6">

            <h2 className="text-xl font-bold text-gray-800 mb-6">
                Booking Actions
            </h2>

            <div className="flex flex-wrap gap-4">

                {booking.status === "pending" && (
                    <button
                        disabled={loading}
                        onClick={() =>
                            handleAction(
                                markBookingAsPaid,
                                "Payment marked successfully."
                            )
                        }
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-medium disabled:opacity-50"
                    >
                        <CheckCircle size={18} />
                        Mark Paid
                    </button>
                )}

                {booking.status === "confirmed" && (
                    <button
                        disabled={loading}
                        onClick={() =>
                            handleAction(
                                checkInBooking,
                                "Guest checked in successfully."
                            )
                        }
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium disabled:opacity-50"
                    >
                        <LogIn size={18} />
                        Check In
                    </button>
                )}

                {booking.status === "checked_in" && (
                    <button
                        disabled={loading}
                        onClick={() =>
                            handleAction(
                                checkOutBooking,
                                "Guest checked out successfully."
                            )
                        }
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-medium disabled:opacity-50"
                    >
                        <LogOut size={18} />
                        Check Out
                    </button>
                )}

                {booking.paymentStatus === "paid" && (
                    <button
                        onClick={handleInvoice}
                        className="flex items-center gap-2 bg-gray-800 hover:bg-black text-white px-5 py-3 rounded-xl font-medium"
                    >
                        <Download size={18} />
                        Download Invoice
                    </button>
                )}

            </div>
        </div>
    );
};

export default BookingActionButtons;