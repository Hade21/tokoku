import React from "react";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
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
    <div className="wrapper flex justify-between px-6 py-4">
      <div className="logo">
        <h1>Tokoku</h1>
      </div>
      <div className="menu text-sm">
        <ul className="hidden justify-end gap-6 md:flex">
          <li className="flex items-center gap-2 rounded-full border-2 border-white px-3 py-2 text-xs">
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
          <li className="flex items-center gap-2">
            <FaShoppingCart />
            <span>Cart</span>
          </li>
          <li className="flex items-center gap-2">
            <BsReceipt />
            <span>Transaction</span>
          </li>
          {/* <li className="flex items-center gap-2">
            <FaUserCircle />
            <span>Profile</span>
          </li> */}
          <li className="flex items-center gap-2">
            <FiLogIn />
            <span>Login</span>
          </li>
        </ul>
        <ul className="md:hidden">
          <HamburgerMenu lists={listMenu} />
        </ul>
      </div>
    </div>
  );
};

export default Header;
