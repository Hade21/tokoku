"use client";
import { useRef, useEffect } from "react";
import axios from "axios";
import Button from "./Button";
import { BiUser, BiLock, BiEnvelope, BiPhone } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  setEmail,
  setErrMsg,
  setFirstName,
  setFocusEmail,
  setFocusFirstName,
  setFocusLastName,
  setFocusPassword,
  setFocusPasswordMatch,
  setFocusPhone,
  setLastName,
  setPassword,
  setPasswordMatch,
  setPhone,
  toggleVisiblePasswordMatch,
  toggleVisiblePassword,
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassMatch,
  validatePassword,
  validatePhone,
  resetUserState,
} from "../../store/userSlice";
import AlertAnimation from "./AlertAnimation";
import Input from "./FormInput";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useLogin, useRegister } from "@/hooks/queryUserHooks";
import { SetTokenCookies } from "@/app/lib/tokenCookies";

interface FormUserProps {
  variant: "login" | "register";
}

const FormUser: React.FC<FormUserProps> = ({ variant }) => {
  const navigate = useRouter();
  const dispatch = useAppDispatch();
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLDivElement>(null);
  const {
    mutate: login,
    isLoading: loginLoading,
    error: errorLogin,
    isSuccess: isSuccessLogin,
    data: dataLogin,
  } = useLogin();
  const {
    mutate: register,
    isLoading: loadingRegister,
    error: errorRegister,
    isSuccess: isSuccessRegister,
  } = useRegister();

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
  const typeInputPass = useAppSelector((state) => state.user.typeInputPass);
  const typeInputPassMatch = useAppSelector(
    (state) => state.user.typeInputPasMatch
  );

  useEffect(() => {
    userRef.current?.focus();
  }, []);
  useEffect(() => {
    dispatch(validateFirstName(firstName));
  }, [firstName, dispatch]);
  useEffect(() => {
    dispatch(validateLastName(lastName));
  }, [lastName, dispatch]);
  useEffect(() => {
    dispatch(validateEmail(email));
  }, [email, dispatch]);
  useEffect(() => {
    dispatch(validatePassword(password));
  }, [password, dispatch]);
  useEffect(() => {
    dispatch(validatePassMatch(passwordMatch));
  }, [passwordMatch, dispatch]);
  useEffect(() => {
    dispatch(validatePhone(phone));
  }, [phone, dispatch]);

  useEffect(() => {
    if (axios.isAxiosError(errorLogin)) {
      if (errorLogin.response?.status) {
        dispatch(setErrMsg(errorLogin.response.data.message));
      } else {
        dispatch(setErrMsg("Network Error"));
      }
    }
  }, [errorLogin, dispatch]);
  useEffect(() => {
    if (isSuccessLogin) {
      const { token: accessToken, refreshToken, maxAge } = dataLogin.data;
      SetTokenCookies({ accessToken, refreshToken, maxAge })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Something went wrong!");
          }
          if (res.ok) {
            dispatch(resetUserState());
            navigate.push("/");
          }
        })
        .catch((err) => {
          dispatch(setErrMsg(err));
        });
    }
  }, [isSuccessLogin, dispatch, dataLogin?.data, navigate]);
  useEffect(() => {
    if (axios.isAxiosError(errorRegister)) {
      if (errorRegister.response?.status) {
        dispatch(setErrMsg(errorRegister.response.data.message));
      } else {
        dispatch(setErrMsg("Network Error"));
      }
    }
  }, [errorRegister, dispatch]);
  useEffect(() => {
    if (isSuccessRegister) {
      dispatch(resetUserState());
      navigate.push("/user/login");
    }
  }, [isSuccessRegister, navigate]);
  useEffect(() => {
    dispatch(setErrMsg(""));
  }, [firstName, lastName, email, password, passwordMatch, phone, dispatch]);

  const loginFunction = () => {
    if (!validEmail || !validPassword) {
      dispatch(setErrMsg("Invalid entries"));
      return;
    }
    const body = { email, password };
    login(body);
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
    register(body);
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
            <div className="relative flex">
              <span className="inline-flex items-center rounded-l-md border-b border-l border-t border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
                <BiUser />
              </span>
              <Input
                reference={userRef}
                type="text"
                id="firstName"
                placeholder="First name"
                value={firstName}
                describedBy="firstNameNote"
                valid={validFirstName}
                validation={true}
                onChange={(e) => dispatch(setFirstName(e.target.value))}
                onFocus={() => dispatch(setFocusFirstName(true))}
                onBlur={() => dispatch(setFocusFirstName(false))}
              />
              <Input
                reference={userRef}
                type="text"
                id="lastName"
                className="ml-1 w-[calc(100%-0.25rem)] rounded-l-md"
                placeholder="Last name"
                describedBy="lastNameNote"
                valid={validLastName}
                validation={true}
                value={lastName}
                onChange={(e) => dispatch(setLastName(e.target.value))}
                onFocus={() => dispatch(setFocusLastName(true))}
                onBlur={() => dispatch(setFocusLastName(false))}
              />
            </div>
          </div>
        ) : null}
        <p
          id="nameNote"
          className={
            (focusFirstName || focusLastName) &&
            (!validFirstName || !validLastName) &&
            (firstName || lastName)
              ? "mx-auto mb-1 flex w-5/6 items-center gap-2 rounded-lg border-2 border-slate-300 bg-white p-2 text-left text-xs text-red-500 opacity-100 transition-all duration-500"
              : "mx-auto h-0 w-0 text-left text-[0px] opacity-0 transition-all duration-500"
          }
        >
          <span className="text-lg">
            <AiOutlineInfoCircle />
          </span>
          <span>
            3 to 20 characters. <br />
            Use letter only. <br />
          </span>
        </p>
        <div className="mb-2 flex flex-col">
          <div className="relative flex">
            <span className="inline-flex items-center rounded-l-md border-b border-l border-t border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
              <BiEnvelope />
            </span>
            <Input
              reference={userRef}
              type="text"
              id="email"
              placeholder="Your email"
              describedBy="emailNote"
              valid={validEmail}
              value={email}
              validation={variant === "register" ? true : false}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              onFocus={() => dispatch(setFocusEmail(true))}
              onBlur={() => dispatch(setFocusEmail(false))}
            />
          </div>
        </div>
        <p
          id="emailNote"
          className={
            focusEmail && !validEmail && email && variant === "register"
              ? "mx-auto mb-1 flex w-5/6 items-center gap-2 rounded-lg border-2 border-slate-300 bg-white p-2 text-left text-xs text-red-500 opacity-100 transition-all duration-500"
              : "mx-auto h-0 w-0 text-left text-[0px] opacity-0 transition-all duration-500"
          }
        >
          <span className="text-lg">
            <AiOutlineInfoCircle />
          </span>
          <span>Email Invalid</span>
        </p>
        {variant === "register" ? (
          <div className="mb-2 flex flex-col">
            <div className="relative flex ">
              <span className="inline-flex items-center rounded-l-md border-b border-l border-t border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
                <BiPhone />
              </span>
              <Input
                reference={userRef}
                type="phone"
                id="phone"
                placeholder="Phone number"
                describedBy="phoneNote"
                valid={validPhone}
                validation={true}
                value={phone}
                onChange={(e) => dispatch(setPhone(e.target.value))}
                onFocus={() => dispatch(setFocusPhone(true))}
                onBlur={() => dispatch(setFocusPhone(false))}
              />
            </div>
          </div>
        ) : null}
        <p
          id="phoneNote"
          className={
            focusPhone && !validPhone && phone
              ? "mx-auto mb-1 flex w-5/6 items-center gap-2 rounded-lg border-2 border-slate-300 bg-white p-2 text-left text-xs text-red-500 opacity-100 transition-all duration-500"
              : "mx-auto h-0 w-0 text-left text-[0px] opacity-0 transition-all duration-500"
          }
        >
          <span className="text-lg">
            <AiOutlineInfoCircle />
          </span>
          <span>
            10-13 digits <br /> Number only
          </span>
        </p>
        <div className="mb-6 flex flex-col">
          <div className="relative flex">
            <span className="inline-flex items-center rounded-l-md border-b border-l border-t border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
              <BiLock />
            </span>
            <Input
              reference={userRef}
              type={typeInputPass}
              id="password"
              placeholder="Type your password"
              describedBy="passwordNote"
              valid={validPassword}
              validation={variant === "login" ? false : true}
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              onFocus={() => dispatch(setFocusPassword(true))}
              onBlur={() => dispatch(setFocusPassword(false))}
              viewPass={() => dispatch(toggleVisiblePassword())}
            />
          </div>
          <p
            id="passwordNote"
            className={
              focusPassword &&
              !validPassword &&
              password &&
              variant === "register"
                ? "mx-auto my-1 flex w-5/6 items-center gap-2 rounded-lg border-2 border-slate-300 bg-white p-2 text-left text-xs text-red-500 opacity-100 transition-all duration-500"
                : "mx-auto h-0 w-0 text-left text-[0px] opacity-0 transition-all duration-500"
            }
          >
            <span className="text-lg">
              <AiOutlineInfoCircle />
            </span>
            <span>
              8 to 24 characters. <br />
              Must include uppercase and lowercase letters, numbers, and special
              characters. <br />
              Allowed special characters:{" "}
              <b>
                <span aria-label="exclamation mark">!</span>
                <span aria-label="at mark">@</span>
                <span aria-label="hashtag">#</span>
                <span aria-label="dollar sign">$</span>
                <span aria-label="percent">%</span>
                <span aria-label="single-quote">&apos;</span>
                <span aria-label="ampersand">*</span>
              </b>
            </span>
          </p>
          {variant === "register" ? (
            <div className="relative mt-2 flex">
              <span className="inline-flex items-center rounded-l-md border-b border-l border-t border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
                <BiLock />
              </span>
              <Input
                reference={userRef}
                type={typeInputPassMatch}
                id="passwordMatch"
                placeholder="Retype your password"
                describedBy="passwordMatchNote"
                valid={validPassMatch}
                validation={true}
                value={passwordMatch}
                onChange={(e) => dispatch(setPasswordMatch(e.target.value))}
                onFocus={() => dispatch(setFocusPasswordMatch(true))}
                onBlur={() => dispatch(setFocusPasswordMatch(false))}
                viewPass={() => dispatch(toggleVisiblePasswordMatch())}
              />
            </div>
          ) : null}
          <p
            id="passwordNote"
            className={
              focusPasswordMatch && !validPassMatch && passwordMatch
                ? "mx-auto my-1 flex w-5/6 items-center gap-2 rounded-lg border-2 border-slate-300 bg-white p-2 text-left text-xs text-red-500 opacity-100 transition-all duration-500"
                : "mx-auto h-0 w-0 text-left text-[0px] opacity-0 transition-all duration-500"
            }
          >
            <span className="text-lg">
              <AiOutlineInfoCircle />
            </span>
            <span>Password didn&apos;t match</span>
          </p>
        </div>

        <div className="flex w-full">
          <Button
            type="submit"
            variant="primary"
            disabled={
              variant === "register"
                ? !validFirstName ||
                  !validLastName ||
                  !validEmail ||
                  !validPassword ||
                  !validPassMatch ||
                  !validPhone
                  ? true
                  : false
                : false
            }
            loading={loginLoading || loadingRegister}
          >
            <span>{variant === "login" ? "Sign In" : "Register"}</span>
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormUser;
