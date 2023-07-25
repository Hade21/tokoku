import React from "react";
import Button from "./Button";
import ImagesProduct from "./ImagesProduct";

interface CardProductProps {
  img: [{ url: string }];
  name: string;
  price: number;
  id: string;
}

const CardProduct: React.FC<CardProductProps> = (props) => {
  const { img, name, price, id } = props;

  return (
    <div className="relative rounded-md bg-slate-100 shadow-lg dark:bg-penn-blue">
      <ImagesProduct img={img} />
      <div className="group w-full p-4">
        <div>
          <h1 className="mb-4 text-lg">{name}</h1>
          <p className="text-right text-sm font-bold text-red-500">
            Rp.{price}
          </p>
        </div>
        <div className="invisible absolute left-0 top-0 flex h-full w-full items-center justify-center bg-slate-900 bg-opacity-30 opacity-0 backdrop-blur-sm transition-all duration-200 group-hover:visible group-hover:opacity-100">
          <Button type="button" variant="primary">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
