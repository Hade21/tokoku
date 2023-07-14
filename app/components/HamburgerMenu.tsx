"use client";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
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
        <Menu.Button>
          <GiHamburgerMenu />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-90"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transfom opacity-0 scale-90"
        >
          <Menu.Items className="absolute -right-8 top-[5.6rem] w-40 rounded-bl-md bg-white bg-opacity-70 backdrop-blur-sm md:top-[3.5rem]">
            {lists.map((item) => (
              <div className="p-1">
                <Menu.Item key={item.href} as={Fragment}>
                  {({ active }) => (
                    <Link
                      href={item.href as string}
                      className={`${
                        active ? "bg-blue-500 text-white" : "text-black"
                      } group flex w-full items-center gap-2 rounded-md p-2 text-sm sm:text-base`}
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
