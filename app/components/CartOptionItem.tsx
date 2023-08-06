"use client";
import React from "react";
import Button from "./Button";
import Counter from "./Counter";
import Selector from "./Selector";
import { CartOptionProps } from "@/types";

const CartOptionItem: React.FC<CartOptionProps> = (props) => {
  const { variantOption, colorOption, stocks } = props;
  const [variant, setVariant] = React.useState("");
  const [color, setColor] = React.useState("");
  const [count, setCount] = React.useState(1);

  const handleAddToCart = () => {
    console.log({ variant, color, count });
  };

  return (
    <div className="flex w-full flex-col justify-start gap-3 px-4">
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
      <div className="mt-10 w-fit self-center">
        <Button type="button" variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default CartOptionItem;
