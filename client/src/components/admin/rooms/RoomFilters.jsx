import { FaSearch } from "react-icons/fa";

const RoomFilters = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-3">
        {/* Search */}
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search room..."
            className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 outline-none focus:border-blue-500"
          />
        </div>

        {/* Status */}
        <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500">
          <option>All Status</option>
          <option>Available</option>
          <option>Occupied</option>
          <option>Maintenance</option>
        </select>

        {/* Type */}
        <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500">
          <option>All Types</option>
          <option>Standard</option>
          <option>Deluxe</option>
          <option>Suite</option>
        </select>
      </div>
    </div>
  );
};

export default RoomFilters;