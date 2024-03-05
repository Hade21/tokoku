"use client";
import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { useGetUserData, useUpdateProfileData } from "@/hooks/queryUserHooks";
import {
  changeEmail,
  changeFirstName,
  changeLastName,
  changePhone,
  setData,
} from "@/store/userDataSlice";

import { Button } from "@/app/components";
import { FiEdit3 } from "react-icons/fi";
import { BiSave } from "react-icons/bi";
import { GiBoxUnpacking } from "react-icons/gi";

const ProfileData: React.FC = () => {
  const [edit, setEdit] = React.useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.userData);
  const { data } = useGetUserData();
  const { mutate, isSuccess, isLoading } = useUpdateProfileData();

  useMemo(() => {
    dispatch(setData(data?.data.user));
  }, [data, dispatch]);

  const handleSave = () => {
    mutate({ id: profile._id, body: profile });
  };

  useEffect(() => {
    if (isSuccess) setEdit(false);
  }, [isSuccess]);

  if (isSuccess && data === undefined) {
    return redirect("/user/login");
  }

  return (
    <div>
      <section
        className={`mb-4 gap-6 transition-all duration-300 sm:px-6 ${
          edit
            ? "flex flex-col sm:grid sm:grid-cols-3"
            : "flex flex-col items-center justify-between sm:flex-row"
        }`}
      >
        <nav
          className={`${
            edit ? "row-span-2 w-fit self-center justify-self-center" : ""
          }`}
        >
          <div className="flex aspect-square items-center justify-center overflow-hidden rounded-full bg-white p-4">
            <Image
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
              loading="lazy"
              alt="Profile Avatar"
              width="100"
              height="100"
            ></Image>
          </div>
        </nav>
        <div
          className={`${
            edit
              ? "col-span-2 col-start-2 row-start-2"
              : "flex-grow text-center sm:text-left "
          }`}
        >
          <h1 className="text-3xl font-semibold text-oxford-blue dark:text-white">
            {edit ? (
              <div className="flex w-full flex-col gap-2">
                <input
                  className="rounded-md px-3 py-2 text-xl outline-none transition-all duration-300 focus:ring-2 focus:ring-offset-bice-blue"
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={profile.firstName}
                  placeholder="Your firstname"
                  onChange={(e) => dispatch(changeFirstName(e.target.value))}
                />
                <input
                  className="rounded-md px-3 py-2 text-xl outline-none transition-all duration-300 focus:ring-2 focus:ring-offset-bice-blue"
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={profile.lastName}
                  placeholder="Your lastname"
                  onChange={(e) => dispatch(changeLastName(e.target.value))}
                />
              </div>
            ) : (
              `${profile.firstName} ${profile.lastName}`
            )}
          </h1>
        </div>
        <div className="fixed right-3 top-4 col-span-2 flex flex-col items-end justify-center gap-4 justify-self-end sm:static">
          {edit ? (
            <Button
              type="button"
              variant="primary"
              onClick={handleSave}
              loading={isLoading}
            >
              <span className="flex items-center gap-2">
                <BiSave /> Save
              </span>
            </Button>
          ) : (
            <Button
              type="button"
              variant="secondary"
              onClick={() => setEdit(true)}
            >
              <span className="flex items-center gap-2">
                <FiEdit3 /> Edit
              </span>
            </Button>
          )}
          <Button
            type="button"
            variant="secondary"
            onClick={() => router.push(`/user/${profile._id}/products`)}
          >
            <span className="flex items-center gap-2">
              <GiBoxUnpacking /> My Products
            </span>
          </Button>
        </div>
      </section>
      <section className="mb-4 flex flex-col justify-between border-t-2 border-white py-2 sm:flex-row">
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Email</h1>
          {edit ? (
            <input
              className="rounded-md px-3 py-2 outline-none transition-all duration-300 focus:ring-2 focus:ring-offset-bice-blue"
              type="text"
              name="email"
              id="email"
              value={profile.email}
              placeholder="Your email"
              onChange={(e) => dispatch(changeEmail(e.target.value))}
            />
          ) : (
            <p className="p-2 text-gray-500">{profile.email}</p>
          )}
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Phone</h1>
          {edit ? (
            <input
              className="rounded-md px-3 py-2 outline-none transition-all duration-300 focus:ring-2 focus:ring-offset-bice-blue"
              type="text"
              name="phone"
              id="phone"
              value={profile.phone}
              placeholder="Your phone number"
              onChange={(e) => dispatch(changePhone(e.target.value))}
            />
          ) : (
            <p className="text-gray-500">{profile.phone}</p>
          )}
        </div>
      </section>
      <section className="mb-4 border-t-2 border-white py-2">
        <h1 className="text-lg font-semibold">Addresses</h1>
        <ul className="mt-2 flex flex-col gap-2 px-2">
          <li>
            <div className="rounded-md bg-white p-2">
              Dusun Kwangsan RT03/RW03, Desa Ketapang, Kec. Susukan, Kab.
              Semarang, Jawa Tengah 50777
            </div>
          </li>
          <li>
            <div className="rounded-md bg-white p-2">
              Dusun Kwangsan RT03/RW03, Desa Ketapang, Kec. Susukan, Kab.
              Semarang, Jawa Tengah 50777
            </div>
          </li>
          <li>
            <div className="rounded-md bg-white p-2">
              Dusun Kwangsan RT03/RW03, Desa Ketapang, Kec. Susukan, Kab.
              Semarang, Jawa Tengah 50777
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ProfileData;
