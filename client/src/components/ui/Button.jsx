const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
  ...props
}) => {

  const variants = {
    primary:
      "bg-amber-400 hover:bg-amber-300 text-black shadow-lg hover:shadow-xl",

    outline:
      "border-2 border-amber-400 text-amber-500 hover:bg-amber-400 hover:text-black",

    danger:
      "bg-red-500 hover:bg-red-600 text-white",

    dark:
      "bg-slate-900 hover:bg-slate-800 text-white",
  };

  const sizes = {
    sm: "h-11 px-5 text-sm",
    md: "h-14 px-6 text-base",
    lg: "h-16 px-8 text-lg",
  };

  return (
    <button
      type={type}
      disabled={loading || disabled}
      className={`
        w-full
        rounded-2xl
        font-bold
        tracking-wide
        transition-all
        duration-300
        active:scale-95
        hover:-translate-y-0.5
        disabled:opacity-60
        disabled:cursor-not-allowed

        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
};

export default Button;