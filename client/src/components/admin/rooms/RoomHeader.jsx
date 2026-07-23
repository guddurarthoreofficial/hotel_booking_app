import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const RoomHeader = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Room Management
        </h1>

        <p className="mt-1 text-slate-500">
          Manage hotel rooms and availability.
        </p>
      </div>

      <Link
        to="/admin/rooms/add"
        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
      >
        <FaPlus />

        Add Room
      </Link>
    </div>
  );
};

export default RoomHeader;