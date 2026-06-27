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

export const cancelBooking = async (bookingId) => {
  const response = await api.put(`/bookings/${bookingId}/cancel`);
  return response.data;
};

export const downloadInvoice = async (bookingId) => {
  const response = await api.get(`/invoices/${bookingId}`, {
    responseType: "blob",
  });

  return response;
};
