import { FaHotel } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";

const SidebarHeader = ({ collapsed }) => {
  const { user } = useAuth();

  return (
    <div className="border-b border-slate-800 p-4">

      <div
        className={`flex items-center ${
          collapsed ? "justify-center" : "gap-4"
        }`}
      >
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-400">
          <FaHotel className="text-2xl text-black" />
        </div>

        {!collapsed && (
          <div className="min-w-0">
            <h2 className="truncate text-xl font-bold text-white">
              Juhi Petals
            </h2>

            <p className="text-sm text-slate-400">
              Hotel Management
            </p>

            <span className="mt-2 inline-block rounded-full bg-amber-400/20 px-3 py-1 text-xs font-medium text-amber-400">
              {user?.role?.toUpperCase()}
            </span>
          </div>
        )}
      </div>

    </div>
  );
};

export default SidebarHeader;