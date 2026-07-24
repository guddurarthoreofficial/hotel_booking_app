import { FaTrash } from "react-icons/fa";

const DeleteRoomModal = ({
  isOpen,
  room,
  loading = false,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-[420px] rounded-2xl bg-white p-8 shadow-2xl">

        {/* Icon */}
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <FaTrash className="text-4xl text-red-600" />
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-center text-3xl font-bold text-slate-800">
          Delete Room
        </h2>

        {/* Message */}
        <p className="mt-3 text-center text-base text-slate-500">
          Are you sure you want to delete room{" "}
          <span className="font-semibold text-slate-800">
            {room?.roomNumber}
          </span>
          ?
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="h-11 w-32 rounded-xl border border-gray-300 bg-white font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="h-11 w-32 rounded-xl bg-red-600 font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default DeleteRoomModal;