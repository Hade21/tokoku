import React from "react";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

const HeroBanner: React.FC = () => {
  return (
    <div className="mx-auto my-5 flex w-[95vw] flex-col rounded-lg bg-non-photo-blue p-5 dark:bg-penn-blue">
      <p className="text-base">July Flash Sale</p>
      <h3 className="text-4xl font-extrabold">Hayuri Couple</h3>
      <Image
        src="https://fashionvhal.myshopify.com/products/baju-muslim-couple-gamis-ibu-dan-anak-jersey-mint-peach"
        alt="hero-image"
        className="max-h-24 self-end overflow-visible"
        width={300}
        height={300}
      />
      <div className="flex justify-between">
        <Link href="">
          <Button type="button" variant="primary">
            Buy now
          </Button>
        </Link>
        <div className="text-right text-sm font-semibold">
          <p className="text-slate-950 dark:text-slate-400">Description</p>
          <p className="text-slate-700 dark:text-slate-200">
            New arrival dress set couple with muslims koko
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
