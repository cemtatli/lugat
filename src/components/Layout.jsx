import { useState } from "react";
import data from "@/data/data.json";
import CodeBlock from "./CodeBlock";
import Search from "./Search";
import Badges from "./Badges";

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredData = data
    .filter((item) => item.term.toLowerCase().includes(searchTerm.toLowerCase().trim("")))
    .sort((a, b) => a.term.localeCompare(b.term));

  return (
    <section className="h-full w-full flex-auto overflow-auto rounded-md p-8">
      <div className="min-w-screen flex w-full ">
        <Search onSearch={handleSearch} />
      </div>
      {filteredData.map((item) => (
        <div className="mb-8" key={item.id}>
          <h2 className="text-xl font-bold">{item.term}</h2>
          <div className="mt-2 flex items-center gap-2">
            {Array.isArray(item.category) &&
              item.category.map((category, index) => (
                <Badges variant={category} key={index} className="inline-flex text-xs font-bold lowercase">
                  #{category}
                </Badges>
              ))}
          </div>
          <p className="mt-4 text-sm text-gray-700 dark:text-yellow-200">{item.desc}</p>
          <CodeBlock code={item.example.codeBlock} />
        </div>
      ))}
    </section>
  );
};

export default Layout;
