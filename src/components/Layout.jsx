import { useMemo, useState, useEffect } from "react";
import data from "@/data/data.json";
import CodeBlock from "./CodeBlock";
import Search from "./Search";
import Badge from "./Badge";
import Categories from "./Categories";

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("");

  const handleSearch = term => {
    setSearchTerm(term);
  };

  const categories = useMemo(() => [...new Set(data.flatMap(item => item.category))]);

  const handleCategoryClick = category => {
    const filtered = data.filter(item => Array.isArray(item.category) && item.category.includes(category));
    setFilteredData(filtered);
    setFilteredCategory(category);
  };

  useEffect(() => {
    const filteredSearch = () => {
      const filteredSearchData = data.filter(item => item.term.toLowerCase().includes(searchTerm.toLowerCase().trim("")));
      setFilteredData(filteredSearchData);
      setFilteredCategory("");
    };
    filteredSearch();
  }, [searchTerm]);

  const renderedData = filteredData.length ? filteredData : data;

  return (
    <section className="m-auto flex h-full w-10/12 flex-col items-center">
      <Search onSearch={handleSearch} />
      <div className="mb-1 flex w-full gap-4 overflow-auto py-4 md:justify-center">
        {categories.map(category => {
          const count = data.filter(item => Array.isArray(item.category) && item.category.includes(category)).length;
          return (
            <div
              className={`${filteredCategory == category ? "animate-bounce" : ""}`}
              key={category}
              onClick={() => handleCategoryClick(category)}
            >
              <Categories variant={category}>
                {category} ({count})
              </Categories>
            </div>
          );
        })}
      </div>
      <div className="h-full w-full overflow-auto">
        <div className="flex flex-col gap-y-15">
          {renderedData.map(item => (
            <div key={item.id}>
              <h2 className="text-xl font-semibold">{item.term} nedir ?</h2>
              <p className="mt-2 text-sm ">{item.desc}</p>
              <div className="mt-4 flex items-center gap-2">
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
