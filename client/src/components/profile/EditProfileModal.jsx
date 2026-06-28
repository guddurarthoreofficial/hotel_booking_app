import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { updateProfile } from "../../services/userService";

const EditProfileModal = ({
  open,
  onClose,
  user,
  onSuccess,
}) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await updateProfile(formData);

      toast.success(data.message);

      onClose();

      onSuccess();

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Profile update failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/40" />

      <div className="fixed inset-0 flex items-center justify-center p-4">

        <DialogPanel className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl">

          <DialogTitle className="text-3xl font-bold mb-8">

            Edit Profile

          </DialogTitle>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div>

              <label className="font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            <div>

              <label className="font-medium">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            <div>

              <label className="font-medium">
                Email
              </label>

              <input
                value={user.email}
                disabled
                className="w-full mt-2 border rounded-xl p-4 bg-gray-100"
              />

            </div>

            <div className="flex justify-end gap-4 pt-4">

              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-xl border"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
              >
                {loading
                  ? "Saving..."
                  : "Save Changes"}
              </button>

            </div>

          </form>

        </DialogPanel>

      </div>

    </Dialog>
  );
};

export default EditProfileModal;