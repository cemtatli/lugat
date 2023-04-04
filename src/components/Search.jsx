import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="mb-8 flex w-full">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none dark:bg-transparent"
      />
      <button
        onClick={handleSearch}
        className="ml-2 flex items-center justify-end rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
      >
        <MagnifyingGlassIcon className="h-5 w-5 " />
      </button>
    </div>
  );
};

export default Search;
