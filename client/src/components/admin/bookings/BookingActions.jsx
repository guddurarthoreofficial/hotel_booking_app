import { Link } from "react-router-dom";
import {
  checkInBooking,
  checkOutBooking,
  markBookingAsPaid,
  downloadInvoice,
} from "../../../services/bookingService";

const BookingActions = ({ booking, refresh }) => {
  const handleCheckIn = async () => {
    try {
      await checkInBooking(booking._id);
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCheckOut = async () => {
    try {
      await checkOutBooking(booking._id);
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  const handleMarkPaid = async () => {
    try {
      await markBookingAsPaid(booking._id);
      refresh();
    } catch (err) {
      console.error(err);
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
      link.click();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <Link
        to={`/admin/bookings/${booking._id}`}
        className="rounded bg-blue-600 px-3 py-1 text-xs text-white hover:bg-blue-700"
      >
        View
      </Link>

      {booking.status === "confirmed" && (
        <button
          onClick={handleCheckIn}
          className="rounded bg-green-600 px-3 py-1 text-xs text-white hover:bg-green-700"
        >
          Check In
        </button>
      )}

      {booking.status === "checked_in" && (
        <button
          onClick={handleCheckOut}
          className="rounded bg-orange-600 px-3 py-1 text-xs text-white hover:bg-orange-700"
        >
          Check Out
        </button>
      )}

      {booking.paymentStatus === "pending" && (
        <button
          onClick={handleMarkPaid}
          className="rounded bg-emerald-600 px-3 py-1 text-xs text-white hover:bg-emerald-700"
        >
          Mark Paid
        </button>
      )}

      <button
        onClick={handleInvoice}
        className="rounded bg-gray-700 px-3 py-1 text-xs text-white hover:bg-gray-800"
      >
        Invoice
      </button>
    </div>
  );
};

export default BookingActions;