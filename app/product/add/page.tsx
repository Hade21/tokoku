import { Footer, Header } from "@/app/components";
import Product from "./addProduct";
import React from "react";

const AddProduct = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <Product />
      <Footer />
    </div>
  );
};

export default AddProduct;
