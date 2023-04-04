import data from "@/data/data.json";
import CodeBlock from "./CodeBlock";

const Layout = () => {
  return (
    <div className="h-full overflow-auto rounded-md p-8">
      {data.map((item) => (
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
          </div>

          <p className="mt-4 text-sm text-gray-700 dark:text-yellow-200">{item.desc}</p>
          <CodeBlock code={item.example.codeBlock} />
        </div>
      ))}
    </div>
  );
};

export default Layout;
