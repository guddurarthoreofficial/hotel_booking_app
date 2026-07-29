import api from "../api/axios";

// ==============================
// Profile APIs
// ==============================

export const getProfile = async () => {
  const response = await api.get("/users/profile");
  return response.data;
};

export const updateProfile = async (userData) => {
  const response = await api.put("/users/profile", userData);
  return response.data;
};

export const changePassword = async (passwordData) => {
  const response = await api.put(
    "/users/change-password",
    passwordData
  );
  return response.data;
};

// ==============================
// Admin User Management APIs
// ==============================

// Get All Users
export const getUsers = async (params = {}) => {
  const response = await api.get("/users", {
    params,
  });

  return response.data;
};

// Get User By ID
export const getUserById = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

// Update User
export const updateUser = async (id, userData) => {
  const response = await api.put(
    `/users/${id}`,
    userData
  );

  return response.data;
};

// Update User Role
export const updateUserRole = async (id, role) => {
  const response = await api.patch(
    `/users/${id}/role`,
    { role }
  );

  return response.data;
};