import React from "react";
import Link from "next/link";

import { FormUser, UserAnimation } from "@/app/components";

const Register: React.FC = () => {
  return (
    <div className="flex w-full max-w-sm flex-col rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
      <div className="flex w-full flex-col items-center justify-center">
        <UserAnimation />
        <h2 className="mt-4 text-xl font-medium text-gray-600 dark:text-gray-200">
          Register
        </h2>
        <p className="text-sm text-gray-400 dark:text-gray-300">
          Create new account
        </p>
      </div>
      <div className="mt-8">
        <FormUser variant="register" />
        <div className="mt-6 flex items-center justify-center">
          <Link href="/user/login">
            <div className="inline-flex items-center text-center text-xs font-thin text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
              <span className="ml-2">Have an account? Sign in now</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
