import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "../atom";

const HeroBanner: React.FC = () => {
  return (
    <div className="relative mx-auto my-5 flex h-full min-h-[500px] w-[95vw] flex-col justify-around rounded-lg bg-white p-5 dark:bg-penn-blue md:grid md:grid-cols-2 md:grid-rows-2">
      <Image
        src="https://fashionvhal.myshopify.com/cdn/shop/products/01-foto-couple-gamis-ibu-dan-anak-mint-peach_1024x1024@2x.jpg?v=1520617994"
        alt="hero-image"
        className="absolute right-1/2 top-0 translate-x-1/2"
        width={500}
        height={500}
      />
      <div className="z-10 col-span-2 flex flex-col justify-end gap-2">
        <p className="text-lg">July Flash Sale</p>
        <h3 className="text-6xl font-extrabold drop-shadow-sm">
          Hayuri Couple
        </h3>
      </div>
      <Link href="" className="z-10 flex flex-col items-start justify-center">
        <Button type="button" variant="primary">
          Buy now
        </Button>
      </Link>
      <div className="z-10 text-right text-base font-semibold">
        <p className="text-slate-950 dark:text-slate-400">Description</p>
        <p className="text-slate-700 dark:text-slate-200">
          New arrival dress set couple with muslims koko
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
