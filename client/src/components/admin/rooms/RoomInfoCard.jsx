import {
  Hash,
  Bed,
  IndianRupee,
  Users,
  Layers,
  BedDouble,
} from "lucide-react";

const Item = ({ icon: Icon, title, value }) => (
  <div className="group flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 transition-all duration-200 hover:border-indigo-200 hover:bg-slate-50/50 hover:shadow-sm">
    {/* Icon Container */}
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
      <Icon className="h-5 w-5" />
    </div>

    {/* Content */}
    <div className="min-w-0 flex-1">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {title}
      </p>
      <p className="mt-0.5 truncate text-base font-semibold text-slate-800">
        {value ?? "-"}
      </p>
    </div>
  </div>
);

const RoomInfoCard = ({ room = {} }) => {
  return (
    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
      <Item
        icon={Hash}
        title="Room Number"
        value={room.roomNumber}
      />

      <Item
        icon={Bed}
        title="Room Type"
        value={room.roomType}
      />

      <Item
        icon={IndianRupee}
        title="Price / Night"
        value={
          room.pricePerNight != null ? `₹${room.pricePerNight}` : null
        }
      />

      <Item
        icon={Users}
        title="Capacity"
        value={room.maxGuests ? `${room.maxGuests} Guests` : null}
      />

      <Item
        icon={Layers}
        title="Floor"
        value={room.floor ? `Floor ${room.floor}` : null}
      />

      <Item
        icon={BedDouble}
        title="Bed Type"
        value={room.bedType}
      />
    </div>
  );
};

export default RoomInfoCard;