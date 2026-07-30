import {
  X,
  Mail,
  Phone,
  Shield,
  Calendar,
  User,
  Clock,
} from "lucide-react";

const UserViewModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  const roleColor = {
    admin: "bg-red-100 text-red-700",
    manager: "bg-purple-100 text-purple-700",
    receptionist: "bg-indigo-100 text-indigo-700",
    customer: "bg-blue-100 text-blue-700",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="relative overflow-hidden bg-gradient-to-r from-yellow-100 via-amber-50 to-sky-100 px-8 py-10">

          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full bg-white p-2 text-slate-600 shadow transition hover:bg-slate-100"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col items-center">

            <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-yellow-400 to-amber-500 text-5xl font-bold text-white shadow-xl">
              {user.name?.charAt(0).toUpperCase()}
            </div>

            <h2 className="mt-5 text-3xl font-bold">
              {user.name}
            </h2>

            <p className="mt-1 text-white/90">
              {user.email}
            </p>

            <div className="mt-4 flex gap-3">

              <span
                className={`rounded-full px-4 py-1 text-sm font-semibold ${roleColor[user.role]}`}
              >
                {user.role}
              </span>

              <span
                className={`rounded-full px-4 py-1 text-sm font-semibold ${
                  user.isActive
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {user.isActive ? "Active" : "Inactive"}
              </span>

            </div>

          </div>

        </div>

        {/* Body */}

        <div className="grid gap-5 p-8 md:grid-cols-2">

          <InfoCard
            icon={<Mail />}
            title="Email Address"
            value={user.email}
          />

          <InfoCard
            icon={<Phone />}
            title="Phone Number"
            value={user.phone || "Not Available"}
          />

          <InfoCard
            icon={<Shield />}
            title="Role"
            value={user.role}
          />

          <InfoCard
            icon={<User />}
            title="Account Status"
            value={user.isActive ? "Active" : "Inactive"}
          />

          <InfoCard
            icon={<Calendar />}
            title="Joined On"
            value={new Date(user.createdAt).toLocaleDateString(
              "en-IN",
              {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }
            )}
          />

          <InfoCard
            icon={<Clock />}
            title="Last Updated"
            value={new Date(user.updatedAt).toLocaleDateString(
              "en-IN",
              {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }
            )}
          />

        </div>

        {/* Footer */}

        <div className="flex justify-end border-t bg-slate-50 px-8 py-5">

          <button
            onClick={onClose}
            className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-black"
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
};

const InfoCard = ({ icon, title, value }) => (
  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:shadow-md">
    <div className="mb-3 flex items-center gap-3 text-amber-600">
      {icon}
      <span className="text-sm font-semibold text-slate-600">
        {title}
      </span>
    </div>

    <p className="text-lg font-semibold text-slate-800">
      {value}
    </p>
  </div>
);

export default UserViewModal;