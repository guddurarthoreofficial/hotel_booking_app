export const dashboardStats = [
  {
    title: "Total Rooms",
    value: 120,
    color: "bg-blue-600",
    change: "12% this month",
    icon: "bed",
  },
  {
    title: "Bookings",
    value: 98,
    color: "bg-emerald-600",
    change: "8 Today",
    icon: "booking",
  },
  {
    title: "Revenue",
    value: "₹4.8L",
    color: "bg-amber-500",
    change: "15% Growth",
    icon: "money",
  },
  {
    title: "Occupancy",
    value: "82%",
    color: "bg-violet-600",
    change: "Excellent",
    icon: "chart",
  },
];

export const recentBookings = [
  {
    id: 1,
    guest: "Rahul Sharma",
    email: "rahul@gmail.com",
    room: "Deluxe Room",
    roomNo: "205",
    amount: "₹8,500",
    checkIn: "Today",
    payment: "Paid",
  },
  {
    id: 2,
    guest: "Amit Kumar",
    email: "amit@gmail.com",
    room: "Suite Room",
    roomNo: "302",
    amount: "₹12,000",
    checkIn: "Tomorrow",
    payment: "Pending",
  },
  {
    id: 3,
    guest: "Neha Singh",
    email: "neha@gmail.com",
    room: "Standard Room",
    roomNo: "104",
    amount: "₹5,200",
    checkIn: "Today",
    payment: "Paid",
  },
];

export const roomStatus = [
  {
    label: "Available",
    value: 35,
    color: "bg-green-500",
    bg: "bg-green-50",
    text: "text-green-700",
  },
  {
    label: "Occupied",
    value: 68,
    color: "bg-red-500",
    bg: "bg-red-50",
    text: "text-red-700",
  },
  {
    label: "Reserved",
    value: 17,
    color: "bg-yellow-500",
    bg: "bg-yellow-50",
    text: "text-yellow-700",
  },
];

export const activities = [
  {
    id: 1,
    title: "Rahul Sharma Checked In",
    time: "10:20 AM",
    type: "checkin",
  },
  {
    id: 2,
    title: "Payment Received ₹8,500",
    time: "11:05 AM",
    type: "payment",
  },
  {
    id: 3,
    title: "Room 205 Checked Out",
    time: "12:15 PM",
    type: "checkout",
  },
  {
    id: 4,
    title: "Booking Confirmed",
    time: "01:30 PM",
    type: "booking",
  },
];