import React from "react";
import { FaShoppingCart, FaOpencart } from "react-icons/fa";
import { BsReceipt } from "react-icons/bs";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";

const listMenu = [
  { href: "/cart", label: "Cart", icon: <FaShoppingCart /> },
  { href: "/transaction", label: "Transaction", icon: <BsReceipt /> },
];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 grid grid-cols-2 grid-rows-2 items-center justify-between bg-white bg-opacity-40 px-8 py-6 text-oxford-blue shadow-sm backdrop-blur-lg dark:bg-oxford-blue dark:bg-opacity-70 dark:text-orange-cream dark:shadow-md md:flex">
      <div className="logo flex items-center gap-2 md:text-lg xl:text-2xl 2xl:text-4xl">
        <span className="text-2xl xl:text-4xl 2xl:text-6xl">
          <FaOpencart />
        </span>
        <h1 className="font-semibold">Tokoku</h1>
      </div>
      <div className="col-span-2 col-start-1 row-start-2">
        <SearchBar />
      </div>
      <div className="menu col-start-2 row-start-1 flex justify-end text-sm font-semibold">
        <ul className="hidden justify-end gap-6 text-sm lg:flex xl:text-lg 2xl:gap-10 2xl:text-3xl">
          {listMenu.map((item, key) => (
            <li key={key}>
              <Link
                href={item.href}
                className="flex cursor-pointer items-center gap-2 text-lg"
                title={item.label}
              >
                {item.icon}
              </Link>
            </li>
          ))}
          <LoginButton hamburger={false} />
        </ul>
        <ul className="lg:hidden">
          <HamburgerMenu lists={listMenu} />
        </ul>
      </div>
    </header>
  );
};

export default Header;
