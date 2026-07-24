const Item = ({ title, value }) => (
  <div className="rounded-xl border p-5">
    <p className="text-sm text-slate-500">{title}</p>

    <p className="mt-2 text-lg font-semibold">
      {value || "-"}
    </p>
  </div>
);

const RoomInfoCard = ({ room }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">

      <Item
        title="Room Number"
        value={room.roomNumber}
      />

      <Item
        title="Room Type"
        value={room.roomType}
      />

      <Item
        title="Price"
        value={`₹${room.pricePerNight}`}
      />

      <Item
        title="Capacity"
        value={room.capacity}
      />

      <Item
        title="Floor"
        value={room.floor}
      />

      <Item
        title="Bed Type"
        value={room.bedType}
      />

    </div>
  );
};

export default RoomInfoCard;