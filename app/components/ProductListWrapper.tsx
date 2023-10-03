import { dehydrate } from "@tanstack/react-query";
import getQueryClient from "../lib/getQueryClient";
import productService from "@/services/productApi";
import Hydrate from "../lib/hydrate";
import Products from "./ProductsList";

interface ProductTitle {
  title: "New Arrivals" | "Top Selling" | "Popular";
}

export default async function ProductListWrapper({ title }: ProductTitle) {
  const apiParams = {
    "New Arrivals": { sort: "createdAt", page: 1 },
    Popular: { sort: "totalRating", page: 1 },
    "Top Selling": { sort: "sold", page: 1 },
  }[title] || { sort: "createdAt", page: 1 };

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["product"], () =>
    productService.getProducts(apiParams)
  );
  const dehydrateState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydrateState}>
      <Products sort={apiParams["sort"]} page={apiParams["page"]} />
    </Hydrate>
  );
}
