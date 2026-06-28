import api from "../api/axios";

// Get Profile
export const getProfile = async () => {
  const response = await api.get("/users/profile");
  return response.data;
};

// Update Profile
export const updateProfile = async (userData) => {
  const response = await api.put(
    "/users/profile",
    userData
  );

  return response.data;
};

// Change Password
export const changePassword = async (
  passwordData
) => {
  const response = await api.put(
    "/users/change-password",
    passwordData
  );

  return response.data;
};