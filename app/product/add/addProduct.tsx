import { BackButton, Button, Dropzone } from "@/app/components";
import React from "react";

const Product = () => {
  return (
    <div className="mx-auto my-4 flex h-full w-10/12 flex-col justify-between gap-4">
      <div className="head flex items-center justify-between">
        <BackButton />
      </div>
      <main>
        <div className="img-tittle">
          <Dropzone />
        </div>
      </main>
    </div>
  );
};

export default Product;
