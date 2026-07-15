import { FaBars, FaBell } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";

const Header = ({ setSidebarOpen }) => {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-30 h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6">

      {/* Left */}

      <div className="flex items-center gap-4">

        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden text-2xl"
        >
          <FaBars />
        </button>

        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Dashboard
          </h1>

          <p className="text-sm text-slate-500">
            Welcome back 👋
          </p>
        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        <button className="relative">

          <FaBell className="text-2xl text-slate-700" />

          <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">

            3

          </span>

        </button>

        <div className="flex items-center gap-3">

          <div className="h-11 w-11 rounded-full bg-amber-400 flex items-center justify-center font-bold">

            {user?.name?.charAt(0)}

          </div>

          <div className="hidden md:block">

            <h3 className="font-semibold">

              {user?.name}

            </h3>

            <p className="text-xs text-slate-500">

              {user?.role}

            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Header;