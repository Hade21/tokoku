import React from "react";
import CardProduct from "./CardProduct";

const Products: React.FC = () => {
  return (
    <section className="px-4">
      <h1 className="text-lg font-bold">Products Sale</h1>
      <div className="list-product mt-2 grid grid-cols-4 gap-2">
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
