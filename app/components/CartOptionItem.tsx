"use client";
import React from "react";
import Button from "./Button";
import Counter from "./Counter";
import Selector from "./Selector";

const CartOptionItem: React.FC = () => {
  const [variant, setVariant] = React.useState("");
  const [color, setColor] = React.useState("");

  return (
    <div className="flex w-full flex-col justify-start gap-3 px-4">
      <Selector
        options={["S", "M", "L"]}
        title="Variant"
        value={variant}
        setValue={setVariant}
      />
      <Selector
        options={["White", "Black", "Blue"]}
        title="Color"
        value={color}
        setValue={setColor}
      />
      <Counter stock={5} />
      <div className="mt-10 w-fit self-center">
        <Button type="button" variant="primary">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default CartOptionItem;
