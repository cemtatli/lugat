import { useEffect, useState } from "react";
import data from "@/data/data.json";
import CodeBlock from "./CodeBlock";
import Search from "./Search";
import Badge from "./Badge";
import Categories from "./Categories";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useHighlighter } from "@/hooks/useHighlighter";

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("");

  const handleSearch = term => {
    setSearchTerm(term);
  };

  const categories = [...new Set(data.flatMap(item => item.category))];

  const handleCategoryClick = category => {
    if (filteredCategory === category) {
      setFilteredData([]);
      setFilteredCategory("");
      return;
    }

    const filtered = data.filter(item => Array.isArray(item.category) && item.category.includes(category));
    setFilteredData(filtered);
    setFilteredCategory(category);
  };

  useEffect(() => {
    const filteredSearchData = data.filter(item => item.term.toLowerCase().includes(searchTerm.toLowerCase().trim()));
    setFilteredData(filteredSearchData);
    setFilteredCategory("");
  }, [searchTerm]);

  const renderedData = filteredData.length ? filteredData : data;

  // useHighlighter hook'unu kullan

  useHighlighter(renderedData);

  return (
    <section className="m-auto flex h-full w-10/12 flex-col items-center">
      <Search onSearch={handleSearch} />
      <div className="mb-1 flex w-full gap-5 overflow-auto py-5 md:justify-center">
        {categories.map(category => {
          const count = data.filter(item => Array.isArray(item.category) && item.category.includes(category)).length;
          return (
            <div
              className={`${filteredCategory === category ? "animate-bounce" : ""}`}
              key={category}
              onClick={() => handleCategoryClick(category)}
            >
              <Categories variant={category}>
                {category} ({count}){filteredCategory === category && <XMarkIcon className="ml-1 h-4 w-4" />}
              </Categories>
            </div>
          );
        })}
      </div>
      <div className="h-full w-full overflow-auto">
        <div className="flex flex-col gap-y-15">
          {renderedData
            .sort((a, b) => a.term.localeCompare(b.term))
            .map(item => (
              <div key={item.id}>
                <h2 className="text-xl font-semibold">{item.term} nedir ?</h2>
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
      </div>
    </section>
  );
};

export default Layout;
