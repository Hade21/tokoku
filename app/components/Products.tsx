import React from "react";
import CardProduct from "./CardProduct";
import { getAllProduct } from "../api/productApi";
import { DataProduct, Product } from "@/types";

interface ProductsProps {
  title: "New Arrivals" | "Top Selling" | "Popular";
}

const Products: React.FC<ProductsProps> = async ({ title }) => {
  let page = 1;
  let apiParams = {};
  if (!title) return <></>;
  if (title === "New Arrivals") apiParams = { sort: "createdAt", page };
  if (title === "Top Selling") apiParams = { sort: "sold", page: page };
  if (title === "Popular") apiParams = { sort: "totalRating", page };
  const data: DataProduct = await getAllProduct(apiParams);

  return (
    <section className="my-8 px-4">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="list-product mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {data.items.length > 0 ? (
          data.items.map((item: Product, key: number) => {
            return (
              <CardProduct
                key={key}
                id={item._id}
                img={item.images}
                name={item.title}
                price={item.price}
                variants={item.variant}
                colors={item.color}
                stocks={item.stocks}
              />
            );
          })
        ) : (
          <p className="col-span-full row-span-full text-center">No Product</p>
        )}
      </div>
    </section>
  );
};

export default Products;
