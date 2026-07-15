import {
  FaTachometerAlt,
  FaBed,
  FaCalendarCheck,
  FaUsers,
  FaUserTie,
  FaMoneyBillWave,
  FaClipboardList,
  FaCog,
  FaClipboardCheck,
  FaSignOutAlt,
} from "react-icons/fa";

export const menuConfig = {
  admin: [
    {
      title: "Dashboard",
      path: "/admin",
      icon: FaTachometerAlt,
    },
    {
      title: "Rooms",
      path: "/admin/rooms",
      icon: FaBed,
    },
    {
      title: "Bookings",
      path: "/admin/bookings",
      icon: FaCalendarCheck,
    },
    {
      title: "Users",
      path: "/admin/users",
      icon: FaUsers,
    },
    {
      title: "Staff",
      path: "/admin/staff",
      icon: FaUserTie,
    },
    {
      title: "Payments",
      path: "/admin/payments",
      icon: FaMoneyBillWave,
    },
    {
      title: "Reports",
      path: "/admin/reports",
      icon: FaClipboardList,
    },
    {
      title: "Settings",
      path: "/admin/settings",
      icon: FaCog,
    },
  ],

  manager: [
    {
      title: "Dashboard",
      path: "/manager",
      icon: FaTachometerAlt,
    },
    {
      title: "Rooms",
      path: "/manager/rooms",
      icon: FaBed,
    },
    {
      title: "Bookings",
      path: "/manager/bookings",
      icon: FaCalendarCheck,
    },
    {
      title: "Staff",
      path: "/manager/staff",
      icon: FaUserTie,
    },
    {
      title: "Reports",
      path: "/manager/reports",
      icon: FaClipboardList,
    },
  ],

  receptionist: [
    {
      title: "Dashboard",
      path: "/receptionist",
      icon: FaTachometerAlt,
    },
    {
      title: "Walk In",
      path: "/receptionist/walkin",
      icon: FaClipboardCheck,
    },
    {
      title: "Bookings",
      path: "/receptionist/bookings",
      icon: FaCalendarCheck,
    },
    {
      title: "Guests",
      path: "/receptionist/guests",
      icon: FaUsers,
    },
  ],
};

export const logoutMenu = {
  title: "Logout",
  icon: FaSignOutAlt,
};