import { useEffect } from "react";
import { AlertTriangle, CheckCircle2, AlertCircle, Loader2, X } from "lucide-react";

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
  // ESC key support to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && !loading) onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, loading]);

  if (!isOpen) return null;

  // Dynamic Theme Mapping
  const themeConfig = {
    red: {
      headerBg: "bg-red-50/80 border-red-100",
      iconBg: "bg-red-100 text-red-600",
      btnBg: "bg-red-600 hover:bg-red-700 focus:ring-red-500/20",
      Icon: AlertTriangle,
    },
    green: {
      headerBg: "bg-emerald-50/80 border-emerald-100",
      iconBg: "bg-emerald-100 text-emerald-600",
      btnBg: "bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500/20",
      Icon: CheckCircle2,
    },
    amber: {
      headerBg: "bg-amber-50/80 border-amber-100",
      iconBg: "bg-amber-100 text-amber-600",
      btnBg: "bg-amber-500 hover:bg-amber-600 focus:ring-amber-500/20",
      Icon: AlertCircle,
    },
  };

  const activeTheme = themeConfig[confirmColor] || themeConfig.red;
  const ModalIcon = activeTheme.Icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-6 backdrop-blur-sm"
      onClick={() => !loading && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 animate-in fade-in zoom-in-95"
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between border-b px-8 py-6 ${activeTheme.headerBg}`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${activeTheme.iconBg}`}
            >
              <ModalIcon size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800">{title}</h2>
              <p className="mt-0.5 text-xs font-medium text-slate-500">
                Action required
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-slate-200/50 hover:text-slate-700 disabled:opacity-50"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-6">
          <p className="text-base leading-relaxed text-slate-600">{message}</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-slate-100 bg-slate-50/50 px-8 py-5">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-xl border border-slate-200 px-6 py-3 text-base font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-800 active:scale-[0.98] disabled:opacity-50"
          >
            {cancelText}
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className={`flex min-w-[120px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-white shadow-md transition-all focus:outline-none focus:ring-4 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 ${activeTheme.btnBg}`}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              confirmText
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;