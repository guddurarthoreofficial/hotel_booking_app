import { NavLink } from "react-router-dom";
import { FaHotel, FaTimes } from "react-icons/fa";
import { menuConfig, logoutMenu } from "../../../config/menuConfig";
import { useAuth } from "../../../context/AuthContext";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { user, logout } = useAuth();

  const role = user?.role || "admin";

  const menus = menuConfig[role] || [];

  return (
    <>
      {/* Mobile Overlay */}

      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 lg:hidden transition-all duration-300
        ${
          sidebarOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72
        bg-slate-950 border-r border-slate-800
        transition-transform duration-300
        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}

        <div className="h-20 px-6 border-b border-slate-800 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="h-12 w-12 rounded-xl bg-amber-400 flex items-center justify-center">

              <FaHotel className="text-black text-2xl" />

            </div>

            <div>

              <h2 className="text-white font-bold text-xl">
                Juhi Petals
              </h2>

              <p className="text-slate-400 text-sm">
                {role.toUpperCase()}
              </p>

            </div>

          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white text-xl"
          >
            <FaTimes />
          </button>

        </div>

        {/* Menu */}

        <nav className="flex flex-col gap-2 p-4">

          {menus.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 rounded-2xl px-5 py-4 transition-all
                  ${
                    isActive
                      ? "bg-amber-400 text-black font-semibold"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <Icon className="text-xl" />

                <span>{item.title}</span>

              </NavLink>
            );

          })}

        </nav>

        {/* Bottom */}

        <div className="absolute bottom-5 left-0 w-full px-4">

          <button
            onClick={logout}
            className="w-full flex items-center gap-4 rounded-2xl px-5 py-4 text-red-400 hover:bg-red-500/10 transition"
          >
            <logoutMenu.icon className="text-xl" />

            Logout

          </button>

        </div>

      </aside>
    </>
  );
};

export default Sidebar;