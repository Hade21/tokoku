"use client";
import React from "react";
import {
  CartProduct,
  CartProductLoading,
  ErrorRelogin,
} from "@/app/components";
import { useGetCart } from "@/hooks/queryUserHooks";
import { RadioGroup } from "@headlessui/react";
import { redirect } from "next/navigation";

const CartListWrapper = () => {
  const { data, isSuccess, isLoading } = useGetCart();
  const [checked, setChecked] = React.useState([]);

  if (isLoading) {
    return <CartProductLoading />;
  }

  if (isSuccess && !data) {
    return redirect("/user/login");
  }

  if (data?.data.products.lenght === 0)
    return (
      <div className="flex flex-col gap-4 bg-slate-300 p-6">Cart Empty</div>
    );

  return (
    <div className="bg-slate-300 p-6">
      <RadioGroup>
        <RadioGroup.Label className="sr-only">Cart List</RadioGroup.Label>
        <div className="space-y-2">
          {data?.data.products.map((product: any) => {
            return (
              <RadioGroup.Option
                value={product}
                key={product._id}
                className={({ active, checked }) =>
                  `cursor-pointer rounded-md ${
                    active
                      ? "ring-4 ring-non-photo-blue ring-offset-2 ring-offset-transparent"
                      : ""
                  }
                  ${checked ? "bg-bice-blue" : "bg-white"}`
                }
              >
                <CartProduct
                  _id={product._id}
                  title={product.product.title}
                  color={product.color}
                  img={product.product.images}
                  price={product.price}
                  quantity={product.count}
                  variant={product.variant}
                />
              </RadioGroup.Option>
            );
          })}
        </div>
      </RadioGroup>
    </div>
  );
};

export default CartListWrapper;
