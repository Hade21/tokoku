"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ImagesProductProps {
  img: [{ url: string }];
  _id: string;
}

const ImagesProduct: React.FC<ImagesProductProps> = ({ img, _id }) => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const router = useRouter();
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
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {img?.map((image, key) => {
          return (
            <SwiperSlide key={key}>
              <div
                className="relative flex w-full cursor-pointer justify-center rounded-t-md bg-white"
                onClick={() => router.push(`/product/${_id}`)}
              >
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
