import React from "react";
import Button from "./Button";
import { BiUser, BiLock, BiEnvelope, BiPhone } from "react-icons/bi";

interface FormUserProps {
  variant: "login" | "register";
}

const FormUser: React.FC<FormUserProps> = ({ variant }) => {
  return (
    <form>
      {variant === "register" ? (
        <div className="mb-2 flex flex-col">
          <div className="relative flex ">
            <span className="inline-flex items-center rounded-l-md border-b border-l border-t border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
              <BiUser />
            </span>
            <input
              type="text"
              id="firstname"
              className="w-full flex-1 appearance-none rounded-r-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-royal-blue"
              placeholder="First name"
            />
            <input
              type="text"
              id="lastname"
              className="ml-2 w-full flex-1 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-royal-blue"
              placeholder="Last name"
            />
          </div>
        </div>
      ) : null}
      <div className="mb-2 flex flex-col">
        <div className="relative flex ">
          <span className="inline-flex items-center rounded-l-md border-b border-l border-t border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
            <BiEnvelope />
          </span>
          <input
            type="text"
            id="email"
            className="w-full flex-1 appearance-none rounded-r-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-royal-blue"
            placeholder="Your email"
          />
        </div>
      </div>
      {variant === "register" ? (
        <div className="mb-2 flex flex-col">
          <div className="relative flex ">
            <span className="inline-flex items-center rounded-l-md border-b border-l border-t border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
              <BiPhone />
            </span>
            <input
              type="phone"
              id="phone"
              className="w-full flex-1 appearance-none rounded-r-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-royal-blue"
              placeholder="Phone number"
            />
          </div>
        </div>
      ) : null}
      <div className="mb-6 flex flex-col">
        <div className="relative flex ">
          <span className="inline-flex items-center rounded-l-md border-b border-l border-t border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
            <BiLock />
          </span>
          <input
            type="password"
            id="password"
            className="w-full flex-1 appearance-none rounded-r-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-royal-blue"
            placeholder="Your password"
          />
        </div>
      </div>
      <div className="flex w-full">
        <Button type="submit" variant="secondary">
          <span>{variant === "login" ? "Sign In" : "Register"}</span>
        </Button>
      </div>
    </form>
  );
};

export default FormUser;
