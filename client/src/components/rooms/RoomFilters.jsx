const RoomFilters = ({
  search,
  setSearch,
  roomType,
  setRoomType,
  status,
  setStatus,
  price,
  setPrice,
  sort,
  setSort,
  resetFilters,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border p-6 lg:sticky lg:top-24">

      <h2 className="text-2xl font-bold mb-6">
        Filters
      </h2>

      {/* Search */}

      <div className="mb-5">
        <label className="block mb-2 font-medium">
          Search Room
        </label>

        <input
          type="text"
          placeholder="Room Number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Room Type */}

      <div className="mb-5">
        <label className="block mb-2 font-medium">
          Room Type
        </label>

        <select
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          className="w-full border rounded-xl px-4 py-3"
        >
          <option value="">All</option>
          <option value="standard">Standard</option>
          <option value="deluxe">Deluxe</option>
          <option value="premium">Premium</option>
          <option value="suite">Suite</option>
        </select>
      </div>

      {/* Status */}

      <div className="mb-5">
        <label className="block mb-2 font-medium">
          Availability
        </label>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border rounded-xl px-4 py-3"
        >
          <option value="">All</option>
          <option value="available">Available</option>
          <option value="occupied">Occupied</option>
          <option value="maintenance">Maintenance</option>
        </select>
      </div>

      {/* Price */}

      <div className="mb-5">
        <label className="block mb-2 font-medium">
          Price Range
        </label>

        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border rounded-xl px-4 py-3"
        >
          <option value="">All Prices</option>
          <option value="0-3000">₹0 - ₹3000</option>
          <option value="3001-6000">₹3001 - ₹6000</option>
          <option value="6001-10000">₹6001 - ₹10000</option>
          <option value="10001-999999">₹10000+</option>
        </select>
      </div>

      {/* Sort */}

      <div className="mb-8">
        <label className="block mb-2 font-medium">
          Sort By
        </label>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full border rounded-xl px-4 py-3"
        >
          <option value="">Newest</option>
          <option value="price_asc">Price: Low → High</option>
          <option value="price_desc">Price: High → Low</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      <button
        onClick={resetFilters}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
      >
        Reset Filters
      </button>

    </div>
  );
};

export default RoomFilters;