"use client";
import React, { useEffect } from "react";

import { useGetProducts } from "@/hooks/queryProductHooks";
import { useAppDispatch } from "@/hooks/reduxHooks";

import { Product } from "@/types";

import { BackButton, MyCardProduct } from "@/app/components";
import { LoadingAnimation } from "@/app/components";

interface ProductProps {
  sort: string;
  page: number;
}

/**
 * Function to render the Products component.
 *
 * @return {JSX.Element} The Products component
 */
const Products: React.FC<ProductProps> = ({ sort, page }) => {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useGetProducts({ sort, page });

  if (isLoading) return <LoadingAnimation size={60} />;

  if (error instanceof Error) return <h1>{error.message}</h1>;

  return (
    <section className="my-8 px-4">
      <div className="items-centers mb-8 flex justify-start">
        <BackButton />
        <h1 className="flex-grow text-center text-3xl font-bold dark:text-white">
          My Products
        </h1>
      </div>
      <div className="list-product mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data?.items.map((item: Product, key: number) => (
          <MyCardProduct
            key={key}
            id={item._id}
            img={item.images}
            name={item.title}
            price={item.price}
            variants={item.variant}
            colors={item.color}
            stocks={item.stocks}
            rating={item.totalRating}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
