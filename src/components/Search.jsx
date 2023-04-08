import {useState, useEffect} from "react";
import {MagnifyingGlassIcon, XCircleIcon} from "@heroicons/react/24/outline";

const Search = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (searchTerm === "") {
      onSearch("");
    }
  }, [searchTerm, onSearch]);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm);
      if (!searchHistory.includes(searchTerm)) {
        setSearchHistory((prevState) => [searchTerm, ...prevState]);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

  const handleClearHistory = (event) => {
    event.stopPropagation();
    setSearchTerm("");
    setSearchHistory([]);
    onSearch("");
  };

  const handleHistoryClick = (historyItem) => {
    setSearchTerm(historyItem);
    onSearch(historyItem);
    setIsFocused(false);
  };

  return (
    <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 px-8">
      <div className="relative flex w-full">
        <input
          className="h-12 w-full border px-10 text-sm text-gray-700 outline-none focus:border-b-4 focus:border-blue-200"
          type="text"
          placeholder="Ne aramıştınız?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          id="search"
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
          }}
        />
        {searchTerm.length > 0 && isFocused && (
          <button
            className="absolute bottom-0 right-2 top-0 flex h-12 w-12 items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={handleClear}>
            <XCircleIcon className="h-5 w-5" />
          </button>
        )}
        <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center text-gray-500">
          <MagnifyingGlassIcon className="h-5 w-5 text-black" />
        </div>
        {searchHistory.length > 0 && isFocused && (
          <div className="absolute top-full z-10 w-full border border-gray-200 bg-white shadow-md">
            <ul className="divide-y divide-gray-200">
              {searchHistory.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer px-4 py-3 transition-all hover:bg-gray-50 dark:text-gray-950"
                  onClick={() => handleHistoryClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
            <button
              className="block w-full bg-gray-100 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-900"
              onClick={handleClearHistory}>
              Arama Geçmişini Temizle
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
