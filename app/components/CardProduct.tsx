import React from "react";
import Button from "./Button";
import ImagesProduct from "./ImagesProduct";
import { addToCart } from "../api/productApi";
import CartOptionItem from "./CartOptionItem";

interface CardProductProps {
  img: [{ url: string }];
  name: string;
  price: number;
  id: string;
}

const CardProduct: React.FC<CardProductProps> = (props) => {
  const { img, name, price, id } = props;

  const handleAddToCart = async () => {
    const body = {
      _id: id,
      count: 1,
      variant: "white",
    };
    const cart = await addToCart(body);
  };

  return (
    <div className="relative rounded-md bg-slate-100 shadow-lg dark:bg-penn-blue">
      <ImagesProduct img={img} />
      <div className="group w-full p-4">
        <div>
          <h1 className="mb-4 text-lg">{name}</h1>
          <p className="text-right text-sm font-bold text-red-500">
            Rp.{price}
          </p>
        </div>
        <div className="invisible absolute left-0 top-0 flex h-full w-full items-center justify-center bg-white bg-opacity-40 opacity-0 backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:opacity-100">
          <CartOptionItem />
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
