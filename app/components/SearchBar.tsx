"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { setSearch } from "../store/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { SearchQuery } from "@/types";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const searchVal = useSelector((state: SearchQuery) => state.value);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div
      className="flex min-w-[40vw] items-center justify-between gap-2 border-2 border-oxford-blue bg-white px-3 py-2 text-xs
    text-penn-blue dark:bg-oxford-blue dark:text-white xl:text-lg 2xl:text-2xl"
    >
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Type here to search"
        className="w-full bg-transparent outline-none"
        value={searchVal}
        onChange={handleSearch}
      />
      <label htmlFor="input" className="flex cursor-pointer items-center gap-1">
        <FaSearch />
        Search
      </label>
    </div>
  );
};

export default SearchBar;
