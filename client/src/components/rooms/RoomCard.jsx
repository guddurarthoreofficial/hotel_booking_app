import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  const image =
    room.images?.length > 0
      ? room.images[0].url
      : "https://placehold.co/600x400?text=Juhi+Petals";

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

      <img
        src={image}
        alt={room.roomType}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h3 className="text-2xl font-bold capitalize">
          {room.roomType} Room
        </h3>

        <p className="text-gray-500 mt-2">
          {room.description}
        </p>

        <div className="mt-4 flex justify-between">

          <span className="font-bold text-blue-600">
            ₹{room.pricePerNight}/Night
          </span>

          <span>
            👤 {room.maxGuests} Guests
          </span>

        </div>

        <div className="mt-4 flex flex-wrap gap-2">

          {room.amenities.map((item) => (
            <span
              key={item}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}

        </div>

        <Link
          to={`/rooms/${room._id}`}
          className="block mt-6 text-center bg-amber-400 hover:bg-amber-300 py-3 rounded-xl font-semibold"
        >
          View Details
        </Link>

      </div>

    </div>
  );
};

export default RoomCard;