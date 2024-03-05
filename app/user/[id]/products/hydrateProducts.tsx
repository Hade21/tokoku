import { dehydrate } from "@tanstack/react-query";
import getQueryClient from "@/app/lib/getQueryClient";
import Hydrate from "@/app/lib/hydrate";

import productServices from "@/services/productApi";

import Products from "./products";

export default async function HydrateProducts() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["product"], () =>
    productServices.getProducts({ sort: "createdAt", page: 1 })
  );
  const dehydrateState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydrateState}>
      <Products page={1} sort="createdAt" />
    </Hydrate>
  );
}
