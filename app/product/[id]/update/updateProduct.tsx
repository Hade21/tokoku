"use client";
import React from "react";

import { BackButton, Footer, Header } from "@/app/components";
import Dropzone from "@/app/components/Dropzone";
import LoadingAnimation from "@/app/components/LoadingAnimation";
import FormProduct from "../../FormProduct";

import { useParams } from "next/navigation";
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
  const params = useParams();
  const { data, isLoading, error, status } = useGetDetailProduct(params.id);

  React.useEffect(() => {
    if (data) {
      dispatch(setTitle(data.item.title));
      dispatch(setDescription(data.item.description));
      dispatch(setPrice(data.item.price));
      dispatch(setStocks(data.item.stocks));
      dispatch(setColor(data.item.color));
      dispatch(setVariant(data.item.variant));
      dispatch(setBrand(data.item.brand));
      dispatch(setCategory(data.item.category));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <LoadingAnimation
          size={30}
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
          <div className="img-tittle flex flex-col justify-between gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-1">
            <Dropzone />
            <FormProduct type="update" id={params.id} />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Product;
