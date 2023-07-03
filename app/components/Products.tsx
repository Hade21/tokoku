import React from "react";
import CardProduct from "./CardProduct";

interface ProductsProps {
  title: string;
}
const Products: React.FC<ProductsProps> = ({ title }) => {
  return (
    <section className="my-8 px-4">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="list-product mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-5">
        <CardProduct key={0} id="0" img="" name="" price={1} />
        <CardProduct key={0} id="0" img="" name="" price={1} />
        <CardProduct key={0} id="0" img="" name="" price={1} />
        <CardProduct key={0} id="0" img="" name="" price={1} />
        <CardProduct key={0} id="0" img="" name="" price={1} />
        <CardProduct key={0} id="0" img="" name="" price={1} />
        <CardProduct key={0} id="0" img="" name="" price={1} />
        <CardProduct key={0} id="0" img="" name="" price={1} />
        <CardProduct key={0} id="0" img="" name="" price={1} />
        <CardProduct key={0} id="0" img="" name="" price={1} />
      </div>
    </section>
  );
};

export default Products;
