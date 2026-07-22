import axios from "../api/axios";

export const getDashboardStats = async () => {
  const { data } = await axios.get("/dashboard/stats");
  return data;
};

export const getRevenueAnalytics = async (period = "1y") => {
  const { data } = await axios.get(
    `/dashboard/revenue?period=${period}`
  );
  return data;
};