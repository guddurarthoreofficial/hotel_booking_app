import {
  User,
  Mail,
  Phone,
  BadgeCheck,
} from "lucide-react";

const GuestCard = ({ guest }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border p-6">

      {/* Header */}

      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <User className="text-blue-600" size={24} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Guest Information
          </h2>

          <p className="text-sm text-gray-500">
            Customer Details
          </p>
        </div>
      </div>

      {/* Guest Name */}

      <div className="space-y-5">

        <div className="flex items-center gap-4">
          <div className="bg-gray-100 p-3 rounded-xl">
            <User size={20} className="text-gray-600" />
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Full Name
            </p>

            <h3 className="font-semibold text-gray-800">
              {guest?.name || "N/A"}
            </h3>
          </div>
        </div>

        {/* Email */}

        <div className="flex items-center gap-4">
          <div className="bg-gray-100 p-3 rounded-xl">
            <Mail size={20} className="text-gray-600" />
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Email Address
            </p>

            <h3 className="font-semibold text-gray-800 break-all">
              {guest?.email || "N/A"}
            </h3>
          </div>
        </div>

        {/* Phone */}

        <div className="flex items-center gap-4">
          <div className="bg-gray-100 p-3 rounded-xl">
            <Phone size={20} className="text-gray-600" />
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Phone Number
            </p>

            <h3 className="font-semibold text-gray-800">
              {guest?.phone || "N/A"}
            </h3>
          </div>
        </div>

        {/* Guest ID */}

        <div className="flex items-center gap-4">
          <div className="bg-gray-100 p-3 rounded-xl">
            <BadgeCheck size={20} className="text-gray-600" />
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Guest ID
            </p>

            <h3 className="font-semibold text-gray-800 break-all">
              {guest?._id || "N/A"}
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GuestCard;   