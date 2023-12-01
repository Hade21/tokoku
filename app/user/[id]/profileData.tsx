"use client";
import React from "react";
import { Button } from "@/app/components";
import Image from "next/image";
import { FiEdit3 } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { BiSave } from "react-icons/bi";
import { useGetUserData } from "@/hooks/queryUserHooks";
import {
  changeEmail,
  changeFirstName,
  changeLastName,
  changePhone,
} from "@/store/userDataSlice";

const ProfileData: React.FC = () => {
  const [edit, setEdit] = React.useState(false);
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.userData);
  const { data } = useGetUserData();
  console.log("🚀 ~ file: profileData.tsx:14 ~ data:", data);
  return (
    <div>
      <section className="mb-4 flex items-center justify-between gap-6 px-6">
        <nav>
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
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-oxford-blue">
            {!edit ? (
              `${profile.firstName} ${profile.lastName}`
            ) : (
              <div className="flex w-full flex-col gap-2">
                <input
                  className="rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-bice-blue"
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={profile.firstName}
                  placeholder="Your firstname"
                  onChange={(e) => dispatch(changeFirstName(e.target.value))}
                />
                <input
                  className="rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-bice-blue"
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={profile.lastName}
                  placeholder="Your lastname"
                  onChange={(e) => dispatch(changeLastName(e.target.value))}
                />
              </div>
            )}
          </h1>
        </div>
        <div className="">
          {edit ? (
            <Button
              type="button"
              variant="primary"
              onClick={() => setEdit(false)}
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
        </div>
      </section>
      <section className="mb-4 border-t-2 border-white py-2">
        <h1 className="text-lg font-semibold">Email</h1>
        {!edit ? (
          <p className="p-2 text-gray-500">{profile.email}</p>
        ) : (
          <input
            className="rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-bice-blue"
            type="text"
            name="email"
            id="email"
            value={profile.email}
            placeholder="Your email"
            onChange={(e) => dispatch(changeEmail(e.target.value))}
          />
        )}
      </section>
      <section className="mb-4 border-t-2 border-white py-2">
        <h1 className="text-lg font-semibold">Phone</h1>
        {!edit ? (
          <p className="text-gray-500">{profile.phone}</p>
        ) : (
          <input
            className="rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-bice-blue"
            type="text"
            name="phone"
            id="phone"
            value={profile.phone}
            placeholder="Your phone number"
            onChange={(e) => dispatch(changePhone(e.target.value))}
          />
        )}
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
