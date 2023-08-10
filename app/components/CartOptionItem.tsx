"use client";
import React from "react";
import Button from "./Button";
import Counter from "./Counter";
import Selector from "./Selector";
import { CartOptionProps } from "@/types";

const CartOptionItem: React.FC<CartOptionProps> = (props) => {
  const { variantOption, colorOption, stocks, _id } = props;
  const [variant, setVariant] = React.useState("");
  const [color, setColor] = React.useState("");
  const [count, setCount] = React.useState(1);

  const handleAddToCart = () => {
    const body = {
      cart: {
        _id,
        variant,
        color,
        count,
      },
    };
  };

  return (
    <div className="flex w-full flex-col justify-start gap-2 px-4 xl:gap-1">
      <Selector
        options={variantOption}
        title="Variant"
        value={variant}
        setValue={setVariant}
      />
      <Selector
        options={colorOption}
        title="Color"
        value={color}
        setValue={setColor}
      />
      <Counter stock={stocks} count={count} setCount={setCount} />
      <div className="mt-3 w-fit self-center lg:mt-10 xl:mt-3">
        <Button type="button" variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default CartOptionItem;
