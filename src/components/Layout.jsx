import { useState } from "react";
import data from "@/data/data.json";
import CodeBlock from "./CodeBlock";
import Search from "./Search";

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredData = data
    .filter((item) => item.term.toLowerCase().includes(searchTerm.toLowerCase().trim("")))
    .sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="h-full w-full overflow-auto rounded-md p-8">
      <div className="min-w-screen flex w-full ">
        <Search onSearch={handleSearch} />
      </div>
      {filteredData.map((item) => (
        <div className="mb-8" key={item.id}>
          <h2 className="text-xl font-bold">{item.term}</h2>
          <div className="mt-2 flex items-center gap-2">
            {Array.isArray(item.category) &&
              item.category.map((category, index) => (
                <span
                  key={index}
                  className=" inline-block rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-200"
                >
                  # {category}
                </span>
              ))}
          </div>{" "}
          <p className="mt-4 text-sm text-gray-700 dark:text-yellow-200">{item.desc}</p>
          <CodeBlock code={item.example.codeBlock} />
        </div>
      ))}
    </div>
  );
};

export default Layout;
