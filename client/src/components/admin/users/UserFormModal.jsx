import { useEffect, useState } from "react";
import { X, User, Mail, Phone, Lock, Shield } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  password: "",
  role: "customer",
};

const UserFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  mode = "add",
  user = null,
}) => {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (mode === "edit" && user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        password: "",
        role: user.role || "customer",
      });
    } else {
      setFormData(initialForm);
    }
  }, [mode, user, isOpen]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      return;
    }

    if (mode === "add" && !formData.password) {
      return;
    }

    try {
      setLoading(true);
      await onSubmit(formData);
      setFormData(initialForm);
      onClose();
    } catch (error) {
      console.error("Submit Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-6 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-amber-600/10 bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {mode === "add" ? "Add New User" : "Edit User"}
            </h2>
            <p className="mt-1 text-sm text-amber-100">
              {mode === "add"
                ? "Create a new account."
                : "Update user information."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 p-8">
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 flex items-center gap-2 text-base font-semibold text-slate-700">
                <User size={18} />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-base text-slate-800 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-base font-semibold text-slate-700">
                <Mail size={18} />
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                disabled={mode === "edit"}
                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-base text-slate-800 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 disabled:bg-slate-100 disabled:text-slate-500"
              />
            </div>
          </div>

          {/* Phone & Role Row */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 flex items-center gap-2 text-base font-semibold text-slate-700">
                <Phone size={18} />
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-base text-slate-800 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-base font-semibold text-slate-700">
                <Shield size={18} />
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-base text-slate-800 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              >
                <option value="customer">Customer</option>
                <option value="receptionist">Receptionist</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          {/* Password (Add Mode) */}
          {mode === "add" && (
            <div>
              <label className="mb-2 flex items-center gap-2 text-base font-semibold text-slate-700">
                <Lock size={18} />
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-base text-slate-800 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex items-center justify-end gap-4 border-t border-slate-100 pt-6">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="rounded-xl border border-slate-200 px-6 py-3.5 text-base font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-800 active:scale-[0.98] disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-amber-500 px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-amber-600 active:scale-[0.98] disabled:opacity-50"
            >
              {loading
                ? "Saving..."
                : mode === "add"
                ? "Create User"
                : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormModal;