import React from "react";
import CardProduct from "./CardProduct";
import SearchBar from "./SearchBar";

const NewProducts: React.FC = () => {
  return (
    <section className="my-4 px-4">
      <h1 className="text-xl font-bold">New Arrival</h1>
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

export default NewProducts;
