"use client";
import { useLogout } from "@/hooks/queryUserHooks";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { resetData } from "@/store/userDataSlice";
import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import Modals from "./Modals";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { RemoveTokenCookies } from "../lib/tokenCookies";

interface LoginButtonProps {
  hamburger?: boolean;
}
const LoginButton: React.FC<LoginButtonProps> = ({ hamburger }) => {
  const navigate = useRouter();
  const dispatch = useAppDispatch();
  const _id = useAppSelector((state) => state.userData._id);
  const firstName = useAppSelector((state) => state.userData.firstName);
  const lastName = useAppSelector((state) => state.userData.lastName);
  const { mutate, data, isSuccess, isError, error, isLoading } = useLogout();
  const [openModal, setOpenModal] = React.useState(false);
  const [modalDesc, setModalDesc] = React.useState("");

  React.useEffect(() => {
    if (isLoading) {
      setOpenModal(true);
      setModalDesc("Loading ...");
    }
    if (!isLoading) {
      setOpenModal(false);
      setModalDesc("");
    }
  }, [isLoading]);
  React.useEffect(() => {
    if (isSuccess) {
      dispatch(resetData());
      setModalDesc(data.data.message);
      setOpenModal(true);
      setTimeout(() => {
        setOpenModal(false);
      }, 3000);
    } else if (isError) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 404) {
          setModalDesc(error.response?.data.message);
          setOpenModal(true);
          setTimeout(() => {
            setOpenModal(false);
            dispatch(resetData());
            // const res = RemoveTokenCookies();
            // console.log(
            // "🚀 ~ file: LoginButton.tsx:54 ~ setTimeout ~ res:",
            // res
            // );
            // navigate.push("/user/login");
          }, 3000);
        }
      }
    }
  }, [isSuccess, data, isError, error, dispatch]);

  const handleLogout = () => {
    mutate();
  };

  if (!_id)
    return (
      <Link
        href="/user/login"
        className={`cursor-pointer lg:flex lg:items-center lg:text-lg ${
          hamburger
            ? "group flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-sm text-oxford-blue hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white sm:text-base"
            : ""
        }`}
        title="Login"
      >
        <FiLogIn />
        {hamburger ? "Login" : null}
      </Link>
    );
  return (
    <div className="w-[50vw] flex-none lg:w-fit">
      <div
        className={`flex items-center justify-between text-lg lg:gap-6 2xl:gap-10 ${
          hamburger ? "divide-x divide-slate-200" : ""
        }`}
      >
        <p
          className={`cursor-pointer ${
            hamburger
              ? "group flex w-full items-center justify-center gap-2 px-4 py-2 text-sm text-oxford-blue hover:rounded-md hover:bg-blue-500 hover:text-white active:rounded-md active:bg-blue-500 active:text-white sm:text-base 2xl:text-3xl"
              : ""
          }`}
          onClick={handleLogout}
          title="Logout"
        >
          <FiLogOut />
          {hamburger ? "Logout" : null}
        </p>
        <Link
          href={`/user/${_id}`}
          title={`${firstName} ${lastName}`}
          className={`cursor-pointer ${
            hamburger
              ? "group flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-sm text-oxford-blue hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white sm:text-base 2xl:text-3xl"
              : ""
          }`}
        >
          <FaUserCircle />
          {hamburger ? "Profile" : null}
        </Link>
      </div>
      <Modals
        title="Logout"
        desc={modalDesc}
        isOpen={openModal}
        setIsOpen={setOpenModal}
      />
    </div>
  );
};

export default LoginButton;
