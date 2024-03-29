"use client";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";

import axios from "axios";
import { CartOptionProps } from "@/types";
import { useAddToCart } from "@/hooks/queryUserHooks";

import { Button, Counter, Selector } from "../atom";
import Modals from "./Modals";

const CartOptionItem: React.FC<CartOptionProps> = (props) => {
  const { variantOption, colorOption, stocks, _id } = props;
  const [variant, setVariant] = React.useState("");
  const [color, setColor] = React.useState("");
  const [count, setCount] = React.useState(1);
  const [modal, setModal] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalDesc, setModalDesc] = React.useState("");
  const { mutate, data, isLoading, isError, isSuccess, error } = useAddToCart();

  const handleAddToCart = async () => {
    if (!_id || !variant || !color || !count) {
      setModal(true);
      setModalTitle("Invalid Entry!");
      setModalDesc("Please pick product variant/color!");
      return;
    } else {
      const body = {
        cart: {
          _id,
          variant,
          color,
          count,
        },
      };
      mutate(body);
    }
  };

  useEffect(() => {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        redirect("/user/login");
      }
    } else if (isError) {
      console.log(error);
      redirect("/user/login");
    }
  }, [isError, error]);
  useEffect(() => {
    if (isSuccess && (data?.status === 200 || 201)) {
      setCount(1);
      setVariant("");
      setColor("");
      setModal(true);
      setModalTitle("Success");
      setModalDesc("Product added to cart");
    }
  }, [isSuccess, data]);

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
      <Modals
        title={modalTitle}
        desc={modalDesc}
        button="OK"
        isOpen={modal}
        setIsOpen={setModal}
      />
    </div>
  );
};

export default CartOptionItem;
