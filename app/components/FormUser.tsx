"use client";
import { useRef, useEffect } from "react";
import Button from "./Button";
import { BiUser, BiLock, BiEnvelope, BiPhone } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  setEmail,
  setErrMsg,
  setFirstName,
  setFocusFirstName,
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
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLDivElement>(null);
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
  const focusFirstName = useAppSelector((state) => state.user.firstNameFocus);
  const lastName = useAppSelector((state) => state.user.lastName);
  const focusLastName = useAppSelector((state) => state.user.lastNameFocus);
  const password = useAppSelector((state) => state.user.password);
  const focusPassword = useAppSelector((state) => state.user.passwordFocus);
  const passwordMatch = useAppSelector((state) => state.user.passwordMatch);
  const focusPasswordMatch = useAppSelector(
    (state) => state.user.passwordMatchFocus
  );
  const email = useAppSelector((state) => state.user.email);
  const focusEmail = useAppSelector((state) => state.user.emailFocus);
  const phone = useAppSelector((state) => state.user.phone);
  const focusPhone = useAppSelector((state) => state.user.phoneFocus);
  const validFirstName = useAppSelector((state) => state.user.validFirstName);
  const validLastName = useAppSelector((state) => state.user.validLastName);
  const validEmail = useAppSelector((state) => state.user.validEmail);
  const validPassword = useAppSelector((state) => state.user.validPassword);
  const validPassMatch = useAppSelector((state) => state.user.validPassMatch);
  const validPhone = useAppSelector((state) => state.user.validPhone);
  const errMsg = useAppSelector((state) => state.user.errMessage);

  useEffect(() => {
    userRef.current?.focus();
  }, []);
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
    if (loginError && "status" in loginError) {
      if (loginError.status === "FETCH_ERROR") {
        dispatch(setErrMsg("Failed to connect. Check network connection"));
      } else {
        dispatch(setErrMsg(loginError.data?.message));
      }
    }
  }, [isLoginError]);
  useEffect(() => {
    console.log(loginData);
  }, [loginData]);
  useEffect(() => {
    if (registerError && "status" in registerError) {
      if (registerError.status === "FETCH_ERROR") {
        dispatch(setErrMsg("Failed to connect. Check network connection"));
      } else {
        dispatch(setErrMsg(registerError.data.message));
      }
    }
  }, [isRegisterError]);
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
      <div
        ref={errRef}
        className={
          errMsg
            ? "mb-4 flex items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-center text-base font-bold text-white transition-all duration-300"
            : "invisible transition-all duration-300"
        }
        aria-live="assertive"
      >
        {errMsg}{" "}
        <span>
          <AlertAnimation size={50} color="#fff" />
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        {variant === "register" ? (
          <div className="mb-2 flex flex-col">
            <div className="relative flex ">
              <span className="inline-flex items-center rounded-l-md border-b border-l border-t border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
                <BiUser />
              </span>
              <input
                ref={userRef}
                type="text"
                id="firstName"
                className="w-full flex-1 appearance-none rounded-r-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-royal-blue"
                placeholder="First name"
                autoComplete="off"
                value={firstName}
                onChange={(e) => dispatch(setFirstName(e.target.value))}
                onFocus={() => dispatch(setFocusFirstName(true))}
                onBlur={() => dispatch(setFocusFirstName(false))}
              />
              <input
                ref={userRef}
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
              ref={userRef}
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
                ref={userRef}
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
              ref={userRef}
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
                ref={userRef}
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
