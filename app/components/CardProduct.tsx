import React from "react";
import ImagesProduct from "./ImagesProduct";
import CartOptionItem from "./CartOptionItem";
import { AiFillStar } from "react-icons/ai";
import { CardProductProps } from "@/types";

const CardProduct: React.FC<CardProductProps> = (props) => {
  const { img, name, price, id, variants, colors, stocks, rating } = props;

  return (
    <div className="relative rounded-md bg-slate-100 shadow-lg dark:bg-penn-blue">
      <ImagesProduct img={img} _id={id} />
      <div className="group w-full p-4">
        <div>
          <h1 className="mb-4 text-lg">{name}</h1>
          <div className="flex justify-between">
            <p className="flex items-center gap-1">
              <AiFillStar className="text-xl text-yellow-500" />{" "}
              <span>{rating}</span>
            </p>
            <p className="text-base font-bold text-red-500">Rp.{price}</p>
          </div>
        </div>
        <div className="invisible absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center rounded-md bg-slate-400 bg-opacity-40 opacity-0 backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:opacity-100">
          <CartOptionItem
            variantOption={variants}
            colorOption={colors}
            stocks={stocks}
            _id={id}
          />
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
