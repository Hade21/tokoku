import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar: React.FC = () => {
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
      />
      <label htmlFor="input" className="flex cursor-pointer items-center gap-1">
        <FaSearch />
        Search
      </label>
    </div>
  );
};

export default SearchBar;
