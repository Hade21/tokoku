import React from "react";
import LoadingAnimation from "./LoadingAnimation";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  variant: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  loading?: boolean;
}

const primary =
  "inline-flex items-center space-x-2 rounded-xl active:translate-y-1 transition-transform duration-200 bg-royal-blue px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-bice-blue hover:shadow-md focus:ring-2 focus:ring-bice-blue focus:ring-offset-2";
const secondary =
  "inline-flex items-center space-x-2 rounded-xl active:translate-y-1 transition-transform duration-200 bg-white px-6 py-3 text-base font-semibold text-royal-blue shadow-sm hover:bg-slate-300 hover:shadow-md focus:ring-2 focus:ring-slate-700 focus:ring-offset-2";
const tertiary =
  "inline-flex items-center space-x-2 rounded-xl active:translate-y-1 transition-transform duration-200 bg-gray-300 px-6 py-3 text-base font-normal text-gray-500 shadow-sm";

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  children,
  variant,
  disabled = false,
  loading = false,
}) => {
  return (
    <>
      <button
        type={type}
        className={
          disabled
            ? "flex cursor-not-allowed gap-1 transition-all duration-200" +
              tertiary
            : variant === "primary"
            ? primary
            : secondary
        }
        onClick={onClick}
        disabled={disabled}
      >
        {loading ? (
          <LoadingAnimation
            size={20}
            color={variant === "primary" ? "#ffffff" : "#0A2472"}
            wrapperStyle={{
              transition: "all 0.3s ease-in-out",
              marginRight: "2rm",
            }}
          />
        ) : null}
        {children}
      </button>
    </>
  );
};

export default Button;
