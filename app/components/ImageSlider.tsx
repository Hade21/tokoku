import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageSlider = ({ img }: { img: { preview: string }[] }) => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState<number>(0);

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
    <div ref={targetRef} className="w-full">
      <Swiper slidesPerView={4.2} spaceBetween={10}>
        {img.map((image, key) => {
          return (
            <SwiperSlide key={key}>
              <Image
                src={image.preview}
                width={0}
                height={0}
                alt="preview"
                placeholder="blur"
                blurDataURL="https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png"
                style={{
                  objectFit: "contain",
                  width: `${width / 4}px`,
                  height: `${(width / 16) * 3}px`,
                }}
                loading="lazy"
                className="rounded-md border-2 border-slate-300"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
