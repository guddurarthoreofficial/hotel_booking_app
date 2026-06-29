import { useState } from "react";
import { FaBell } from "react-icons/fa";

const notifications = [
  {
    id: 1,
    title: "Booking Confirmed",
    message: "Your Deluxe Room booking has been confirmed.",
  },
  {
    id: 2,
    title: "Payment Successful",
    message: "Your payment has been received successfully.",
  },
  {
    id: 3,
    title: "Invoice Ready",
    message: "You can now download your invoice.",
  },
];

const NotificationBell = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="relative h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
      >
        <FaBell className="text-xl text-slate-700" />

        <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">
          {notifications.length}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-4 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden z-50">

          <div className="px-6 py-4 border-b">

            <h2 className="font-bold text-lg">
              Notifications
            </h2>

          </div>

          {notifications.map((item) => (

            <div
              key={item.id}
              className="px-6 py-4 border-b hover:bg-gray-50 transition cursor-pointer"
            >

              <h3 className="font-semibold">

                {item.title}

              </h3>

              <p className="text-gray-500 text-sm mt-1">

                {item.message}

              </p>

            </div>

          ))}

          <button
            className="w-full py-4 text-blue-600 font-semibold hover:bg-blue-50"
          >
            View All Notifications
          </button>

        </div>
      )}

    </div>
  );
};

export default NotificationBell;