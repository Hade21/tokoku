import React from "react";
import ImageSlider from "./ImageSlider";
import { AiFillDelete } from "react-icons/ai";

interface CartProductProps {
  _id: string;
  img: [{ url: string }];
  title: string;
  price: number;
  variant: string;
  color: string;
  quantity: number;
}
const CartProduct: React.FC<CartProductProps> = (props) => {
  return (
    <section className="flex justify-between gap-4 px-4 py-6">
      <div></div>
      <div className="img-sect min-w-[25%]">
        <ImageSlider img={props.img} />
      </div>
      <div className="desc-sect flex flex-1 flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">{props.title}</h3>
        <p className="text-base font-bold text-red-500">Rp. {props.price}</p>
      </div>
      <div className="detail-sect flex-1 self-center">
        <p className="text-sm font-normal text-gray-500">
          Variant: {props.variant}
        </p>
        <p className="text-sm font-normal text-gray-500">
          Color: {props.color}
        </p>
        <p className="text-sm font-normal text-gray-500">
          Quantity: {props.quantity}
        </p>
      </div>
      <div className="action-sect flex justify-center text-white">
        <p className="flex cursor-pointer items-center gap-2 rounded-md bg-red-600 px-6 transition-colors duration-200 hover:bg-red-500">
          <AiFillDelete /> <span>Delete</span>
        </p>
      </div>
    </section>
  );
};

export default CartProduct;
