import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}

          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            JuhiPetals
          </Link>

          {/* Menu */}

          <div className="flex items-center gap-6">

            <NavLink
              to="/"
              className="hover:text-blue-600"
            >
              Home
            </NavLink>

            <NavLink
              to="/rooms"
              className="hover:text-blue-600"
            >
              Rooms
            </NavLink>

            {
              isAuthenticated && (
                <NavLink
                  to="/my-bookings"
                  className="hover:text-blue-600"
                >
                  My Bookings
                </NavLink>
              )
            }

          </div>

          {/* Right */}

          <div className="flex gap-3">

            {
              isAuthenticated ? (

                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Logout
                </button>

              ) : (

                <>
                  <Link
                    to="/login"
                    className="text-blue-600"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Register
                  </Link>
                </>

              )
            }

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;