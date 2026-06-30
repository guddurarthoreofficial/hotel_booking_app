const Card = ({
  children,
  className = "",
  padding = "lg",
  shadow = "xl",
  hover = false,
  ...props
}) => {

  const paddings = {
    sm: "p-5",
    md: "p-7",
    lg: "p-10",
    xl: "p-12",
  };

  const shadows = {
    sm: "shadow-md",
    md: "shadow-lg",
    xl: "shadow-2xl",
  };

  return (
    <div
      className={`
        bg-white
        rounded-3xl
        border
        border-gray-100
        ${paddings[padding]}
        ${shadows[shadow]}
        ${hover ? "hover:-translate-y-1 hover:shadow-2xl transition-all duration-300" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;