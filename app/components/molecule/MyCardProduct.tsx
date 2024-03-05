import React from "react";
import { useRouter } from "next/navigation";

import { CardProductProps } from "@/types";

import { Button, ImagesProduct } from "../atom";
import { AiFillStar } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const MyCardProduct: React.FC<CardProductProps> = (props) => {
  const { img, name, price, id, rating } = props;
  const router = useRouter();

  return (
    <div className="relative rounded-md bg-slate-100 shadow-lg dark:bg-penn-blue">
      <ImagesProduct img={img} _id={id} />
      <div className="absolute right-4 top-4 z-10">
        <Button
          type="button"
          variant="primary"
          onClick={() => router.replace(`/product/update?id=${id}`)}
        >
          <span className="flex items-center justify-center gap-4">
            <BiEdit /> Edit
          </span>
        </Button>
      </div>
      <div className="group w-full p-4">
        <div>
          <h1 className="mb-4 text-lg">{name}</h1>
          <div className="flex justify-between">
            <p className="flex items-center gap-1">
              <AiFillStar className="text-xl text-yellow-500" />{" "}
              <span>{rating}</span>
            </p>
            <p className="text-base font-bold text-red-500">Rp.{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCardProduct;
