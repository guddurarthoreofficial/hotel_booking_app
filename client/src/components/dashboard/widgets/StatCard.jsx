const StatCard = ({
  title,
  value,
  icon,
  color = "bg-blue-600",
  change,
}) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Top Accent */}

      <div className={`absolute left-0 top-0 h-1 w-full ${color}`} />

      {/* Background Glow */}

      <div
        className={`
          absolute
          -right-10
          -top-10
          h-40
          w-40
          rounded-full
          blur-3xl
          opacity-10
          ${color}
        `}
      />

      <div className="relative flex flex-col gap-6">

        {/* Icon */}

        <div
          className={`
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            text-2xl
            text-white
            shadow-lg
            ${color}
          `}
        >
          {icon}
        </div>

        {/* Content */}

        <div>

          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            {value}
          </h2>

        </div>

        {/* Footer */}

        {change && (
          <div className="flex items-center">
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              ↑ {change}
            </span>
          </div>
        )}

      </div>
    </div>
  );
};

export default StatCard;