"use client";
import React from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { NoImage } from "@/public";

interface ImagesProductProps {
  img: [{ url: string }];
}

const ImagesProduct: React.FC<ImagesProductProps> = ({ img }) => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  let newIndex = index;

  const handleNext = () => {
    const isLastIndex = index === img.length - 1;
    if (!isLastIndex) return setIndex(index + 1);
    return setIndex(0);
  };

  const handlePrev = () => {
    const isFirstIndex = index === 0;
    if (!isFirstIndex) return setIndex(index - 1);
    return setIndex(img.length - 1);
  };

  const testDimension = () => {
    if (targetRef.current) {
      setWidth(targetRef.current.offsetWidth);
    }
  };

  React.useLayoutEffect(() => {
    testDimension();
    window.addEventListener("resize", testDimension);
    return () => {
      window.removeEventListener("resize", testDimension);
    };
  }, []);

  console.log(index);

  return (
    <div
      className={`relative m-auto w-full max-h-[${width}px] group overflow-clip rounded-md bg-white`}
      ref={targetRef}
    >
      <Image
        width={width}
        height={0}
        style={{
          width: "auto",
          height: `${(width / 4) * 3}px`,
          objectFit: "contain",
        }}
        src={img ? img[index].url : NoImage}
        alt="images-product"
        loading="lazy"
        className="mx-auto transform rounded-md transition-all duration-300 ease-in-out"
      />
      <div
        className="absolute left-2 top-1/2 hidden cursor-pointer rounded-full bg-opacity-40 p-1 shadow-lg backdrop-blur-sm transition-transform duration-200 hover:scale-110 hover:bg-white active:translate-y-1 group-hover:block"
        onClick={handlePrev}
      >
        <AiOutlineLeft />
      </div>
      <div
        className="absolute right-2 top-1/2 hidden cursor-pointer rounded-full bg-opacity-40 p-1 shadow-lg backdrop-blur-sm transition-transform duration-200 hover:scale-110 hover:bg-white active:translate-y-1 group-hover:block"
        onClick={handleNext}
      >
        <AiOutlineRight />
      </div>
    </div>
  );
};

export default ImagesProduct;
