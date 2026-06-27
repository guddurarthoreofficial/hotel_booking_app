import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { getMyBookings } from "../../services/bookingService";
import toast from "react-hot-toast";
import { cancelBooking } from "../../services/bookingService";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const data = await getMyBookings();
      setBookings(data.bookings);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto py-20">
          Loading...
        </div>
      </MainLayout>
    );
  }


  const handleCancelBooking = async (bookingId) => {
    const confirm = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirm) return;

    try {
      await cancelBooking(bookingId);

      toast.success("Booking cancelled successfully");

      fetchBookings();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Unable to cancel booking"
      );
    }
  };

  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold mb-10">
          My Bookings
        </h1>

        {bookings.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">
              No Bookings Found
            </h2>

            <p className="text-gray-500 mt-3">
              Book your first stay at Juhi Petals.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-3"
              >
                {/* Image */}
                <img
                  src={
                    booking.room.images?.length
                      ? booking.room.images[0].url
                      : "https://placehold.co/600x400?text=Juhi+Petals"
                  }
                  alt={booking.room.roomType}
                  className="h-72 w-full object-cover"
                />

                {/* Details */}
                <div className="lg:col-span-2 p-8">

                  <h2 className="text-3xl font-bold capitalize">
                    {booking.room.roomType} Room
                  </h2>

                  <p className="mt-4">
                    <strong>Room:</strong> {booking.room.roomNumber}
                  </p>

                  <p className="mt-2">
                    <strong>Check In:</strong>{" "}
                    {new Date(booking.checkInDate).toLocaleDateString()}
                  </p>

                  <p className="mt-2">
                    <strong>Check Out:</strong>{" "}
                    {new Date(booking.checkOutDate).toLocaleDateString()}
                  </p>

                  <p className="mt-2">
                    <strong>Guests:</strong> {booking.totalGuests}
                  </p>

                  <p className="mt-2">
                    <strong>Total:</strong> ₹{booking.totalAmount}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">
                    <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700">
                      {booking.status}
                    </span>

                    <span className="px-4 py-2 rounded-full bg-green-100 text-green-700">
                      {booking.paymentStatus}
                    </span>
                  </div>
                  {
                    booking.status !== "cancelled" && (
                      <button
                        onClick={() => handleCancelBooking(booking._id)}
                        className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl transition"
                      >
                        Cancel Booking
                      </button>
                    )
                  }

                </div>
              </div>
            ))}
          </div>
        )}

      </section>
    </MainLayout>
  );
};

export default MyBookings;