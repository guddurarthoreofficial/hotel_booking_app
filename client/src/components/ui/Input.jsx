const Input = ({
  label,
  error,
  leftIcon,
  rightIcon,
  className = "",
  ...props
}) => {
  return (
    <div className="space-y-2">

      {label && (
        <label className="block text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}

      <div className="relative">

        {/* Left Icon */}

        {leftIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}

        <input
          {...props}
          className={`
            w-full
            h-14
            rounded-2xl
            border
            border-slate-300
            bg-white
            text-slate-800
            placeholder:text-slate-400
            transition-all
            duration-300
            outline-none
            focus:border-amber-400
            focus:ring-4
            focus:ring-amber-100
            ${leftIcon ? "pl-12" : "pl-5"}
            ${rightIcon ? "pr-12" : "pr-5"}
            ${className}
          `}
        />

        {/* Right Icon */}

        {rightIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            {rightIcon}
          </div>
        )}

      </div>

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}

    </div>
  );
};

export default Input;