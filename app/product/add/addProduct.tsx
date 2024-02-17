import { BackButton } from "@/app/components";
import React from "react";
import FormProduct from "../FormProduct";

const Product = () => {
  return (
    <div className="mx-auto my-4 flex h-full w-10/12 flex-col justify-between gap-4">
      <div className="head flex items-center justify-between">
        <BackButton />
      </div>
      <main>
        <div className="img-tittle">
          <FormProduct type="add" />
        </div>
      </main>
    </div>
  );
};

export default Product;
