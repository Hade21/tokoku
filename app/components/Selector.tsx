import React from "react";
import { SelectorProps } from "@/types";
import { RadioGroup } from "@headlessui/react";

const Selector: React.FC<SelectorProps> = (props) => {
  const { title, options, value, setValue } = props;

  return (
    <div>
      <h3 className="text-xl font-bold text-oxford-blue">{title}</h3>
      <RadioGroup value={value} onChange={setValue}>
        <RadioGroup.Label className="sr-only">Variant</RadioGroup.Label>
        <div className="md: flex w-full gap-2 px-5 lg:my-5">
          {options?.map((option, key) => {
            return (
              <RadioGroup.Option
                key={key}
                value={option}
                className={({ active, checked }) =>
                  `${active ? "ring-2 ring-royal-blue" : ""} ${
                    checked ? "bg-bice-blue text-white" : "bg-white"
                  } text-semibold w-full max-w-xs cursor-pointer rounded-sm px-4 py-2 text-center shadow-md transition-colors duration-200`
                }
              >
                {option}
              </RadioGroup.Option>
            );
          })}
        </div>
      </RadioGroup>
    </div>
  );
};

export default Selector;
