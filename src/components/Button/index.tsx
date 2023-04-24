import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  disabled = false,
  ...rest
}) => {
  return (
    <button className={`btn btn-${variant}`} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
