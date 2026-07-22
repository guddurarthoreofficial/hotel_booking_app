import {
  FaBed,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaChartLine,
  FaArrowUp,
} from "react-icons/fa";
import { useEffect, useState } from "react";

import {
  getDashboardStats,
  getRecentActivities,
} from "../../services/dashboardService";

import StatCard from "../../components/dashboard/widgets/StatCard";
import RevenueChart from "../../components/dashboard/widgets/RevenueChart";
import RoomStatus from "../../components/dashboard/widgets/RoomStatus";
import RecentBookings from "../../components/dashboard/widgets/RecentBookings";
import ActivityTimeline from "../../components/dashboard/widgets/ActivityTimeline";
import QuickActions from "../../components/dashboard/widgets/QuickActions";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [recentBookings, setRecentBookings] = useState([]);
  const [activities, setActivities] = useState([]);

  const [loading, setLoading] = useState(true);
  const [activityLoading, setActivityLoading] = useState(true);

  const loadData = async () => {
    try {
      setLoading(true);
      setActivityLoading(true);

      const [dashboardRes, activityRes] = await Promise.all([
        getDashboardStats(),
        getRecentActivities(),
      ]);

      setStats(dashboardRes.stats || {});
      setRecentBookings(dashboardRes.recentBookings || []);
      setActivities(activityRes.activities || []);
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
      setActivityLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="space-y-8 p-2">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 shadow-lg">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Good Morning, Guddu 👋
            </h1>

            <p className="mt-2 text-slate-300">
              Welcome back to Juhi Petals Hotel Management Dashboard.
            </p>
          </div>

          <div className="mt-5 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur md:mt-0">
            <p className="text-sm text-slate-300">Today's Revenue</p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              ₹{stats?.totalRevenue ?? 0}
            </h2>

            <p className="mt-2 flex items-center gap-2 text-green-400">
              <FaArrowUp />
              +18% from yesterday
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Rooms"
          value={loading ? "..." : stats?.totalRooms ?? 0}
          icon={<FaBed />}
          color="bg-blue-600"
          change="Live"
        />

        <StatCard
          title="Bookings"
          value={loading ? "..." : stats?.totalBookings ?? 0}
          icon={<FaCalendarCheck />}
          color="bg-emerald-600"
          change="Live"
        />

        <StatCard
          title="Revenue"
          value={loading ? "..." : `₹${stats?.totalRevenue ?? 0}`}
          icon={<FaMoneyBillWave />}
          color="bg-amber-500"
          change="Live"
        />

        <StatCard
          title="Occupied Rooms"
          value={loading ? "..." : stats?.occupiedRooms ?? 0}
          icon={<FaChartLine />}
          color="bg-violet-600"
          change="Live"
        />
      </div>

      {/* Analytics */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2">
          <RevenueChart />
        </div>

        <RoomStatus
          availableRooms={stats?.availableRooms ?? 0}
          occupiedRooms={stats?.occupiedRooms ?? 0}
          maintenanceRooms={stats?.maintenanceRooms ?? 0}
          loading={loading}
        />
      </div>

      {/* Recent Bookings */}
      <RecentBookings
        bookings={recentBookings}
        loading={loading}
      />

      {/* Activities */}
      <ActivityTimeline
        activities={activities}
        loading={activityLoading}
      />

      {/* Quick Actions */}
      <QuickActions />
    </div>
  );
};

export default Dashboard;