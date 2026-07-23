import { FaSearch } from "react-icons/fa";

const RoomFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      page: 1,
      [name]: value,
    }));
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-4">
        {/* Search */}
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleChange}
            placeholder="Search room..."
            className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 outline-none focus:border-blue-500"
          />
        </div>

        {/* Status */}
        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="rounded-xl border border-slate-300 px-4 py-3"
        >
          <option value="">All Status</option>
          <option value="available">Available</option>
          <option value="occupied">Occupied</option>
          <option value="maintenance">Maintenance</option>
        </select>

        {/* Room Type */}
        <select
          name="roomType"
          value={filters.roomType}
          onChange={handleChange}
          className="rounded-xl border border-slate-300 px-4 py-3"
        >
          <option value="">All Types</option>
          <option value="Standard">Standard</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Suite">Suite</option>
        </select>

        {/* Sort */}
        <select
          name="sort"
          value={filters.sort}
          onChange={handleChange}
          className="rounded-xl border border-slate-300 px-4 py-3"
        >
          <option value="">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default RoomFilters;