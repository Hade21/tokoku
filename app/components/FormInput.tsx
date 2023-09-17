import React, { RefObject } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import ToggleVisiblePassword from "./ToggleVisiblePassword";
import { store } from "../store/store";
import {
  toggleVisiblePassword,
  toggleVisiblePasswordMatch,
} from "../store/userSlice";

interface InputProps {
  reference: RefObject<HTMLInputElement>;
  type: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  describedBy: string;
  valid: boolean;
  className?: string;
}
const Input: React.FC<InputProps> = (params) => {
  const {
    reference,
    type,
    id,
    placeholder,
    value,
    onChange,
    onFocus,
    onBlur,
    valid,
    describedBy,
    className,
  } = params;
  const typeInput = store.getState().user.typeInputPass;
  const typeInputMatch = store.getState().user.typeInputPasMatch;

  return (
    <div className="relative w-full">
      <input
        ref={reference}
        type={
          type !== "password"
            ? type
            : id === "password"
            ? typeInput
            : typeInputMatch
        }
        id={id}
        className={` w-full flex-1 appearance-none rounded-r-md border bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-300 focus:border-transparent focus:outline-none focus:ring-2 ${
          !valid && value
            ? "border-red-500 focus:ring-red-500"
            : "border-grey-300 focus:ring-royal-blue"
        } ${className}`}
        placeholder={placeholder}
        autoComplete="off"
        aria-describedby={describedBy}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {type === "password" ? (
        <span
          className="absolute right-2 top-2 ml-2 flex items-center text-2xl"
          onClick={
            id === "password"
              ? () => store.dispatch(toggleVisiblePassword())
              : () => store.dispatch(toggleVisiblePasswordMatch())
          }
        >
          <ToggleVisiblePassword size={30} />
        </span>
      ) : (
        <>
          <span
            className={
              valid
                ? "absolute right-2 top-2 ml-2 flex items-center text-2xl text-green-500"
                : "hidden"
            }
          >
            <AiOutlineCheckCircle />
          </span>
          <span
            className={
              valid || !value
                ? "hidden"
                : "absolute right-2 top-2 ml-2 flex items-center text-2xl text-red-500"
            }
          >
            <AiOutlineCloseCircle />
          </span>
        </>
      )}
    </div>
  );
};

export default Input;
