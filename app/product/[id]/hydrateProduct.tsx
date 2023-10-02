import { dehydrate } from "@tanstack/react-query";
import getQueryClient from "@/app/getQueryClient";
import productServices from "@/services/productApi";
import ProductDetail from "./product";
import Hydrate from "@/app/hydrate";

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
