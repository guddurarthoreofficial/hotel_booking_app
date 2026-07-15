import {
  FaTachometerAlt,
  FaBed,
  FaCalendarCheck,
  FaUsers,
  FaUserTie,
  FaMoneyBillWave,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

export const menuConfig = {
  admin: [
    {
      section: "MAIN",
      items: [
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
      ],
    },

    {
      section: "MANAGEMENT",
      items: [
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
          icon: FaChartBar,
        },
        {
          title: "Settings",
          path: "/admin/settings",
          icon: FaCog,
        },
      ],
    },
  ],

  manager: [],

  receptionist: [],
};