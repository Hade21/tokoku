import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center gap-1 bg-blue-200 py-4 text-sm text-oxford-blue dark:bg-penn-blue dark:text-white md:text-base xl:text-lg 2xl:text-2xl">
      Made with{" "}
      <b className="text-red-500">
        <BsFillSuitHeartFill />
      </b>{" "}
      by Hade21
    </footer>
  );
};

export default Footer;
