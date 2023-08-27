"use client";
import React from "react";
import Button from "./Button";
import { BiUser, BiLock, BiEnvelope, BiPhone } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  setEmail,
  setFirstName,
  setLastName,
  setPassword,
  setPasswordMatch,
  setPhone,
  setValidEmail,
  setValidFirstname,
  setValidLastname,
  setValidMatch,
  setValidPassword,
  setValidPhone,
} from "../store/features/user/userSlice";

interface FormUserProps {
  variant: "login" | "register";
}

const FormUser: React.FC<FormUserProps> = ({ variant }) => {
  const userRef = React.useRef<HTMLInputElement>(null);
  const errRef = React.useRef<HTMLDivElement>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const firstName = useAppSelector((state) => state.user.firstName);
  const lastName = useAppSelector((state) => state.user.lastName);
  const email = useAppSelector((state) => state.user.email);
  const phone = useAppSelector((state) => state.user.phone);
  const password = useAppSelector((state) => state.user.password);
  const passwordMatch = useAppSelector((state) => state.user.passwordMatch);

  React.useEffect(() => {
    userRef.current?.focus();
  }, []);
  React.useEffect(() => {
    dispatch(setValidFirstname(firstName));
  }, [firstName]);
  React.useEffect(() => {
    dispatch(setValidLastname(lastName));
  }, [lastName]);
  React.useEffect(() => {
    dispatch(setValidEmail(email));
  }, [email]);
  React.useEffect(() => {
    dispatch(setValidPassword(password));
  }, [password]);
  React.useEffect(() => {
    dispatch(setValidPhone(phone));
  }, [phone]);
  React.useEffect(() => {
    dispatch(setValidMatch(passwordMatch));
  }, [passwordMatch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (variant === "login") {
      router.push("/dashboard");
    } else {
      router.push("/user/register");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {variant === "register" ? (
        <div className="mb-2 flex flex-col">
          <div className="relative flex ">
            <span className="inline-flex items-center rounded-l-md border-b border-l border-t border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
              <BiUser />
            </span>
            <input
              type="text"
              id="firstname"
              className="w-full flex-1 appearance-none rounded-r-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-royal-blue"
              placeholder="First name"
              autoComplete="off"
              value={firstName}
              onChange={(e) => dispatch(setFirstName(e.target.value))}
            />
            <input
              type="text"
              id="lastname"
              className="ml-2 w-full flex-1 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-royal-blue"
              placeholder="Last name"
              autoComplete="off"
              value={lastName}
              onChange={(e) => dispatch(setLastName(e.target.value))}
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
            className="w-full flex-1 appearance-none rounded-r-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-royal-blue"
            placeholder="Your email"
            autoComplete="off"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
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
              className="w-full flex-1 appearance-none rounded-r-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-royal-blue"
              placeholder="Phone number"
              autoComplete="off"
              value={phone}
              onChange={(e) => dispatch(setPhone(e.target.value))}
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
            className="w-full flex-1 appearance-none rounded-r-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-royal-blue"
            placeholder="Your password"
            autoComplete="off"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
        </div>
        {variant === "register" ? (
          <div className="relative flex ">
            <span className="inline-flex items-center rounded-l-md border-b border-l border-t border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
              <BiLock />
            </span>
            <input
              type="password"
              id="passwordmatch"
              className="w-full flex-1 appearance-none rounded-r-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-royal-blue"
              placeholder="Retype your password"
              autoComplete="off"
              value={password}
              onChange={(e) => dispatch(setPasswordMatch(e.target.value))}
            />
          </div>
        ) : null}
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
