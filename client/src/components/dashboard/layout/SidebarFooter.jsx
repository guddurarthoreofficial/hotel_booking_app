import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";

const SidebarFooter = () => {
  const { user, logout } = useAuth();

  return (
    <div className="border-t border-slate-800 p-4">

      {/* Profile */}

      <div className="flex items-center gap-3 mb-5">

        <div className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center">

          <FaUserCircle className="text-2xl text-slate-300" />

        </div>

        <div className="min-w-0">

          <h4 className="text-white font-semibold truncate">

            {user?.name}

          </h4>

          <p className="text-xs text-slate-400 capitalize">

            {user?.role}

          </p>

        </div>

      </div>

      {/* Logout */}

      <button
        onClick={logout}
        className="
          w-full
          flex
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          text-red-400
          hover:bg-red-500/10
          transition-all
        "
      >

        <FaSignOutAlt />

        Logout

      </button>

      {/* Version */}

      <p className="mt-5 text-center text-xs text-slate-500">

        Version 1.0.0

      </p>

    </div>
  );
};

export default SidebarFooter;