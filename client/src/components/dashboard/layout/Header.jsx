  import {
    FaBars,
    FaBell,

    FaChevronDown,
  } from "react-icons/fa";

  import { Search } from "lucide-react";

  import { useLocation } from "react-router-dom";
  import { useAuth } from "../../../context/AuthContext";

  const Header = ({
    setSidebarOpen,
    collapsed,
    setCollapsed,
  }) => {
    const { user } = useAuth();
    const location = useLocation();

    const pageName =
      location.pathname === "/admin"
        ? "Dashboard"
        : location.pathname
          .split("/")
          .pop()
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());


    const handleSidebar = () => {
      if (window.innerWidth >= 1024) {
        setCollapsed(!collapsed);
      } else {
        setSidebarOpen(true);
      }
    };

    return (
      <header className="sticky top-0 z-30 h-20 shrink-0 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">

        <div className="flex h-full items-center justify-between px-6">

          {/* Left */}
          <div className="flex items-center gap-5">

            <button
              onClick={handleSidebar}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-amber-50 hover:border-amber-300"
            >
              <FaBars className="text-slate-700" />
            </button>

            <div>
              <h1 className="text-2xl font-bold capitalize text-slate-800">
                {pageName}
              </h1>

              <p className="text-sm text-slate-500">
                Dashboard / {pageName}
              </p>
            </div>

          </div>

          {/* Search */}
          {/* Search */}
          <div className="hidden lg:flex flex-1 justify-center px-8">

            <div className="relative w-full max-w-lg">

              <div className="relative w-full max-w-lg">

                <Search
                  size={18}
                  strokeWidth={2}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />

                <input
                  type="text"
                  placeholder="Search rooms, bookings..."
                  className="
        w-full
        h-12
        rounded-xl
        border
        border-slate-200
        bg-slate-50

        pl-14
        pr-4

        text-sm
        placeholder:text-slate-400

        outline-none
        transition
        focus:bg-white
        focus:border-amber-400
      "
                />

              </div>

            </div>

          </div>

          {/* Right */}
          <div className="flex items-center gap-4">

            <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-amber-50 hover:border-amber-300">

              <FaBell className="text-slate-700" />

              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
                3
              </span>

            </button>

            <button className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2 transition hover:bg-amber-50 hover:border-amber-300">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 font-bold text-slate-900">

                {user?.name?.charAt(0)?.toUpperCase()}

              </div>

              <div className="hidden md:block text-left">

                <h4 className="font-semibold text-slate-800">

                  {user?.name}

                </h4>

                <p className="text-xs capitalize text-slate-500">

                  {user?.role}

                </p>

              </div>

              <FaChevronDown className="hidden md:block text-slate-500" />

            </button>

          </div>

        </div>

      </header>
    );
  };

  export default Header;