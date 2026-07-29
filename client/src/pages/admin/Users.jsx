import {
  Users,
  UserCheck,
  Shield,
  UserPlus,
} from "lucide-react";
import UserTable from "../../components/admin/users/UserTable";

const UsersPage = () => {
  return (
    <div className="space-y-6">

      {/* Page Header */}

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
          value="0"
          icon={<Users size={22} />}
          color="bg-blue-600"
        />

        <StatCard
          title="Customers"
          value="0"
          icon={<UserCheck size={22} />}
          color="bg-green-600"
        />

        <StatCard
          title="Staff"
          value="0"
          icon={<Shield size={22} />}
          color="bg-violet-600"
        />

        <StatCard
          title="Admins"
          value="0"
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
          </select>

          <select className="rounded-xl border border-slate-200 px-4 py-3">
            <option>All Status</option>
          </select>

          <button className="rounded-xl bg-red-500 py-3 font-medium text-white hover:bg-red-600">
            Reset
          </button>

        </div>

      </div>

      {/* Table Placeholder */}
      <UserTable users={[]} />

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex h-80 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">

          <div className="text-center">

            <Users
              size={48}
              className="mx-auto text-slate-400"
            />

            <h3 className="mt-4 text-xl font-semibold text-slate-700">
              User Table Coming Next
            </h3>

            <p className="mt-2 text-slate-500">
              Next step we will build a professional user table.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

const StatCard = ({
  title,
  value,
  icon,
  color,
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>

        </div>

        <div className={`${color} rounded-xl p-4 text-white`}>

          {icon}

        </div>

      </div>

    </div>
  );
};

export default UsersPage;