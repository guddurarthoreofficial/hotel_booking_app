import {
  FaBed,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaChartLine,
  FaArrowUp,
} from "react-icons/fa";


import { useEffect, useState } from "react";
import { getDashboardStats } from "../../services/dashboardService";

import StatCard from "../../components/dashboard/widgets/StatCard";
import RevenueChart from "../../components/dashboard/widgets/RevenueChart";
import RoomStatus from "../../components/dashboard/widgets/RoomStatus";
import RecentBookings from "../../components/dashboard/widgets/RecentBookings";
import ActivityTimeline from "../../components/dashboard/widgets/ActivityTimeline";
import QuickActions from "../../components/dashboard/widgets/QuickActions";



const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recentBookings, setRecentBookings] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getDashboardStats();

        setStats(res.stats);
        setRecentBookings(res.recentBookings);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="space-y-8 p-2">

      {/* Welcome Banner */}

      <div className="relative overflow-hidden rounded-1xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 shadow-lg">

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

          <div className="mt-5 rounded-1xl bg-white/10 px-6 py-4 backdrop-blur md:mt-0">

            <p className="text-sm text-slate-300">
              Today's Revenue
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              ₹{stats?.totalRevenue}
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
          value={loading ? "..." : stats?.totalRooms}
          icon={<FaBed />}
          color="bg-blue-600"
          change="Live"
        />

        <StatCard
          title="Bookings"
          value={loading ? "..." : stats?.totalBookings}
          icon={<FaCalendarCheck />}
          color="bg-emerald-600"
          change="Live"
        />

        <StatCard
          title="Revenue"
          value={loading ? "..." : `₹${stats?.totalRevenue}`}
          icon={<FaMoneyBillWave />}
          color="bg-amber-500"
          change="Live"
        />

        <StatCard
          title="Occupied Rooms"
          value={loading ? "..." : stats?.occupiedRooms}
          icon={<FaChartLine />}
          color="bg-violet-600"
          change="Live"
        />

      </div>

      {/* Analytics */}

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Revenue */}

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2">
          <RevenueChart />
        </div>

        {/* Room Status */}

        <RoomStatus
          availableRooms={stats?.availableRooms}
          occupiedRooms={stats?.occupiedRooms}
          maintenanceRooms={stats?.maintenanceRooms}
          loading={loading}
        />
      </div>

      {/* Recent Bookings */}

      <RecentBookings
        bookings={recentBookings}
        loading={loading}
      />


      <ActivityTimeline />
      <QuickActions />


    </div>
  );
};

export default Dashboard;