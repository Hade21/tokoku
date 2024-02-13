"use client";
import React from "react";

import { BackButton, Footer, Header } from "@/app/components";
import LoadingAnimation from "@/app/components/LoadingAnimation";
import FormProduct from "../FormProduct";

import { useSearchParams } from "next/navigation";
import { useGetDetailProduct } from "@/hooks/queryProductHooks";
import { useAppDispatch } from "@/hooks/reduxHooks";
import {
  setBrand,
  setCategory,
  setDescription,
  setPrice,
  setStocks,
  setTitle,
} from "@/store/newProductSlice";
import { setColor, setVariant } from "@/store/cartOptionSlice";

const Product = () => {
  const dispatch = useAppDispatch();
  const params = { id: "6412b950e31caca1b7a5f37d" };
  const searchParams = useSearchParams();
  console.log(searchParams.get("id"));
  const { data, isLoading, error, status } = useGetDetailProduct(params.id);

  React.useEffect(() => {
    if (data) {
      dispatch(setTitle(data.item.title));
      dispatch(setDescription(data.item.description));
      dispatch(setPrice(data.item.price));
      dispatch(setStocks(data.item.stocks));
      dispatch(setColor(data.item.color.join(",")));
      dispatch(setVariant(data.item.variant.join(",")));
      dispatch(setBrand(data.item.brand));
      dispatch(setCategory(data.item.category));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <LoadingAnimation
          size={40}
          color="#0E6BA8"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <h3 className="text-center text-lg font-semibold text-oxford-blue">
          Getting data ....
        </h3>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="mx-auto my-4 flex h-full w-10/12 flex-col justify-between gap-4">
        <div className="head flex items-center justify-between">
          <BackButton />
        </div>
        <main>
          <div className="product">
            <FormProduct type="update" id={params.id} />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Product;
