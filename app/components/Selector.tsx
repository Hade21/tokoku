import React from "react";
import { SelectorProps } from "@/types";
import { RadioGroup } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Selector: React.FC<SelectorProps> = (props) => {
  const { title, options, value, setValue } = props;

  return (
    <div>
      <RadioGroup value={value} onChange={setValue}>
        <RadioGroup.Label className="font-bold text-oxford-blue">
          {title}
        </RadioGroup.Label>
        <Swiper slidesPerView={3.8} spaceBetween={5}>
          <ul>
            {options?.map((option, key) => {
              return (
                <SwiperSlide key={key}>
                  <RadioGroup.Option
                    value={option}
                    className={({ active, checked }) =>
                      `${active ? "ring-2 ring-royal-blue" : ""} ${
                        checked ? "bg-bice-blue text-white" : "bg-white"
                      } text-semibold m-1 w-full cursor-pointer rounded-md border border-non-photo-blue px-3 py-2 text-center text-sm transition-colors duration-200 xl:p-2`
                    }
                  >
                    {option}
                  </RadioGroup.Option>
                </SwiperSlide>
              );
            })}
          </ul>
        </Swiper>
      </RadioGroup>
    </div>
  );
};

export default Selector;
