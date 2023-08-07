"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface ImagesProductProps {
  img: [{ url: string }];
}

const ImagesProduct: React.FC<ImagesProductProps> = ({ img }) => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(0);

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

  return (
    <div ref={targetRef}>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {img?.map((image, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="relative flex w-full justify-center rounded-t-md bg-white">
                <Image
                  src={image.url}
                  width={width}
                  height={0}
                  alt="Product Image"
                  placeholder="blur"
                  blurDataURL="https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png"
                  style={{
                    objectFit: "contain",
                    width: "auto",
                    height: `${(width / 4) * 3}px`,
                  }}
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImagesProduct;
