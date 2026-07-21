import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";

const SidebarFooter = ({ collapsed }) => {
  const { user, logout } = useAuth();

  return (
    <div className="border-t border-slate-800 p-4">

      {/* Profile */}

      <div
        className={`mb-5 flex items-center ${
          collapsed ? "justify-center" : "gap-3"
        }`}
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-800">
          <FaUserCircle className="text-2xl text-slate-300" />
        </div>

        {!collapsed && (
          <div className="min-w-0">
            <h4 className="truncate font-semibold text-white">
              {user?.name}
            </h4>

            <p className="text-xs capitalize text-slate-400">
              {user?.role}
            </p>
          </div>
        )}
      </div>

      {/* Logout */}

      <button
        onClick={logout}
        className={`
          w-full
          flex
          items-center
          rounded-xl
          px-4
          py-3
          text-red-400
          hover:bg-red-500/10
          transition-all

          ${collapsed ? "justify-center" : "gap-3"}
        `}
      >
        <FaSignOutAlt className="shrink-0" />

        {!collapsed && <span>Logout</span>}
      </button>

      {/* Version */}

      {!collapsed && (
        <p className="mt-5 text-center text-xs text-slate-500">
          Version 1.0.0
        </p>
      )}

    </div>
  );
};

export default SidebarFooter;