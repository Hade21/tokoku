"use client";
import CardProduct from "./CardProduct";
import { Product } from "@/types";
import LoadingAnimation from "./LoadingAnimation";
import { useGetProducts } from "@/hooks/queryProductHooks";

interface ProductsProps {
  title: "New Arrivals" | "Top Selling" | "Popular";
}

const Products: React.FC<ProductsProps> = ({ title = "New Arrivals" }) => {
  if (!title) return <></>;

  const apiParams = {
    "New Arrivals": { sort: "createdAt", page: 1 },
    Popular: { sort: "totalRating", page: 1 },
    "Top Selling": { sort: "sold", page: 1 },
  }[title] || { sort: "createdAt" };

  const { data, isLoading, error } = useGetProducts(apiParams);

  if (isLoading) return <LoadingAnimation size={60} />;

  if (error instanceof Error) return <h1>{error.message}</h1>;

  return (
    <section className="my-8 px-4">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="list-product mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data && data?.data.items.length > 0 ? (
          data.data.items.map((item: Product, key: number) => (
            <CardProduct
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
          ))
        ) : (
          <p className="col-span-full row-span-full text-center">
            No Product available
          </p>
        )}
      </div>
    </section>
  );
};

export default Products;
