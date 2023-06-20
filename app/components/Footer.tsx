import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center gap-1 bg-gradient-to-b from-white via-blue-200 to-blue-200 pb-4 pt-6 text-oxford-blue">
      Made with{" "}
      <b className="text-red-500">
        <BsFillSuitHeartFill />
      </b>{" "}
      by Hade21
    </footer>
  );
};

export default Footer;
