import {
  BedDouble,
  Building2,
  Users,
  Ruler,
  Layers3,
  IndianRupee,
} from "lucide-react";

const RoomCard = ({ room }) => {
  if (!room) {
    return (
      <div className="bg-white rounded-2xl shadow-md border p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Room Information
        </h2>

        <div className="flex items-center justify-center h-52 text-gray-500">
          Room information is unavailable.
        </div>
      </div>
    );
  }

  const statusColors = {
    available: "bg-green-100 text-green-700",
    occupied: "bg-red-100 text-red-700",
    maintenance: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Room Information
          </h2>

          <p className="text-sm text-gray-500">
            Room Details
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            statusColors[room.status] ||
            "bg-gray-100 text-gray-700"
          }`}
        >
          {room.status}
        </span>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Room Number */}

        <InfoItem
          icon={<Building2 size={20} />}
          title="Room Number"
          value={room.roomNumber}
        />

        {/* Room Type */}

        <InfoItem
          icon={<BedDouble size={20} />}
          title="Room Type"
          value={room.roomType}
        />

        {/* Price */}

        <InfoItem
          icon={<IndianRupee size={20} />}
          title="Price / Night"
          value={`₹${room.pricePerNight}`}
        />

        {/* Guests */}

        <InfoItem
          icon={<Users size={20} />}
          title="Max Guests"
          value={room.maxGuests}
        />

        {/* Room Size */}

        <InfoItem
          icon={<Ruler size={20} />}
          title="Room Size"
          value={`${room.roomSize} sq.ft`}
        />

        {/* Floor */}

        <InfoItem
          icon={<Layers3 size={20} />}
          title="Floor"
          value={room.floor}
        />

        {/* Bed Type */}

        <InfoItem
          icon={<BedDouble size={20} />}
          title="Bed Type"
          value={room.bedType}
        />

      </div>

      {/* Description */}

      <div className="mt-6 border-t pt-5">

        <h3 className="font-semibold text-gray-800 mb-2">
          Description
        </h3>

        <p className="text-gray-600 leading-7">
          {room.description}
        </p>

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

      <div>
        <p className="text-sm text-gray-500">
          {title}
        </p>

        <h4 className="font-semibold text-gray-800">
          {value}
        </h4>
      </div>

    </div>
  );
};

export default RoomCard;