const BookingStatusBadge = ({ status }) => {
  const styles = {
    pending: "bg-yellow-100 text-yellow-700",
    confirmed: "bg-blue-100 text-blue-700",
    checked_in: "bg-green-100 text-green-700",
    checked_out: "bg-gray-100 text-gray-700",
    cancelled: "bg-red-100 text-red-700",
  };

  const labels = {
    pending: "Pending",
    confirmed: "Confirmed",
    checked_in: "Checked In",
    checked_out: "Checked Out",
    cancelled: "Cancelled",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {labels[status] || status}
    </span>
  );
};

export default BookingStatusBadge;