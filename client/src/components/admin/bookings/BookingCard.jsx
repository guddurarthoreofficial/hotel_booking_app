import {
  CalendarDays,
  Users,
  IndianRupee,
  Clock3,
  Hash,
  BadgeCheck,
} from "lucide-react";

const BookingCard = ({ booking }) => {
  const checkIn = new Date(booking.checkInDate);
  const checkOut = new Date(booking.checkOutDate);
  const createdAt = new Date(booking.createdAt);

  const totalNights = Math.max(
    1,
    Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24))
  );

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-700",
    confirmed: "bg-blue-100 text-blue-700",
    checked_in: "bg-green-100 text-green-700",
    checked_out: "bg-purple-100 text-purple-700",
    cancelled: "bg-red-100 text-red-700",
  };

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <div className="bg-white rounded-2xl shadow-md border p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Booking Details
          </h2>

          <p className="text-sm text-gray-500">
            Reservation Information
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            statusColors[booking.status]
          }`}
        >
          {booking.status.replace("_", " ").toUpperCase()}
        </span>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <InfoItem
          icon={<Hash size={20} />}
          title="Booking ID"
          value={booking._id}
        />

        <InfoItem
          icon={<CalendarDays size={20} />}
          title="Check In"
          value={formatDate(booking.checkInDate)}
        />

        <InfoItem
          icon={<CalendarDays size={20} />}
          title="Check Out"
          value={formatDate(booking.checkOutDate)}
        />

        <InfoItem
          icon={<Clock3 size={20} />}
          title="Total Nights"
          value={`${totalNights} Night${totalNights > 1 ? "s" : ""}`}
        />

        <InfoItem
          icon={<Users size={20} />}
          title="Guests"
          value={booking.totalGuests}
        />

        <InfoItem
          icon={<IndianRupee size={20} />}
          title="Total Amount"
          value={`₹${booking.totalAmount}`}
        />

        <InfoItem
          icon={<BadgeCheck size={20} />}
          title="Booked On"
          value={formatDate(createdAt)}
        />

      </div>
    </div>
  );
};

const InfoItem = ({ icon, title, value }) => {
  return (
    <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">

      <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-sm text-gray-500">
          {title}
        </p>

        <h4 className="font-semibold text-gray-800 break-all">
          {value}
        </h4>
      </div>

    </div>
  );
};

export default BookingCard;