"use client";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";

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
          <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            {lists.map((item) => (
              <div className="p-1">
                <Menu.Item key={item.href} as={Fragment}>
                  {({ active }) => (
                    <a
                      href={item.href as string}
                      className={`${
                        active
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      } group flex w-full items-center gap-2 rounded-md p-2 text-sm sm:text-base`}
                    >
                      {item.icon}
                      {item.label}
                    </a>
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
