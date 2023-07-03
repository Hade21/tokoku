"use client";
import React from "react";
import Button from "./Button";

interface CardProductProps {
  img: string;
  name: string;
  price: number;
  id: string;
}

const CardProduct: React.FC<CardProductProps> = ({ img, name, price, id }) => {
  return (
    <div className="rounded-md bg-gray-200 backdrop-blur-md dark:bg-penn-blue">
      <img src="" alt="product-image" className="rounded-t-md" />
      <div className="flex items-center justify-between p-2">
        <div>
          <h1 className="text-lg">Product Name</h1>
          <p className="text-sm font-bold text-red-500">Product Price</p>
        </div>
        <Button type="button" variant="secondary">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default CardProduct;
