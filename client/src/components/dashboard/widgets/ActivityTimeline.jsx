import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import {
  FaCheckCircle,
  FaMoneyBillWave,
  FaSignInAlt,
  FaSignOutAlt,
  FaBed,
} from "react-icons/fa";

dayjs.extend(relativeTime);

const iconMap = {
  booking: {
    icon: <FaCheckCircle />,
    color: "bg-purple-100 text-purple-600",
  },

  payment: {
    icon: <FaMoneyBillWave />,
    color: "bg-green-100 text-green-600",
  },

  checkin: {
    icon: <FaSignInAlt />,
    color: "bg-blue-100 text-blue-600",
  },

  checkout: {
    icon: <FaSignOutAlt />,
    color: "bg-orange-100 text-orange-600",
  },

  room: {
    icon: <FaBed />,
    color: "bg-indigo-100 text-indigo-600",
  },
};

const ActivityTimeline = ({
  activities = [],
  loading = false,
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-800">
        Today's Activity
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Recent hotel activities
      </p>

      <div className="mt-8 space-y-6">
        {loading ? (
          <div className="py-10 text-center text-slate-500">
            Loading activities...
          </div>
        ) : activities.length === 0 ? (
          <div className="py-10 text-center text-slate-500">
            No activities found
          </div>
        ) : (
          activities.map((activity) => {
            const current =
              iconMap[activity.icon] || iconMap.booking;

            return (
              <div
                key={activity._id}
                className="flex gap-4"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${current.color}`}
                >
                  {current.icon}
                </div>

                <div className="flex-1 border-b border-slate-100 pb-5">
                  <h4 className="font-semibold text-slate-800">
                    {activity.description}
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    {dayjs(activity.createdAt).fromNow()}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ActivityTimeline;