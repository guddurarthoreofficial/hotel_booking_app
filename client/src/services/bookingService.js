import api from "../api/axios";

export const createBooking = async (bookingData) => {
  try {
    const response = await api.post("/bookings", bookingData);

    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getMyBookings = async () => {
  const response = await api.get("/bookings/my");
  return response.data;
};
