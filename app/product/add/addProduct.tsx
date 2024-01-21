import { BackButton, Button } from "@/app/components";
import React from "react";

const Product = () => {
  return (
    <div className="mx-auto my-4 w-10/12">
      <div className="head flex items-center justify-between">
        <BackButton />
        <Button type="button" variant="primary">
          Save
        </Button>
      </div>
    </div>
  );
};

export default Product;
