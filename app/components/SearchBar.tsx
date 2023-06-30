import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center gap-2 rounded-xl border-2 border-white px-3 py-2 text-xs xl:text-lg 2xl:text-2xl">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        className="bg-transparent text-white outline-none"
      />
      <label htmlFor="input" className="cursor-pointer">
        <FaSearch />
      </label>
    </div>
  );
};

export default SearchBar;
