"use client";
import CardProduct from "./CardProduct";
import { Product } from "@/types";
import LoadingAnimation from "./LoadingAnimation";
import { useGetProducts } from "@/hooks/queryProductHooks";

interface ProductsProps {
  sort: string;
  page: number;
}

const Products: React.FC<ProductsProps> = (params: ProductsProps) => {
  const { sort, page } = params;
  const title =
    {
      createdAt: "New Arrivals",
      totalRating: "Popular",
      sold: "Top Selling",
    }[sort] || "New Arrivals";
  const { data, isLoading, error } = useGetProducts({ sort, page });

  if (isLoading) return <LoadingAnimation size={60} />;

  if (error instanceof Error) return <h1>{error.message}</h1>;

  return (
    <section className="my-8 px-4">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="list-product mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data?.items.map((item: Product, key: number) => (
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
        ))}
      </div>
    </section>
  );
};

export default Products;
