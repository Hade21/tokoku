"use client";
import CartOptionItem from "@/app/components/CartOptionItem";
import ImagesProduct from "@/app/components/ImagesProduct";
import LoadingAnimation from "@/app/components/LoadingAnimation";
import { useGetDetailProduct } from "@/hooks/queryProductHooks";
import axios from "axios";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BackButton } from "@/app/components";

const ProductDetail = ({ id }: { id: string }) => {
  const { data, isLoading, error, isError } = useGetDetailProduct(id);
  const productData = data?.item;

  if (isError) {
    if (axios.isAxiosError(error))
      return <h1>{error.response?.data.message}</h1>;
  }
  if (isLoading)
    return (
      <div className="flex w-full items-center justify-center">
        <LoadingAnimation
          size={30}
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
    );

  return (
    <div className="mx-auto my-4 w-10/12">
      <section className="flex flex-col gap-2 md:grid md:grid-cols-2 md:grid-rows-1 md:gap-4">
        <div className="img">
          <BackButton className="mb-4" />
          <ImagesProduct img={productData.images} _id={productData._id} />
        </div>
        <div className="detail">
          <h1 className="mb-3 text-2xl font-semibold md:text-3xl">
            {productData.title}
          </h1>
          <p className="text-sm text-non-photo-blue md:text-base">
            Rp. {productData.price}
          </p>
          <p className="flex items-center gap-1 text-base md:text-lg">
            <AiFillStar className="text-lg text-yellow-500 md:text-xl" />{" "}
            <span>{productData.totalRating}</span>| {productData.ratings.length}{" "}
            Customer Reviews
          </p>
          <p className="mt-3 text-sm font-normal md:text-base">
            {productData.description}
          </p>
          <div className="option mt-8">
            <CartOptionItem
              _id={productData._id}
              colorOption={productData.color}
              stocks={productData.stocks}
              variantOption={productData.variant}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
