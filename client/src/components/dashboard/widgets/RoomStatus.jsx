

const RoomStatus = ({
  availableRooms = 0,
  occupiedRooms = 0,
  maintenanceRooms = 0,
  loading,
}) => {
  const rooms = [
    {
      label: "Available",
      value: availableRooms,
      color: "bg-green-500",
      bg: "bg-green-50",
      text: "text-green-700",
    },
    {
      label: "Occupied",
      value: occupiedRooms,
      color: "bg-red-500",
      bg: "bg-red-50",
      text: "text-red-700",
    },
    {
      label: "Maintenance",
      value: maintenanceRooms,
      color: "bg-yellow-500",
      bg: "bg-yellow-50",
      text: "text-yellow-700",
    },
  ];

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800">Room Status</h2>
        <p className="mt-4 text-slate-500">Loading...</p>
      </div>
    );
  }
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-xl font-bold text-slate-800">
        Room Status
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Current room availability
      </p>

      <div className="mt-8 space-y-4">



        {rooms.map((room) => (
          <div
            key={room.label}
            className={`flex items-center justify-between rounded-xl p-4 ${room.bg}`}
          >
            <div className="flex items-center gap-3">

              <div
                className={`h-3 w-3 rounded-full ${room.color}`}
              />

              <span className={`font-medium ${room.text}`}>
                {room.label}
              </span>

            </div>

            <span className="text-xl font-bold text-slate-800">
              {room.value}
            </span>

          </div>
        ))}

      </div>
    </div>
  );
};

export default RoomStatus;