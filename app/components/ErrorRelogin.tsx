import React from "react";
import { MdOutlineError } from "react-icons/md";

const ErrorRelogin = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center gap-2 divide-x-2 divide-penn-blue bg-slate-300 p-6 text-penn-blue">
      <p>
        <MdOutlineError fill="" size={60} />
      </p>
      <p className="pl-2 font-medium">
        Ups... <br />
        Something went wrong, try to login again!
      </p>
    </div>
  );
};

export default ErrorRelogin;
