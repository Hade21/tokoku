import React from "react";
import ImageSlider from "./ImageSlider";

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
    <section className="flex justify-between gap-4 rounded-md bg-white px-4 py-6">
      <div className="img-sect flex min-w-[25%] items-center">
        <ImageSlider img={props.img} />
      </div>
      <div className="desc-sect flex flex-1 flex-col justify-between">
        <h3 className="text-xl font-semibold">{props.title}</h3>
        <p className="text-base font-semibold text-red-500">
          Rp. {props.price}
        </p>
      </div>
      <div className="detail-sect flex-1">
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
      <div className="action-sect flex justify-stretch text-white">
        <p className="flex-1 items-center bg-yellow-400">Change Option</p>
        <p className="flex-1 items-center bg-red-600">Delete</p>
      </div>
    </section>
  );
};

export default CartProduct;
