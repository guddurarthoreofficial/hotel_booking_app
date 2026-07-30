import { AlertTriangle, Loader2, X } from "lucide-react";

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  loading = false,
  title = "Confirm Action",
  message = "Are you sure you want to continue?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmColor = "red",
}) => {
  if (!isOpen) return null;

  const buttonColors = {
    red: "bg-red-600 hover:bg-red-700",
    green: "bg-green-600 hover:bg-green-700",
    amber: "bg-amber-500 hover:bg-amber-600",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b bg-red-50 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-red-100 p-3">
              <AlertTriangle
                className="text-red-600"
                size={24}
              />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-800">
                {title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}

        <div className="px-6 py-6">
          <p className="leading-7 text-slate-600">
            {message}
          </p>
        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 border-t bg-slate-50 px-6 py-4">
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-xl border border-slate-300 px-5 py-2.5 font-medium hover:bg-slate-100"
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 font-semibold text-white ${
              buttonColors[confirmColor]
            }`}
          >
            {loading && (
              <Loader2
                size={18}
                className="animate-spin"
              />
            )}

            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;