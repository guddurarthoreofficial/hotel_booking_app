import {
  FaCheckCircle,
  FaMoneyBillWave,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const activities = [
  {
    id: 1,
    title: "Rahul Sharma Checked In",
    time: "10:20 AM",
    icon: <FaSignInAlt />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Payment Received ₹8,500",
    time: "11:05 AM",
    icon: <FaMoneyBillWave />,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Room 205 Checked Out",
    time: "12:15 PM",
    icon: <FaSignOutAlt />,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 4,
    title: "Booking Confirmed",
    time: "01:30 PM",
    icon: <FaCheckCircle />,
    color: "bg-purple-100 text-purple-600",
  },
];

const ActivityTimeline = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold text-slate-800">
        Today's Activity
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Recent hotel activities
      </p>

      <div className="mt-8 space-y-6">

        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4">

            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${activity.color}`}
            >
              {activity.icon}
            </div>

            <div className="flex-1 border-b border-slate-100 pb-5">

              <h4 className="font-semibold text-slate-800">
                {activity.title}
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                {activity.time}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ActivityTimeline;