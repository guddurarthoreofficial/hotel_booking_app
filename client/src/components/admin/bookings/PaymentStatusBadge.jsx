const PaymentStatusBadge = ({ status }) => {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        status === "paid"
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {status === "paid" ? "Paid" : "Pending"}
    </span>
  );
};

export default PaymentStatusBadge;