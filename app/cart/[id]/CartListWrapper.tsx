"use client";
import React from "react";
import { CartProduct, ErrorRelogin } from "@/app/components";
import { useGetCart } from "@/hooks/queryUserHooks";

const CartListWrapper = () => {
  const { data } = useGetCart();
  console.log(
    "🚀 ~ file: CartListWrapper.tsx:8 ~ CartListWrapper ~ data:",
    data
  );

  if (!data) {
    return <ErrorRelogin />;
  }

  if (data?.data.products.lenght === 0)
    return (
      <div className="flex flex-col gap-4 bg-slate-300 p-6">Cart Empty</div>
    );

  return (
    <div className="flex flex-col gap-4 bg-slate-300 p-6">
      {data?.data.products.map((product: any) => {
        return (
          <CartProduct
            key={product._id}
            _id={product._id}
            title={product.product.title}
            color={product.color}
            img={product.product.images}
            price={product.price}
            quantity={product.count}
            variant={product.variant}
          />
        );
      })}
    </div>
  );
};

export default CartListWrapper;
