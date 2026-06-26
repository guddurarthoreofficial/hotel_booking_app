import api from "../api/axios";

export const getRooms = async (params = {}) => {
  try {
    const response = await api.get("/rooms", {
      params,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRoomById = async (id) => {
  try {
    const response = await api.get(`/rooms/${id}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};