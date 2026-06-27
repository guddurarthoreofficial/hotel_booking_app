import { useState } from "react";
import BookingSummary from "./BookingSummary";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createBooking } from "../../services/bookingService";

const BookingForm = ({ room }) => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    checkInDate: "",
    checkOutDate: "",
    totalGuests: 1,
    paymentMethod: "cash",
    specialRequest: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const bookingData = {
        room: room._id,
        checkInDate: formData.checkInDate,
        checkOutDate: formData.checkOutDate,
        totalGuests: Number(formData.totalGuests),
        paymentMethod: formData.paymentMethod,
      };

      const data = await createBooking(bookingData);

      toast.success("Booking Created Successfully 🎉");

      navigate("/my-bookings");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Booking Failed"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-5 gap-12">

      {/* LEFT */}

      <div className="lg:col-span-3">

        <h1 className="text-5xl font-bold">
          Book Your Stay
        </h1>

        <p className="text-gray-500 mt-3">
          Reserve your luxury experience at Juhi Petals.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 mt-10 space-y-7"
        >
          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="font-semibold">
                Check In
              </label>

              <input
                type="date"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
                className="mt-3 w-full rounded-xl border p-4 focus:ring-2 focus:ring-amber-400 outline-none"
              />

            </div>

            <div>

              <label className="font-semibold">
                Check Out
              </label>

              <input
                type="date"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
                className="mt-3 w-full rounded-xl border p-4 focus:ring-2 focus:ring-amber-400 outline-none"
              />

            </div>

          </div>

          <div>

            <label className="font-semibold">
              Guests
            </label>

            <input
              type="number"
              min="1"
              max={room.maxGuests}
              name="totalGuests"
              value={formData.totalGuests}
              onChange={handleChange}
              className="mt-3 w-full rounded-xl border p-4"
            />

          </div>

          <div>

            <label className="font-semibold">
              Payment Method
            </label>

            <div className="grid grid-cols-2 gap-5 mt-4">

              <label className="border rounded-2xl p-5 cursor-pointer">

                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === "cash"}
                  onChange={handleChange}
                />

                <span className="ml-3">
                  Cash
                </span>

              </label>

              <label className="border rounded-2xl p-5 cursor-pointer">

                <input
                  type="radio"
                  name="paymentMethod"
                  value="online"
                  checked={formData.paymentMethod === "online"}
                  onChange={handleChange}
                />

                <span className="ml-3">
                  Online
                </span>

              </label>

            </div>

          </div>

          <div>

            <label className="font-semibold">
              Special Request
            </label>

            <textarea
              rows="4"
              name="specialRequest"
              value={formData.specialRequest}
              onChange={handleChange}
              placeholder="Anything you want us to know..."
              className="mt-3 w-full rounded-xl border p-4 resize-none"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-400 hover:bg-amber-300 py-4 rounded-xl font-bold text-lg transition disabled:opacity-50"
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>

        </form>

      </div>

      {/* RIGHT */}

      <div className="lg:col-span-2">

        <BookingSummary room={room} />

      </div>

    </div >
  );
};

export default BookingForm;