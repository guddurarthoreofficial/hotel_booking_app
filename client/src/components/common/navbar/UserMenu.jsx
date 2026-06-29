import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaCalendarCheck,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";

import { useAuth } from "../../../context/AuthContext";

const UserMenu = () => {
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);

  const initials =
    user?.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Button */}

      <button
        className="
        flex
        items-center
        gap-3
        bg-white
        rounded-full
        pl-2
        pr-4
        py-2
        shadow-lg
        hover:shadow-xl
        transition
      "
      >
        <div
          className="
          h-11
          w-11
          rounded-full
          bg-amber-400
          flex
          items-center
          justify-center
          font-bold
        "
        >
          {initials}
        </div>

        <div className="hidden md:block text-left">

          <p className="font-semibold">

            {user?.name}

          </p>

          <p className="text-xs text-gray-500">

            {user?.role}

          </p>

        </div>

        <FaChevronDown
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}

      {open && (

        <div
          className="
          absolute
          right-0
          mt-3
          w-64
          bg-white
          rounded-2xl
          shadow-2xl
          overflow-hidden
          z-50
        "
        >

          <Link
            to="/profile"
            className="
            flex
            items-center
            gap-4
            px-6
            py-4
            hover:bg-gray-100
          "
          >

            <FaUser />

            Profile

          </Link>

          <Link
            to="/my-bookings"
            className="
            flex
            items-center
            gap-4
            px-6
            py-4
            hover:bg-gray-100
          "
          >

            <FaCalendarCheck />

            My Bookings

          </Link>

          <button
            onClick={logout}
            className="
            w-full
            flex
            items-center
            gap-4
            px-6
            py-4
            hover:bg-red-50
            text-red-600
          "
          >

            <FaSignOutAlt />

            Logout

          </button>

        </div>

      )}

    </div>
  );
};

export default UserMenu;