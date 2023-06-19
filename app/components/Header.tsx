import React from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
  FaOpencart,
} from "react-icons/fa";
import { BsReceipt } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import HamburgerMenu from "./HamburgerMenu";

const listMenu = [
  { href: "/cart", label: "Cart", icon: <FaShoppingCart /> },
  { href: "/transaction", label: "Transaction", icon: <BsReceipt /> },
  { href: "/login", label: "Login", icon: <FiLogIn /> },
  { href: "/profile", label: "Profile", icon: <FaUserCircle /> },
];

const Header: React.FC = () => {
  return (
    <div className="wrapper flex items-center justify-between px-6 py-4">
      <div className="logo flex items-center gap-2 md:text-lg xl:text-2xl 2xl:text-4xl">
        <span className="text-2xl xl:text-4xl 2xl:text-6xl">
          <FaOpencart />
        </span>
        <h1>Tokoku</h1>
      </div>
      <div className="menu text-sm">
        <ul className="hidden justify-end gap-6 text-base lg:flex xl:text-lg 2xl:gap-10 2xl:text-3xl">
          <li className="flex items-center gap-2 rounded-xl border-2 border-white px-3 py-2 text-xs md:text-base xl:text-lg 2xl:text-2xl">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="bg-transparent text-white outline-none"
            />
            <label htmlFor="input" className="cursor-pointer">
              <FaSearch />
            </label>
          </li>
          {listMenu.map((item) => (
            <li className="flex items-center gap-2">
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>
        <ul className="lg:hidden">
          <HamburgerMenu lists={listMenu} />
        </ul>
      </div>
    </div>
  );
};

export default Header;
