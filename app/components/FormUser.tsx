"use client";
import { useRef, useEffect } from "react";
import Button from "./Button";
import { BiUser, BiLock, BiEnvelope, BiPhone } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  setEmail,
  setErrMsg,
  setFirstName,
  setLastName,
  setPassword,
  setPasswordMatch,
  setPhone,
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassMatch,
  validatePassword,
  validatePhone,
} from "../store/userSlice";
import { useLoginMutation, useRegisterMutation } from "../store/userApi";
import AlertAnimation from "./AlertAnimation";

interface FormUserProps {
  variant: "login" | "register";
}

const FormUser: React.FC<FormUserProps> = ({ variant }) => {
  const dispatch = useAppDispatch();
  const userRef = useRef();
  const errRef = useRef();
  const [
    useLogin,
    {
      isLoading: loginLoading,
      isError: isLoginError,
      data: loginData,
      error: loginError,
    },
  ] = useLoginMutation();
  const [
    useRegister,
    {
      isLoading: registerLoading,
      isError: isRegisterError,
      data: registerData,
      error: registerError,
    },
  ] = useRegisterMutation();

  const firstName = useAppSelector((state) => state.user.firstName);
  const lastName = useAppSelector((state) => state.user.lastName);
  const password = useAppSelector((state) => state.user.password);
  const passwordMatch = useAppSelector((state) => state.user.passwordMatch);
  const email = useAppSelector((state) => state.user.email);
  const phone = useAppSelector((state) => state.user.phone);
  const validFirstName = useAppSelector((state) => state.user.validFirstName);
  const validLastName = useAppSelector((state) => state.user.validLastName);
  const validEmail = useAppSelector((state) => state.user.validEmail);
  const validPassword = useAppSelector((state) => state.user.validPassword);
  const validPassMatch = useAppSelector((state) => state.user.validPassMatch);
  const validPhone = useAppSelector((state) => state.user.validPhone);
  const errMsg = useAppSelector((state) => state.user.errMessage);

  useEffect(() => {
    dispatch(validateFirstName(firstName));
  }, [firstName]);
  useEffect(() => {
    dispatch(validateLastName(lastName));
  }, [lastName]);
  useEffect(() => {
    dispatch(validateEmail(email));
  }, [email]);
  useEffect(() => {
    dispatch(validatePassword(password));
  }, [password]);
  useEffect(() => {
    dispatch(validatePassMatch(passwordMatch));
  }, [passwordMatch]);
  useEffect(() => {
    dispatch(validatePhone(phone));
  }, [phone]);

  useEffect(() => {
    if (!loginError) {
      dispatch(setErrMsg("Failed to connect. Check network connection"));
    } else if (loginError && "status" in loginError) {
      dispatch(setErrMsg(loginError.data.message));
    }
  }, [loginError]);
  useEffect(() => {
    console.log(loginData);
  }, [loginData]);
  useEffect(() => {
    if (!registerError) {
      dispatch(setErrMsg("Failed to connect. Check network connection"));
    } else if (registerError && "status" in registerError) {
      dispatch(setErrMsg(registerError.data.message));
    }
  }, [registerError]);
  useEffect(() => {
    dispatch(setErrMsg(""));
  }, [firstName, lastName, email, password, passwordMatch, phone]);

  const loginFunction = () => {
    if (!validEmail || !validPassword) {
      dispatch(setErrMsg("Invalid entries"));
      return;
    }
    const body = { email, password };
    useLogin(body);
  };

  const registerFunction = () => {
    if (
      !validEmail ||
      !validPassword ||
      !validFirstName ||
      !validLastName ||
      !validPassMatch ||
      !validPhone
    ) {
      dispatch(setErrMsg("Invalid entries"));
      return;
    }
    const body = { firstName, lastName, email, password, phone };
    useRegister(body);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (variant === "register") registerFunction();
    else loginFunction();
  };

  return (
    <>
      <p
        className={
          errMsg
            ? "mb-4 flex items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-center text-base font-bold text-white transition-all duration-300"
            : "fixed -top-[1024px] transition-all duration-300"
        }
        aria-live="assertive"
      >
        {errMsg}{" "}
        <span>
          <AlertAnimation size={50} color="#fff" />
        </span>
      </p>
      <form onSubmit={handleSubmit}>
        {variant === "register" ? (
          <div className="mb-2 flex flex-col">
            <div className="relative flex ">
              <span className="inline-flex items-center rounded-l-md border-b border-l border-t border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
                <BiUser />
              </span>
              <input
                type="text"
                id="firstName"
                className="w-full flex-1 appearance-none rounded-r-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-royal-blue"
                placeholder="First name"
                autoComplete="off"
                value={firstName}
                onChange={(e) => dispatch(setFirstName(e.target.value))}
              />
              <input
                type="text"
                id="lastName"
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
          <div className="relative flex">
            <span className="inline-flex items-center rounded-l-md border-b border-l border-t border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
              <BiLock />
            </span>
            <input
              type="password"
              id="password"
              className="w-full flex-1 appearance-none rounded-r-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-royal-blue"
              placeholder="Type your password"
              autoComplete="off"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
            />
          </div>
          {variant === "register" ? (
            <div className="relative flex">
              <span className="inline-flex items-center rounded-l-md border-b border-l border-t border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
                <BiLock />
              </span>
              <input
                type="password"
                id="passwordMatch"
                className="w-full flex-1 appearance-none rounded-r-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-royal-blue"
                placeholder="Retype your password"
                autoComplete="off"
                value={passwordMatch}
                onChange={(e) => dispatch(setPasswordMatch(e.target.value))}
              />
            </div>
          ) : null}
        </div>
        <div className="flex w-full">
          <Button
            type="submit"
            variant="primary"
            loading={loginLoading || registerLoading}
          >
            <span>{variant === "login" ? "Sign In" : "Register"}</span>
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormUser;
