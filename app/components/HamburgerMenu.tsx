"use client";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
import Link from "next/link";

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
          enterFrom="transform opacity-0 scale-90 translate-x-full"
          leave="transition ease-in duration-200"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transfom opacity-0 scale-90 translate-x-full"
        >
          <Menu.Items className="absolute -right-8 top-[6rem] inline-block w-44 divide-y divide-slate-200 rounded-l-md bg-slate-100 shadow-sm shadow-slate-300 md:top-[3.6rem]">
            {lists.map((item) => (
              <div>
                <Menu.Item key={item.href} as={Fragment}>
                  {({ active }) => (
                    <Link
                      href={item.href as string}
                      className={`${
                        active ? "bg-blue-500 text-white" : "text-oxford-blue"
                      } group flex w-full items-center gap-2 rounded-md px-4 py-2 text-sm sm:text-base`}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default HamburgerMenu;
