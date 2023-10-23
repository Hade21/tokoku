"use client";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import Button from "./Button";
import Counter from "./Counter";
import Selector from "./Selector";
import { CartOptionProps } from "@/types";
import { useAddToCart } from "@/hooks/queryUserHooks";
import Modals from "./Modals";
import axios from "axios";

const CartOptionItem: React.FC<CartOptionProps> = (props) => {
  const { variantOption, colorOption, stocks, _id } = props;
  const [variant, setVariant] = React.useState("");
  const [color, setColor] = React.useState("");
  const [count, setCount] = React.useState(1);
  const { mutate, data, isLoading, isError, isSuccess, error } = useAddToCart();

  const handleAddToCart = async () => {
    if (!_id || !variant || !color || !count)
      return alert("Pick variant/color!");
    const body = {
      cart: {
        _id,
        variant,
        color,
        count,
      },
    };
    mutate(body);
  };

  useEffect(() => {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        redirect("/user/login");
      }
    }
  }, [isError]);
  useEffect(() => {
    if (isSuccess) {
      setCount(1);
      setVariant("");
      setColor("");
      console.log(data);
    }
  }, [isSuccess]);

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
        <Button
          type="button"
          variant="primary"
          onClick={handleAddToCart}
          loading={isLoading}
        >
          Add to Cart
        </Button>
      </div>
      {isSuccess && (
        <Modals title="Product Added" desc="Items has added to your cart" />
      )}
    </div>
  );
};

export default CartOptionItem;
