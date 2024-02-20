import React from "react";

import { LoadingAnimation } from "./components";

const loading = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <LoadingAnimation size={60} color="#7EC8E3" />
    </div>
  );
};

export default loading;
