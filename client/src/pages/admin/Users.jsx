import { useEffect, useState } from "react";

import {
  Users,
  UserCheck,
  Shield,
  UserPlus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import UserTable from "../../components/admin/users/UserTable";
import UserViewModal from "../../components/admin/users/UserViewModal";
import UserEditModal from "../../components/admin/users/UserEditModal";
import UserFormModal from "../../components/admin/users/UserFormModal";
import ConfirmModal from "../../components/common/ConfirmModal";

import {
  getUsers,
  updateUser,
  createUser,
  updateUserStatus,
} from "../../services/userService";

import { toast } from "react-hot-toast";

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  return (
    <nav
      className="flex items-center justify-center gap-1.5"
      aria-label="Pagination"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="group inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all duration-200 hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50 disabled:text-slate-300 disabled:shadow-none"
      >
        <ChevronLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <span
              key={`ellipsis-${index}`}
              className="flex h-9 w-9 items-center justify-center text-sm text-slate-400"
            >
              •••
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`flex h-9 min-w-[36px] items-center justify-center rounded-xl px-2.5 text-sm font-semibold transition-all duration-200 ${
                currentPage === page
                  ? "bg-amber-500 text-white shadow-md shadow-amber-500/20"
                  : "border border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-100 hover:text-slate-800"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="group inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all duration-200 hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50 disabled:text-slate-300 disabled:shadow-none"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>
    </nav>
  );
};

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const [selectedDeleteUser, setSelectedDeleteUser] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [pagination, setPagination] = useState({
    totalUsers: 0,
    currentPage: 1,
    totalPages: 1,
    limit: 5,
  });

  const [filters, setFilters] = useState({
    search: "",
    role: "",
    isActive: "",
    page: 1,
    limit: 5,
  });

  const [debouncedSearch, setDebouncedSearch] = useState(filters.search);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const res = await getUsers({
        page: filters.page,
        limit: filters.limit,
        search: debouncedSearch,
        role: filters.role,
        isActive: filters.isActive,
      });

      setUsers(res.users || []);

      setPagination(
        res.pagination || {
          totalUsers: res.totalUsers || 0,
          currentPage: res.currentPage || filters.page,
          totalPages: res.totalPages || 1,
          limit: filters.limit,
        }
      );
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
    setSelectedUser(null);
    setIsViewModalOpen(false);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedUser(null);
    setIsEditModalOpen(false);
  };

  const handleSaveUser = async (id, formData) => {
    try {
      await updateUser(id, formData);
      toast.success("User updated successfully");
      closeEditModal();
      fetchUsers();
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message || "Failed to update user"
      );
    }
  };

  const handleCreateUser = async (formData) => {
    try {
      await createUser(formData);
      toast.success("User created successfully");
      setIsAddModalOpen(false);
      fetchUsers();
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to create user"
      );
    }
  };

  const handleDeleteClick = (user) => {
    setSelectedDeleteUser(user);
    setIsDeleteModalOpen(true);
  };

  const handleToggleUserStatus = async () => {
    try {
      await updateUserStatus(selectedDeleteUser._id);

      toast.success(
        `User ${
          selectedDeleteUser.isActive ? "deactivated" : "activated"
        } successfully`
      );

      setIsDeleteModalOpen(false);
      setSelectedDeleteUser(null);
      fetchUsers();
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to update user status"
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(filters.search);
    }, 500);

    return () => clearTimeout(timer);
  }, [filters.search]);

  useEffect(() => {
    fetchUsers();
  }, [
    filters.page,
    filters.limit,
    debouncedSearch,
    filters.role,
    filters.isActive,
  ]);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <h2 className="text-lg font-semibold text-slate-600">
          Loading Users...
        </h2>
      </div>
    );
  }

  const showingStart =
    pagination.totalUsers === 0
      ? 0
      : (pagination.currentPage - 1) * pagination.limit + 1;
  const showingEnd = Math.min(
    pagination.currentPage * pagination.limit,
    pagination.totalUsers
  );

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

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            <UserPlus size={18} />
            Add User
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Users"
          value={pagination.totalUsers}
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
            placeholder="Search by name, email or phone..."
            value={filters.search}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                search: e.target.value,
                page: 1,
              }))
            }
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-500"
          />

          <select
            value={filters.role}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                role: e.target.value,
                page: 1,
              }))
            }
            className="rounded-xl border border-slate-200 px-4 py-3"
          >
            <option value="">All Roles</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="receptionist">Receptionist</option>
            <option value="customer">Customer</option>
          </select>

          <select
            value={filters.isActive}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                isActive: e.target.value,
                page: 1,
              }))
            }
            className="rounded-xl border border-slate-200 px-4 py-3"
          >
            <option value="">All Status</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>

          <button
            onClick={() =>
              setFilters({
                search: "",
                role: "",
                isActive: "",
                page: 1,
                limit: 5,
              })
            }
            className="rounded-xl bg-red-500 py-3 font-medium text-white hover:bg-red-600"
          >
            Reset
          </button>
        </div>
      </div>

      {/* User Table */}
      <UserTable
        users={users}
        onView={handleViewUser}
        onEdit={handleEditUser}
        onDelete={handleDeleteClick}
      />

      <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          Showing {showingStart} - {showingEnd} of {pagination.totalUsers} users
        </p>

        <CustomPagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPageChange={(page) =>
            setFilters((prev) => ({
              ...prev,
              page,
            }))
          }
        />
      </div>

      <UserFormModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleCreateUser}
        mode="add"
      />

      <UserViewModal
        isOpen={isViewModalOpen}
        onClose={closeViewModal}
        user={selectedUser}
      />

      <UserEditModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        user={selectedUser}
        onSave={handleSaveUser}
      />

      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedDeleteUser(null);
        }}
        onConfirm={handleToggleUserStatus}
        title={
          selectedDeleteUser?.isActive
            ? "Deactivate User"
            : "Activate User"
        }
        message={`Are you sure you want to ${
          selectedDeleteUser?.isActive ? "deactivate" : "activate"
        } ${selectedDeleteUser?.name}?`}
        confirmText={
          selectedDeleteUser?.isActive ? "Deactivate" : "Activate"
        }
        confirmColor={
          selectedDeleteUser?.isActive ? "red" : "green"
        }
      />
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