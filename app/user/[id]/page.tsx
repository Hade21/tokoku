import React from "react";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import { Button } from "@/app/components";
import { FiEdit3 } from "react-icons/fi";
import { store } from "@/store/store";

const Profile = ({ params }: { params: { id: string } }) => {
  const profile = store.getState().userData;
  console.log("🚀 ~ file: page.tsx:10 ~ Profile ~ profile:", profile);
  return (
    <div className="h-screen w-[calc(100vw-1.5rem)] self-start px-6 py-8">
      <div className="mb-6 cursor-pointer self-start justify-self-start text-3xl transition-transform ease-in-out active:-translate-x-1">
        <BiArrowBack />
      </div>
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
            Muhammad Abdurrohman
          </h1>
        </div>
        <div className="">
          <Button type="button" variant="secondary">
            <span className="flex items-center gap-2">
              <FiEdit3 /> Edit
            </span>
          </Button>
        </div>
      </section>
      <section className="mb-4 border-t-2 border-white py-2">
        <h1 className="text-lg font-semibold">Email</h1>
        <p className="p-2 text-gray-500">rachman@hotmail.com</p>
      </section>
      <section className="mb-4 border-t-2 border-white py-2">
        <h1 className="text-lg font-semibold">Phone</h1>
        <p className="text-gray-500">085641889512</p>
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

export default Profile;
