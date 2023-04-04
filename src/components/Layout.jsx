import { useState } from "react";
import data from "@/data/data.json";
import CodeBlock from "./CodeBlock";
import Search from "./Search";
import Badge from "./Badge";

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
      <div className="min-w-screen mb-8 flex w-full ">
        <Search onSearch={handleSearch} />
      </div>
      <div className="flex flex-col gap-10">
        {filteredData.map((item) => (
          <div key={item.id}>
            <h2 className="text-xl font-semibold">{item.term} nedir ?</h2>
            <p className="mt-2 text-sm">{item.desc}</p>
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
    </section>
  );
};

export default Layout;
