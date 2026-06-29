const EmptyRooms = ({ onReset }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg border p-12 text-center">

      <div className="text-7xl mb-6">
        🏨
      </div>

      <h2 className="text-3xl font-bold text-gray-800">
        No Rooms Found
      </h2>

      <p className="text-gray-500 mt-4">
        We couldn't find any rooms matching your filters.
      </p>

      <button
        onClick={onReset}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold"
      >
        Reset Filters
      </button>

    </div>
  );
};

export default EmptyRooms;