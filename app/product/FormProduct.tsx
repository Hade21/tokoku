"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  setBrand,
  setCategory,
  setColor,
  setDescription,
  setPrice,
  setStocks,
  setTitle,
  setVariant,
} from "@/store/newProductSlice";
import useDebounceQuery from "@/utils/debounce";
import React from "react";

const FormProduct = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.newProduct.title);
  const desc = useAppSelector((state) => state.newProduct.description);
  const price = useAppSelector((state) => state.newProduct.price);
  const stocks = useAppSelector((state) => state.newProduct.stocks);
  const colors = useAppSelector((state) => state.newProduct.color);
  const variant = useAppSelector((state) => state.newProduct.variant);
  const category = useAppSelector((state) => state.newProduct.category);
  const brand = useAppSelector((state) => state.newProduct.brand);
  console.log("🚀 ~ FormProduct ~ variant:", variant);

  return (
    <form className="flex flex-col gap-3 rounded-md p-4 shadow-lg">
      <h3 className="mt-2 text-lg font-bold">Basic Information</h3>
      <div className="basic-info rounded-md border border-non-photo-blue p-4">
        <div className="inputs">
          <label htmlFor="name" className="relative block w-full p-2">
            <input
              type="number"
              name="name"
              id="name"
              placeholder="Name"
              className="peer w-full rounded-md border border-non-photo-blue p-2 text-base transition-all duration-200 [appearance:textfield] placeholder:text-white focus:border-2 focus:border-royal-blue focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={name}
              onChange={(e) => dispatch(setTitle(e.target.value))}
            />
            <p className="absolute left-5 top-0 bg-white px-2 text-sm font-normal text-slate-500 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:p-0 peer-placeholder-shown:text-base ">
              Product Name
            </p>
          </label>
          <label htmlFor="desc" className="relative block w-full p-2">
            <textarea
              name="desc"
              id="desc"
              placeholder="Price"
              rows={5}
              className="peer w-full rounded-md border border-non-photo-blue p-2 text-base transition-all duration-200 [appearance:textfield] placeholder:text-white focus:border-2 focus:border-royal-blue focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              onChange={(e) => dispatch(setDescription(e.target.value))}
              value={desc}
            ></textarea>
            <p className="absolute left-5 top-0 bg-white px-2 text-sm font-normal text-slate-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:p-0 peer-placeholder-shown:text-base ">
              Description
            </p>
          </label>
        </div>
      </div>
      <h3 className="mt-2 text-lg font-bold">Price</h3>
      <div className="price-stocks rounded-md border border-non-photo-blue p-4">
        <label htmlFor="price" className="relative block w-full p-2">
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            className="peer w-full rounded-md border border-non-photo-blue p-2 text-base transition-all duration-200 [appearance:textfield] placeholder:text-white focus:border-2 focus:border-royal-blue focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            value={price}
            onChange={(e) => dispatch(setPrice(Number(e.target.value)))}
          />
          <p className="absolute left-5 top-0 bg-white px-2 text-sm font-normal text-slate-500 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:p-0 peer-placeholder-shown:text-base ">
            Price (Rp)
          </p>
        </label>
        <label htmlFor="stocks" className="relative block w-full p-2">
          <input
            type="number"
            name="stocks"
            id="stocks"
            placeholder="Stocks"
            className="peer w-full rounded-md border border-non-photo-blue p-2 text-base transition-all duration-200 [appearance:textfield] placeholder:text-white focus:border-2 focus:border-royal-blue focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            value={stocks}
            onChange={(e) => dispatch(setStocks(Number(e.target.value)))}
          />
          <p className="absolute left-5 top-0 bg-white px-2 text-sm font-normal text-slate-500 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:p-0 peer-placeholder-shown:text-base ">
            Stocks
          </p>
        </label>
      </div>
      <h3 className="mt-2 text-lg font-bold">Detail Product</h3>
      <div className="detail-product rounded-md border border-non-photo-blue p-4">
        <label htmlFor="category" className="relative block w-full p-2">
          <select
            name="category"
            id="category"
            className="peer w-full rounded-md border border-non-photo-blue bg-transparent p-3 text-base transition-all duration-200 [appearance:textfield] placeholder:text-white focus:border-2 focus:border-royal-blue focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            value={category}
            onChange={(e) => dispatch(setCategory(e.target.value))}
          >
            <option value="" disabled hidden></option>
            <option value="fashion">Fashion</option>
          </select>
          <p className="absolute left-5 top-0 bg-white px-2 text-sm font-normal text-slate-500 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:p-0 peer-placeholder-shown:text-base ">
            Category
          </p>
        </label>
        <label htmlFor="brand" className="relative block w-full p-2">
          <input
            type="text"
            name="brand"
            id="brand"
            placeholder="Brand"
            className="peer w-full rounded-md border border-non-photo-blue bg-transparent p-3 text-base transition-all duration-200 [appearance:textfield] placeholder:text-white focus:border-2 focus:border-royal-blue focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            value={brand}
            onChange={(e) => dispatch(setBrand(e.target.value))}
          />
          <p className="absolute left-5 top-0 bg-white px-2 text-sm font-normal text-slate-500 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:p-0 peer-placeholder-shown:text-base ">
            Brand
          </p>
        </label>
        <label htmlFor="variant" className="relative block w-full p-2">
          <input
            type="text"
            name="variant"
            id="variant"
            placeholder='Variants, e.g. "s, m, l, xl"'
            className="peer w-full rounded-md border border-non-photo-blue bg-transparent p-3 text-base transition-all duration-200 [appearance:textfield] placeholder:text-slate-500 focus:border-2 focus:border-royal-blue focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            value={variant.join(",")}
            onChange={(e) => dispatch(setVariant(e.target.value))}
          />
          <p className="absolute left-5 top-0 bg-white px-2 text-sm font-normal text-slate-500 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:p-0 peer-placeholder-shown:text-base ">
            Variants
          </p>
        </label>
        <label htmlFor="colors" className="relative block w-full p-2">
          <input
            type="text"
            name="colors"
            id="colors"
            placeholder='Colors, e.g. "red, blue, green"'
            className="peer w-full rounded-md border border-non-photo-blue bg-transparent p-3 text-base transition-all duration-200 [appearance:textfield] placeholder:text-slate-500 focus:border-2 focus:border-royal-blue focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            value={colors}
            onChange={(e) => dispatch(setColor(e.target.value))}
          />
          <p className="absolute left-5 top-0 bg-white px-2 text-sm font-normal text-slate-500 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:p-0 peer-placeholder-shown:text-base ">
            Colors
          </p>
        </label>
      </div>
    </form>
  );
};

export default FormProduct;
