const BookingSummary = ({ room }) => {
  const image =
    room.images?.length > 0
      ? room.images[0].url
      : "https://placehold.co/800x500?text=Juhi+Petals";

  return (
    <div className="sticky top-28 rounded-3xl bg-white shadow-2xl overflow-hidden">

      <img
        src={image}
        alt={room.roomType}
        className="h-72 w-full object-cover"
      />

      <div className="p-8">

        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          Available
        </span>

        <h2 className="text-3xl font-bold capitalize mt-5">
          {room.roomType} Room
        </h2>

        <p className="text-gray-500 mt-3">
          {room.description}
        </p>

        <div className="flex justify-between mt-8">

          <span className="text-gray-500">
            Price / Night
          </span>

          <span className="text-2xl font-bold text-blue-600">
            ₹ {room.pricePerNight}
          </span>

        </div>

        <div className="mt-8">

          <h3 className="font-bold text-lg">
            Amenities
          </h3>

          <div className="flex flex-wrap gap-2 mt-4">

            {room.amenities.map((item) => (
              <span
                key={item}
                className="bg-gray-100 px-3 py-2 rounded-full text-sm"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default BookingSummary;