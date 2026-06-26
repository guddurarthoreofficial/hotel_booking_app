import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHotel,
  FaHome,
  FaBed,
  FaInfoCircle,
  FaPhoneAlt,
  FaCalendarCheck,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-amber-400 font-semibold"
      : "text-white hover:text-amber-400 transition";

  return (
    <>
      {/* Navbar */}

      <header className="sticky top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">

          <div className="h-20 flex justify-between items-center">

            {/* Logo */}

            <NavLink
              to="/"
              className="flex items-center gap-3"
            >
              <div className="bg-amber-400 h-12 w-12 rounded-xl flex items-center justify-center">

                <FaHotel className="text-2xl text-black" />

              </div>

              <div>

                <h2 className="text-white font-bold text-xl">
                  Juhi Petals
                </h2>

                <p className="text-xs text-gray-300">
                  Luxury City Hotel
                </p>

              </div>

            </NavLink>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-8">

              <NavLink className={navClass} to="/">
                Home
              </NavLink>

              <NavLink className={navClass} to="/rooms">
                Rooms
              </NavLink>

              <NavLink className={navClass} to="/about">
                About
              </NavLink>

              <NavLink className={navClass} to="/contact">
                Contact
              </NavLink>

              {isAuthenticated && (
                <NavLink
                  className={navClass}
                  to="/my-bookings"
                >
                  My Bookings
                </NavLink>
              )}
            </nav>

            {/* Right */}

            <div className="hidden lg:block">

              {isAuthenticated ? (
                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg text-white transition"
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className="bg-amber-400 hover:bg-amber-300 px-6 py-3 rounded-lg text-black font-semibold transition"
                >
                  Login
                </NavLink>
              )}

            </div>

            {/* Mobile Button */}

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-white text-2xl"
            >
              <FaBars />
            </button>

          </div>

        </div>
      </header>

      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition ${open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
          }`}
      />

      {/* Drawer */}

      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-slate-900 z-50 transition-transform duration-300 ${open
            ? "translate-x-0"
            : "-translate-x-full"
          }`}
      >

        <div className="flex justify-between items-center p-6 border-b border-gray-700">

          <div>

            <h2 className="text-white font-bold text-xl">
              Juhi Petals
            </h2>

            <p className="text-gray-400 text-sm">
              Luxury City Hotel
            </p>

          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl"
          >
            <FaTimes />
          </button>

        </div>

        <nav className="flex flex-col mt-6">

          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-4 px-6 py-4 text-white hover:bg-slate-800"
          >
            <FaHome />
            Home
          </NavLink>

          <NavLink
            to="/rooms"
            onClick={() => setOpen(false)}
            className="flex items-center gap-4 px-6 py-4 text-white hover:bg-slate-800"
          >
            <FaBed />
            Rooms
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className="flex items-center gap-4 px-6 py-4 text-white hover:bg-slate-800"
          >
            <FaInfoCircle />
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center gap-4 px-6 py-4 text-white hover:bg-slate-800"
          >
            <FaPhoneAlt />
            Contact
          </NavLink>

          {isAuthenticated && (
            <NavLink
              to="/my-bookings"
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 px-6 py-4 text-white hover:bg-slate-800"
            >
              <FaCalendarCheck />
              My Bookings
            </NavLink>
          )}

          <div className="mt-6 px-6">

            {isAuthenticated ? (
              <button
                onClick={logout}
                className="w-full bg-red-500 hover:bg-red-600 rounded-lg py-3 text-white flex justify-center items-center gap-2"
              >
                <FaSignOutAlt />
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                onClick={() => setOpen(false)}
                className="w-full bg-amber-400 hover:bg-amber-300 rounded-lg py-3 text-black flex justify-center items-center gap-2"
              >
                <FaSignInAlt />
                Login
              </NavLink>
            )}

          </div>

        </nav>

      </aside>
    </>
  );
};

export default Navbar;