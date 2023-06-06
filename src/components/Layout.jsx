import { useEffect, useState } from "react";
import data from "@/data/data.json";
import CodeBlock from "./CodeBlock";
import Search from "./Search";
import Badge from "./Badge";
import Categories from "./Categories";
import { useHighlighter } from "@/hooks/useHighlighter";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ITEMS_PER_PAGE = 15;

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = term => {
    setSearchTerm(term);
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  };

  const categories = [...new Set(data.flatMap(item => item.category))];

  const handleCategoryClick = category => {
    if (filteredCategory === category) {
      setFilteredCategory("");
      setCurrentPage(1);
      setFilteredData([]);
      return;
    }

    const filtered = data.filter(item => Array.isArray(item.category) && item.category.includes(category));
    setFilteredData(filtered.sort((a, b) => a.term.localeCompare(b.term)));
    setFilteredCategory(category);
    setCurrentPage(1);
  };

  useEffect(() => {
    const filteredSearchData = data.filter(item => item.term.toLowerCase().includes(searchTerm.toLowerCase().trim()));
    setFilteredData(filteredSearchData.sort((a, b) => a.term.localeCompare(b.term)));
    setFilteredCategory("");
    setCurrentPage(1);
  }, [searchTerm]);

  useEffect(() => {
    if (!filteredCategory) {
      setFilteredData(data.sort((a, b) => a.term.localeCompare(b.term)));
    }
  }, [filteredCategory]);

  const handlePageChange = page => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredData
    .slice(indexOfFirstItem, indexOfLastItem)
    .sort((a, b) => a.term.localeCompare(b.term));

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  useHighlighter(currentItems);

  return (
    <section className="m-auto flex h-full flex-col items-center px-6 md:w-4/5">
      <Search onSearch={handleSearch} />
      <div className="mb-1 flex w-full gap-5 overflow-auto py-5 ">
        {categories.map(category => {
          const count = data.filter(item => Array.isArray(item.category) && item.category.includes(category)).length;
          return (
            <div
              className={`${filteredCategory === category ? "animate-bounce" : ""}`}
              key={category}
              onClick={() => handleCategoryClick(category)}
            >
              <Categories variant={category}>
                {category} ({count}){filteredCategory === category && <XMarkIcon className="ml-0.5 h-4 w-4" />}
              </Categories>
            </div>
          );
        })}
      </div>
      <div className="h-full w-full overflow-auto">
        <div className="flex flex-col gap-y-15">
          {currentItems.map(item => (
            <div key={item.id}>
              <h2 className="text-xl font-semibold">{item.term} nedir?</h2>
              <p className="mt-2.5 text-sm">{item.desc}</p>
              <div className="mt-5 flex items-center gap-2.5">
                {Array.isArray(item.category) &&
                  item.category.map((category, index) => (
                    <Badge variant={category} key={index}>
                      {category}
                    </Badge>
                  ))}
              </div>
              {item.example?.codeBlock && <CodeBlock lang={item.example.lang} code={item.example.codeBlock} />}
            </div>
          ))}
        </div>
        <div className="mb-5 mt-10 flex overflow-auto md:justify-center">
          {totalPages > 1 &&
            Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`mx-1.5 h-8 w-8 shrink-0 rounded-md font-medium ${
                  currentPage === page ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Layout;
