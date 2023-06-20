import React from "react";
import Link from "next/link";
import Button from "./Button";

const HeroBanner: React.FC = () => {
  return (
    <div className="mx-auto my-5 flex w-[95vw] flex-col rounded-lg bg-non-photo-blue bg-opacity-40 p-5">
      <p className="text-base">SmallText</p>
      <h3 className="text-4xl font-extrabold">MID TEXT</h3>
      <img
        src=""
        alt="hero-image"
        className="max-h-24 self-end overflow-visible"
      />
      <div className="flex justify-between">
        <Link href="">
          <Button type="button" variant="primary">
            Button text
          </Button>
        </Link>
        <div className="text-sm">
          <p className="text-slate-950">Description</p>
          <p className="text-slate-700">Description</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
