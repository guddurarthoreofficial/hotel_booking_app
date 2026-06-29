import { useEffect, useState } from "react";
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
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";
import UserMenu from "../common/navbar/UserMenu";
import NotificationBell from "../common/navbar/NotificationBell";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const navClass = ({ isActive }) =>
    `relative pb-1 font-medium transition-all duration-300
   ${isActive
      ? "text-amber-400 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-amber-400"
      : "text-white hover:text-amber-400 after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-amber-400 after:transition-all after:duration-300"
    }`;

  return (
    <>
      {/* Navbar */}

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-slate-950/60 backdrop-blur-2xl shadow-2xl border-b border-white/10"
          : "bg-slate-950"
          }`}
      >
        <div
          className={`max-w-7xl mx-auto px-6 transition-all duration-500 ${scrolled ? "py-1" : "py-3"
            }`}
        >
          <div className="flex justify-between items-center h-16">
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

              {/* {isAuthenticated && (
                <NavLink
                  className={navClass}
                  to="/my-bookings"
                >
                  My Bookings
                </NavLink>
              )} */}
            </nav>



            {/* Right */}

            <div className="hidden lg:flex items-center gap-5">

              {isAuthenticated ? (
                <>
                  <NotificationBell />

                  <UserMenu />
                </>
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
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-slate-950 to-slate-900 z-50 transition-transform duration-300 ${open
          ? "translate-x-0"
          : "-translate-x-full"
          }`}
      >

        <div className="p-6 border-b border-slate-700">

          {isAuthenticated ? (

            <>

              <div className="flex items-center gap-4">

                <div className="h-16 w-16 rounded-full bg-amber-400 text-black flex items-center justify-center text-2xl font-bold">

                  {user?.name
                    ?.split(" ")
                    .map((item) => item[0])
                    .join("")
                    .toUpperCase()}

                </div>

                <div>

                  <h2 className="text-white font-bold text-lg">

                    {user?.name}

                  </h2>

                  <p className="text-slate-400 capitalize">

                    {user?.role}

                  </p>

                </div>

              </div>

            </>

          ) : (

            <>

              <h2 className="text-white font-bold text-xl">

                Juhi Petals

              </h2>

              <p className="text-slate-400">

                Luxury Hotel

              </p>

            </>

          )}

          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            <FaTimes />
          </button>

        </div>

        <nav className="flex flex-col mt-5 gap-2">

          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-4 mx-3 rounded-xl transition-all duration-300
  ${isActive
                ? "bg-amber-400 text-black font-semibold"
                : "text-white hover:bg-slate-800"
              }`
            }
          >
            <FaHome />
            Home
          </NavLink>

          <NavLink
            to="/rooms"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-4 mx-3 rounded-xl transition-all duration-300
  ${isActive
                ? "bg-amber-400 text-black font-semibold"
                : "text-white hover:bg-slate-800"
              }`
            }
          >
            <FaBed />
            Rooms
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-4 mx-3 rounded-xl transition-all duration-300
  ${isActive
                ? "bg-amber-400 text-black font-semibold"
                : "text-white hover:bg-slate-800"
              }`
            }
          >
            <FaInfoCircle />
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-4 mx-3 rounded-xl transition-all duration-300
  ${isActive
                ? "bg-amber-400 text-black font-semibold"
                : "text-white hover:bg-slate-800"
              }`
            }
          >
            <FaPhoneAlt />
            Contact
          </NavLink>

          {isAuthenticated && (
            <NavLink
              to="/my-bookings"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 px-6 py-4 mx-3 rounded-xl transition-all duration-300
  ${isActive
                  ? "bg-amber-400 text-black font-semibold"
                  : "text-white hover:bg-slate-800"
                }`
              }
            >
              <FaCalendarCheck />
              My Bookings
            </NavLink>
          )}

          {
            isAuthenticated && (
              <NavLink
                to="/profile"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-6 py-4 mx-3 rounded-xl transition-all duration-300
  ${isActive
                    ? "bg-amber-400 text-black font-semibold"
                    : "text-white hover:bg-slate-800"
                  }`
                }
              >
                <FaUserCircle />

                My Profile

              </NavLink>
            )
          }

          <div className="mt-6 px-6">

            {isAuthenticated ? (
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="w-full rounded-xl bg-red-500hover:bg-red-600 transition py-4 font-semibold text-white flex justify-center items-center gap-3 "
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

          <div className="mt-auto px-6 py-8">

            <div className="border-t border-slate-700 pt-6">

              <p className="text-center text-slate-500 text-sm">

                © 2026

              </p>

              <p className="text-center text-amber-400 font-semibold mt-2">

                Juhi Petals Hotel

              </p>

            </div>

          </div>

        </nav>

      </aside>
    </>
  );
};

export default Navbar;