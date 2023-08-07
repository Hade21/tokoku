"use client";
import React from "react";

interface CounterProps {
  stock: number;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter: React.FC<CounterProps> = ({ stock, count, setCount }) => {
  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h3 className="font-bold">Count</h3>
      <div className="flex items-center justify-center text-sm">
        <button
          className="h-8 w-8 rounded-sm border-2 border-bice-blue bg-white transition-colors duration-200 hover:bg-bice-blue hover:text-white focus:outline-none"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="flex h-8 w-16 items-center justify-center bg-white text-gray-600">
          {count}
        </span>
        <button
          className="h-8 w-8 rounded-sm border-2 border-bice-blue bg-white transition-colors duration-200 hover:bg-bice-blue hover:text-white focus:outline-none"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
