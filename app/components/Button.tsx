import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  variant: "primary" | "secondary" | "tertiary";
}

const primary =
  "bg-royal-blue text-white rounded-md px-4 py-2 hover:bg-bice-blue transition-all duration-100 active:translate-y-1";
const secondary =
  "bg-white text-oxford-blue rounded-md px-4 py-2 hover:text-white hover:bg-royal-blue transition-all duration-100 active:translate-y-1";
const tertiary =
  "bg-transparent text-oxford-blue rounded-md px-4 py-2 hover:text-white hover:bg-royal-blue transition-all duration-100 active:translate-y-1";

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  children,
  variant,
}) => {
  return (
    <>
      <button
        type={type}
        className={
          variant === "primary"
            ? primary
            : variant === "secondary"
            ? secondary
            : tertiary
        }
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
