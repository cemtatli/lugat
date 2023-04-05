import { useState } from "react";
import data from "@/data/data.json";
import CodeBlock from "./CodeBlock";
import Search from "./Search";
import Badge from "./Badge";
import Button from "./Button";

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredData = data
    .filter((item) => item.term.toLowerCase().includes(searchTerm.toLowerCase().trim("")))
    .sort((a, b) => a.term.localeCompare(b.term));

  const categories = [...new Set(filteredData.flatMap((item) => item.category))];

  return (
    <section className="flex h-full w-full  flex-col items-center">
      <Search onSearch={handleSearch} />
      <div className="mb-1 flex w-[82.5%]  gap-4 overflow-auto py-4 md:justify-center">
        {categories.map((category) => {
          const count = filteredData.filter(
            (item) => Array.isArray(item.category) && item.category.includes(category)
          ).length;
          return (
            <div key={category}>
              <Button variant={category}>
                {category} ({count})
              </Button>
            </div>
          );
        })}
      </div>
      <div className="h-full w-full overflow-auto p-8">
        <div className="flex flex-col gap-y-15">
          {filteredData.map((item) => (
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
              <CodeBlock code={item.example.codeBlock} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layout;
