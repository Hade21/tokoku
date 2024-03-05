"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { AxiosError } from "axios";

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

import { BackButton, Footer, Header, LoadingAnimation } from "@/app/components";
import FormProduct from "../FormProduct";

const Product = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const id = searchParams.get("id") ?? "";
  const { data, isLoading, error } = useGetDetailProduct(id);

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

  if (error) {
    if (error instanceof AxiosError)
      return (
        <div className="flex h-screen w-screen items-center justify-center text-xl font-semibold">
          {error.message}
        </div>
      );
  }
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
            <FormProduct type="update" id={id} />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Product;
