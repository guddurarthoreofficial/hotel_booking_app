import api from "../api/axios";

// Get all rooms
export const getRooms = async (params = {}) => {
  const response = await api.get("/rooms", { params });
  return response.data;
};

// Get single room by ID
export const getRoomById = async (id) => {
  const response = await api.get(`/rooms/${id}`);
  return response.data;
};

/**
 * Create Room
 */
export const createRoom = async (roomData) => {
  const { data } = await api.post("/rooms", roomData);
  return data;
};

// Delete room
export const deleteRoom = async (id) => {
  const { data } = await api.delete(`/rooms/${id}`);
  return data;
};

/**
 * Upload Room Images
 */
export const uploadRoomImages = async (roomId, images = []) => {
  if (!images.length) return;

  const formData = new FormData();

  images.forEach((image) => {
    const file = image.file ?? image;

    formData.append("images", file);
  });

  const { data } = await api.post(`/rooms/${roomId}/images`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

/**
 * Update Room
 */
export const updateRoom = async (id, roomData) => {
  const { data } = await api.put(`/rooms/${id}`, roomData);
  return data;
};

/**
 * Delete Image
 */
export const deleteRoomImage = async (roomId, public_id) => {
  const { data } = await api.delete(`/rooms/${roomId}/images`, {
    data: { public_id },
  });

  return data;
};
