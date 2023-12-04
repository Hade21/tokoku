import React from "react";

const CartProduct = () => {
  return (
    <section className="flex justify-between gap-4 rounded-md bg-white px-4 py-6">
      <div className="img-sect flex min-w-[25%] items-center">Image</div>
      <div className="desc-sect grow">
        <h3 className="text-xl font-semibold">Title</h3>
        <p className="text-base font-semibold text-red-500">Price</p>
      </div>
      <div className="detail-sect grow">
        <p className="text-sm font-normal text-gray-500">Variant</p>
        <p className="text-sm font-normal text-gray-500">Color</p>
        <p className="text-sm font-normal text-gray-500">Quantity</p>
      </div>
      <div className="action-sect flex justify-stretch text-white">
        <p className="flex-1 items-center bg-yellow-400">Change Option</p>
        <p className="flex-1 items-center bg-red-600">Delete</p>
      </div>
    </section>
  );
};

export default CartProduct;
