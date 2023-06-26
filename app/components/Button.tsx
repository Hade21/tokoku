import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  variant: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
}

const primary =
  "inline-flex items-center space-x-2 rounded-lg bg-royal-blue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-bice-blue hover:shadow-md focus:ring-2 focus:ring-bice-blue focus:ring-offset-2";
const secondary =
  "inline-flex items-center space-x-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-royal-blue shadow-sm hover:bg-slate-300 hover:shadow-md focus:ring-2 focus:ring-slate-700 focus:ring-offset-2";
const tertiary =
  "inline-flex items-center space-x-2 rounded-lg bg-gray-300 px-4 py-2 text-sm font-normal text-gray-500 shadow-sm";

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  children,
  variant,
  disabled = false,
}) => {
  return (
    <>
      <button
        type={type}
        className={
          disabled
            ? "cursor-not-allowed " + tertiary
            : variant === "primary"
            ? primary
            : secondary
        }
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
