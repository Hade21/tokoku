import React from "react";
import LoadingAnimation from "./LoadingAnimation";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  variant: "primary" | "secondary" | "tertiary" | "danger";
  disabled?: boolean;
  loading?: boolean;
}

const primary =
  "inline-flex items-center space-x-2 rounded-xl active:translate-y-1 transition-transform duration-200 bg-royal-blue px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-bice-blue hover:shadow-md focus:ring-2 focus:ring-bice-blue focus:ring-offset-2";
const secondary =
  "inline-flex items-center space-x-2 rounded-xl active:translate-y-1 transition-transform duration-200 bg-white px-6 py-3 text-base font-semibold text-royal-blue shadow-md hover:bg-royal-blue hover:text-white hover:shadow-sm focus:ring-2 focus:ring-slate-700 focus:ring-offset-2";
const tertiary =
  "inline-flex items-center space-x-2 rounded-xl active:translate-y-1 transition-transform duration-200 bg-gray-300 px-6 py-3 text-base font-normal text-gray-500 shadow-sm";
const danger =
  "inline-flex border-2 border-red-700 items-center space-x-2 rounded-xl active:translate-y-1 transition-transform duration-200 bg-white px-6 py-3 text-base font-semibold text-oxford-blue shadow-md hover:bg-red-500 hover:text-white hover:shadow-sm focus:ring-2 focus:ring-red-700 focus:ring-offset-2";
const style = {
  primary: primary,
  secondary: secondary,
  tertiary: tertiary,
  danger: danger,
};
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
            : style[variant]
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
