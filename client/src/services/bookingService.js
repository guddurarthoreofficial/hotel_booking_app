import api from "../api/axios";

// ================================
// Customer APIs
// ================================

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

export const getRoomById = async (id) => {
  const { data } = await api.get(`/rooms/${id}`);
  return data;
};

// ================================
// Admin APIs
// ================================

export const getBookings = async (params = {}) => {
  const response = await api.get("/bookings", {
    params,
  });

  return response.data;
};

export const getBookingById = async (bookingId) => {
  const response = await api.get(`/bookings/${bookingId}`);
  return response.data;
};

export const checkInBooking = async (bookingId) => {
  const response = await api.put(`/bookings/${bookingId}/checkin`);
  return response.data;
};

export const checkOutBooking = async (bookingId) => {
  const response = await api.put(`/bookings/${bookingId}/checkout`);
  return response.data;
};

export const markBookingAsPaid = async (bookingId) => {
  const response = await api.put(`/bookings/${bookingId}/mark-paid`);
  return response.data;
};