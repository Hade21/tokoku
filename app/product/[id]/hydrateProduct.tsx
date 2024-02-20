import { dehydrate } from "@tanstack/react-query";
import getQueryClient from "@/app/lib/getQueryClient";
import Hydrate from "@/app/lib/hydrate";
import productServices from "@/services/productApi";

import ProductDetail from "./product";

export default async function HydrateProduct({ id }: { id: string }) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["detailProduct"], () =>
    productServices.getDetailProduct(id)
  );
  const dehydrateState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydrateState}>
      <ProductDetail id={id} />
    </Hydrate>
  );
}
