import RoomStatusBadge from "./RoomStatusBadge";

const RoomStatusCard = ({ room }) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Status
      </h2>

      <RoomStatusBadge status={room.status} />

      <p className="mt-4 text-sm text-slate-500">
        Created on{" "}
        {new Date(room.createdAt).toLocaleDateString()}
      </p>

      <p className="mt-2 text-sm text-slate-500">
        Updated on{" "}
        {new Date(room.updatedAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default RoomStatusCard;