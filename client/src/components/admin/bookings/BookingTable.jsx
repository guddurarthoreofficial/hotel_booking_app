import BookingActions from "./BookingActions";
import BookingStatusBadge from "./BookingStatusBadge";
import PaymentStatusBadge from "./PaymentStatusBadge";

const BookingTable = ({ bookings, refresh }) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr className="text-left text-sm font-semibold text-gray-700">
              <th className="px-6 py-4">Guest</th>
              <th className="px-6 py-4">Room</th>
              <th className="px-6 py-4">Check In</th>
              <th className="px-6 py-4">Check Out</th>
              <th className="px-6 py-4">Guests</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Booking</th>
              <th className="px-6 py-4">Payment</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4">
                  <div className="font-semibold">
                    {booking.guest?.name}
                  </div>

                  <div className="text-sm text-gray-500">
                    {booking.guest?.email}
                  </div>
                </td>

                <td className="px-6 py-4">
                  {booking.room?.roomNumber}
                </td>

                <td className="px-6 py-4">
                  {new Date(
                    booking.checkInDate
                  ).toLocaleDateString()}
                </td>

                <td className="px-6 py-4">
                  {new Date(
                    booking.checkOutDate
                  ).toLocaleDateString()}
                </td>

                <td className="px-6 py-4">
                  {booking.totalGuests}
                </td>

                <td className="px-6 py-4 font-semibold">
                  ₹{booking.totalAmount}
                </td>

                <td className="px-6 py-4">
                  <BookingStatusBadge
                    status={booking.status}
                  />
                </td>

                <td className="px-6 py-4">
                  <PaymentStatusBadge
                    status={booking.paymentStatus}
                  />
                </td>

                <td className="px-6 py-4">
                  <BookingActions
                    booking={booking}
                    refresh={refresh}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingTable;