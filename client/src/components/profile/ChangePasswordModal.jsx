import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { changePassword } from "../../services/userService";

const ChangePasswordModal = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);

      const res = await changePassword({
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      });

      toast.success(res.message);

      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      onClose();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to change password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">

      <div className="fixed inset-0 bg-black/50" />

      <div className="fixed inset-0 flex items-center justify-center p-4">

        <DialogPanel className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl">

          <DialogTitle className="text-3xl font-bold mb-8">
            Change Password
          </DialogTitle>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="password"
              name="currentPassword"
              placeholder="Current Password"
              value={formData.currentPassword}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            />

            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            />

            <div className="flex justify-end gap-4">

              <button
                type="button"
                onClick={onClose}
                className="border px-6 py-3 rounded-xl"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="bg-amber-400 hover:bg-amber-500 px-8 py-3 rounded-xl font-semibold"
              >
                {loading ? "Updating..." : "Change Password"}
              </button>

            </div>

          </form>

        </DialogPanel>

      </div>

    </Dialog>
  );
};

export default ChangePasswordModal;