import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "font-medium rounded-3xl transition-all px-10 py-2  hover:bg-[#006080] duration-300 ease-in-out";

  const variants = {
    primary: "bg-[#004463] text-white   ",
    secondary:
      "bg-white border border-[#004463] text-[#004463] hover:bg-[#004463] hover:text-white",
  };

  const variantStyles = variants[variant] || variants.primary;

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
