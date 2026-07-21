import {
  FaEye,
  FaMapMarkerAlt,
  FaMoneyBillWave,
} from "react-icons/fa";


const RecentBookings = ({ bookings = [], loading }) => {
  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800">Recent Bookings</h2>
        <p className="mt-6 text-slate-500">Loading...</p>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800">Recent Bookings</h2>
        <p className="mt-6 text-slate-500">No bookings found.</p>
      </div>
    );
  }
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Recent Bookings
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest hotel reservations
          </p>
        </div>

        <button className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800">
          View All
        </button>

      </div>

      {/* Booking List */}

      <div className="space-y-4">



        {bookings.map((booking) => (

          <div
            key={booking._id}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-200
              p-5
              transition-all
              duration-300
              hover:border-blue-300
              hover:shadow-lg
            "
          >

            {/* Left */}

            <div className="flex items-center gap-4">

              {/* Avatar */}

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">

                {booking.guest?.name?.charAt(0)}

              </div>

              <div>

                <h3 className="font-semibold text-slate-800">

                  {booking.guest?.name}

                </h3>

                <p className="text-sm text-slate-500">

                  {booking.guest?.email}

                </p>

              </div>

            </div>

            {/* Room */}

            <div className="hidden lg:block">

              <p className="font-semibold text-slate-700">

                {booking.room?.roomType}

              </p>

              <p className="flex items-center gap-1 text-sm text-slate-500">

                <FaMapMarkerAlt />

                Room {booking.room?.roomNumber}

              </p>

            </div>

            {/* Amount */}

            <div className="hidden md:block">

              <p className="font-semibold text-slate-800">

                ₹{booking.totalAmount}

              </p>

              <p className="flex items-center gap-1 text-sm text-slate-500">

                <FaMoneyBillWave />

                Payment

              </p>

            </div>

            {/* CheckIn */}

            <div>

              <p className="font-semibold text-slate-700">

                {new Date(booking.checkInDate).toLocaleDateString()}

              </p>

            </div>

            {/* Badge */}

            <div>

              <span
                className={`rounded-full px-4 py-2 text-xs font-semibold ${booking.payment === "Paid"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
                  }`}
              >
                {<span
                  className={`rounded-full px-4 py-2 text-xs font-semibold ${booking.paymentStatus === "paid"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                    }`}
                >
                  {booking.paymentStatus === "paid" ? "Paid" : "Pending"}
                </span>}
              </span>

            </div>

            {/* Action */}

            <button
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-slate-100
                text-slate-700
                transition
                hover:bg-blue-600
                hover:text-white
              "
            >

              <FaEye />

            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RecentBookings;