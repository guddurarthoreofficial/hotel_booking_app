const statusClasses = {
  available: "bg-green-100 text-green-700",
  occupied: "bg-red-100 text-red-700",
  maintenance: "bg-yellow-100 text-yellow-700",
};

const RoomStatusBadge = ({ status }) => {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
        statusClasses[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
};

export default RoomStatusBadge;