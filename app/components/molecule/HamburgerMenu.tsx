"use client";
import React, { Fragment } from "react";
import Link from "next/link";

import { Menu, Transition } from "@headlessui/react";
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
import { LoginButton } from "../organism";

interface HamburgerMenuProps {
  lists: {
    href: React.Key;
    label: String;
    icon: React.ReactNode;
  }[];
}
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ lists }) => {
  return (
    <>
      <Menu
        as="div"
        className="relative inline-block text-left text-base sm:text-2xl"
      >
        <Menu.Button className="transition-all duration-150">
          <UseAnimations animation={menu2} size={30} />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform -translate-y-full blur-md bg-opacity-40"
          leave="transition ease-in duration-200"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform -translate-y-full blur-md bg-opacity-40"
        >
          <Menu.Items
            className="absolute -right-8 top-[6rem] -z-50 inline-block w-screen divide-y divide-slate-200 rounded-b-md bg-white shadow-sm shadow-slate-300 md:top-[3.6rem] md:flex md:flex-row md:justify-between md:divide-x md:divide-y-0"
            as="ul"
          >
            {lists.map((item) => (
              <Menu.Item key={item.href} as="li" className="w-full">
                {({ active }) => (
                  <Link
                    href={item.href as string}
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-oxford-blue"
                    } group flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-sm sm:text-base`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                )}
              </Menu.Item>
            ))}
            <LoginButton hamburger={true} />
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default HamburgerMenu;
