const RoomAmenities = ({ amenities = [] }) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-5 text-xl font-bold">
        Amenities
      </h2>

      <div className="flex flex-wrap gap-3">
        {amenities.length === 0 ? (
          <p className="text-slate-500">
            No amenities available
          </p>
        ) : (
          amenities.map((item) => (
            <span
              key={item}
              className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
            >
              {item}
            </span>
          ))
        )}
      </div>
    </div>
  );
};

export default RoomAmenities;