import { useEffect, useState } from "react";
import {
  Users,
  UserCheck,
  Shield,
  UserPlus,
} from "lucide-react";

import UserTable from "../../components/admin/users/UserTable";
import { getUsers } from "../../services/userService";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    search: "",
    role: "",
    isActive: "",
    page: 1,
    limit: 10,
  });

  const fetchUsers = async () => {
    try {
      setLoading(true);

      // Filters baad me add karenge
      const res = await getUsers();

      console.log("Users Response:", res);

      setUsers(res.users || []);
    } catch (error) {
      console.error("Fetch Users Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <h2 className="text-lg font-semibold text-slate-600">
          Loading Users...
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Users Management
            </h1>

            <p className="mt-2 text-slate-500">
              Manage all registered users, admins and staff members.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600">
            <UserPlus size={18} />
            Add User
          </button>
        </div>
      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Users"
          value={users.length}
          icon={<Users size={22} />}
          color="bg-blue-600"
        />

        <StatCard
          title="Customers"
          value={users.filter((u) => u.role === "customer").length}
          icon={<UserCheck size={22} />}
          color="bg-green-600"
        />

        <StatCard
          title="Staff"
          value={
            users.filter((u) =>
              ["manager", "receptionist"].includes(u.role)
            ).length
          }
          icon={<Shield size={22} />}
          color="bg-violet-600"
        />

        <StatCard
          title="Admins"
          value={users.filter((u) => u.role === "admin").length}
          icon={<Shield size={22} />}
          color="bg-red-600"
        />
      </div>

      {/* Filters */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-4">
          <input
            type="text"
            placeholder="Search user..."
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-400"
          />

          <select className="rounded-xl border border-slate-200 px-4 py-3">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Manager</option>
            <option>Receptionist</option>
            <option>Customer</option>
          </select>

          <select className="rounded-xl border border-slate-200 px-4 py-3">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button className="rounded-xl bg-red-500 py-3 font-medium text-white hover:bg-red-600">
            Reset
          </button>
        </div>
      </div>

      {/* User Table */}

      <UserTable users={users} />
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h2 className="mt-2 text-3xl font-bold">{value}</h2>
        </div>

        <div className={`${color} rounded-xl p-4 text-white`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;