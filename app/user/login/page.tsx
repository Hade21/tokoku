import React from "react";
import { FormUser, UserAnimation } from "../../components";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex w-full max-w-sm flex-col rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
      <div className="flex w-full flex-col items-center justify-center">
        <UserAnimation />
        <h2 className="mt-4 text-xl font-medium text-gray-600 dark:text-gray-200">
          Login
        </h2>
        <p className="text-sm text-gray-400 dark:text-gray-300">
          Sign in to your account
        </p>
      </div>
      <div className="mt-8">
        <FormUser variant="login" />
        <div className="mt-6 flex items-center justify-center">
          <Link href="/user/register">
            <div className="inline-flex items-center text-center text-xs font-thin text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
              <span className="ml-2">You don&#x27;t have an account?</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
