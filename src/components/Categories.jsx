import React from "react";

const Categories = () => {
  return (
    <section className="hidden w-60 shrink-0 flex-col items-start justify-center gap-y-5 sm:flex ">
      <h3 className="text-sm font-medium tracking-wide text-black dark:text-white">Kategoriler</h3>
      <nav className="flex w-full flex-col gap-y-4">
        <a href="#" className="bg-blue-50 py-2 text-sm font-medium hover:bg-blue-100 dark:text-black">
          HTML
        </a>
        <a href="#" className="bg-blue-50 py-2 text-sm font-medium hover:bg-blue-100 dark:text-black">
          CSS
        </a>
        <a href="#" className="bg-blue-50 py-2 text-sm font-medium hover:bg-blue-100 dark:text-black">
          JavaScript
        </a>
        <a href="#" className="bg-blue-50 py-2 text-sm font-medium hover:bg-blue-100 dark:text-black">
          Git
        </a>
        <a href="#" className="bg-blue-50 py-2 text-sm font-medium hover:bg-blue-100 dark:text-black">
          React
        </a>
        <a href="#" className="bg-blue-50 py-2  text-sm font-medium hover:bg-blue-100 dark:text-black">
          Next JS
        </a>
      </nav>
    </section>
  );
};

export default Categories;
