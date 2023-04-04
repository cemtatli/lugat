import data from "@/data/data.json";
import CodeBlock from "./CodeBlock";

const Layout = () => {
  return (
    <div className="h-full overflow-auto rounded-md p-8">
      {data.map((item) => (
        <div className="mb-8" key={item.id}>
          <h2 className="text-xl font-bold">{item.term}</h2>
          <span className="text-sm">
            {Array.isArray(item.category) &&
              item.category.map((category, index) => (
                <span
                  key={index}
                  className="mr-1 mt-2 inline-block rounded bg-gray-100 px-3 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                >
                  #{category}
                </span>
              ))}
          </span>

          <p className="mt-4 text-sm text-gray-700 dark:text-yellow-200">{item.desc}</p>
          <CodeBlock language="javascript" code={item.example.codeBlock} />
        </div>
      ))}
    </div>
  );
};

export default Layout;
