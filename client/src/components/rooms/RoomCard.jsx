import { Link } from "react-router-dom";
import { FaUsers, FaWifi, FaStar, FaCheckCircle, } from "react-icons/fa"; import { MdTv } from "react-icons/md";
import { Snowflake } from "lucide-react";

const RoomCard = ({ room }) => {
  const image =
    room.images?.length > 0
      ? room.images[0].url
      : "https://placehold.co/600x400?text=Juhi+Petals";

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">

      <div className="relative overflow-hidden"> <img src={image} alt={room.roomType} className="h-64 w-full object-cover transition duration-500 group-hover:scale-110" /> <span className="absolute top-4 left-4 bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"> <FaStar /> Premium </span> <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${room.status === "available" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`} > <FaCheckCircle /> {room.status} </span> </div>

      <div className="p-6 flex flex-col flex-grow">

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold capitalize">
            {room.roomType}
          </h2>

          <div className="text-right"> <h3 className="text-2xl font-bold text-blue-700"> ₹{room.pricePerNight} </h3> <p className="text-sm text-gray-500"> / Night </p> </div>

        </div>

        <p className="text-gray-500 mt-3 line-clamp-2">
          {room.description}
        </p>

        <div className="flex items-center gap-5 mt-6 text-gray-600 text-sm">

          <div className="flex items-center gap-2">
            <FaUsers />
            {room.maxGuests}
          </div>

          {room.amenities.includes("WiFi") && (
            <FaWifi />
          )}

          {room.amenities.includes("TV") && (
            <MdTv />
          )}

          {room.amenities.includes("AC") && (
            <Snowflake size={18} />
          )}

        </div>

        <Link
          to={`/rooms/${room._id}`}
          className="mt-auto block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
        >
          View Details
        </Link>

      </div>

    </div>
  );
};

export default RoomCard;