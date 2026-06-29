import api from "../api/axios";

export const createPaymentOrder = async (bookingId) => {
  try {
    const response = await api.post(`/payments/create-order/${bookingId}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyPayment = async (paymentData) => {
  try {
    const response = await api.post("/payments/verify", paymentData);

    return response.data;
  } catch (error) {
    throw error;
  }
};
