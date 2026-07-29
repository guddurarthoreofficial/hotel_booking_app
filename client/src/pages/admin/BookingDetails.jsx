import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

import { getBookingById } from "../../services/bookingService";

import ImageGallery from "../../components/admin/bookings/ImageGallery";
import GuestCard from "../../components/admin/bookings/GuestCard";
import RoomCard from "../../components/admin/bookings/RoomCard";
import BookingCard from "../../components/admin/bookings/BookingCard";
import PaymentCard from "../../components/admin/bookings/PaymentCard";
import AmenitiesCard from "../../components/admin/bookings/AmenitiesCard";
import BookingActionButtons from "../../components/admin/bookings/BookingActionButtons";

const BookingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBooking = async () => {
    try {
      setLoading(true);

      const res = await getBookingById(id);

      setBooking(res.booking);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to fetch booking."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooking();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="text-lg font-semibold text-gray-500">
          Loading Booking...
        </div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h2 className="text-2xl font-bold mb-2">
          Booking not found
        </h2>

        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft size={20} />

            Back
          </button>

          <h1 className="text-3xl font-bold mt-3">
            Booking Details
          </h1>

          <p className="text-gray-500">
            Booking ID : {booking._id}
          </p>

        </div>

      </div>

      {/* Image Gallery */}

      <ImageGallery
        images={booking.room?.images || []}
      />

      {/* Guest + Room */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <GuestCard guest={booking.guest} />

        <RoomCard room={booking.room} />

      </div>

      {/* Booking + Payment */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <BookingCard booking={booking} />

        <PaymentCard booking={booking} />

      </div>

      {/* Amenities */}

      <AmenitiesCard
        amenities={booking.room?.amenities || []}
      />

      {/* Actions */}

      <BookingActionButtons
        booking={booking}
        refreshBooking={fetchBooking}
      />

    </div>
  );
};

export default BookingDetails;