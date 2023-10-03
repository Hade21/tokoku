import { Footer, Header } from "@/app/components";
import HydrateProduct from "./hydrateProduct";
import ProductDetail from "./product";

const DetailProduct = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <HydrateProduct id={id} />
      <Footer />
    </div>
  );
};

export default DetailProduct;
