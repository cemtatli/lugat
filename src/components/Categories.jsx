import React from "react";

const Categories = () => {
  return (
    <section className="hidden h-full w-40 flex-col gap-y-5  px-5 md:flex">
      <h3 className="text mt-5 font-bold text-black dark:text-white">Kategoriler</h3>
      <nav className="flex flex-col gap-y-4 overflow-auto">
        <a href="#" className="text-sm font-medium hover:text-gray-900">
          JavaScript
        </a>
        <a href="#" className="text-sm font-medium hover:text-gray-900">
          React
        </a>
      </nav>
    </section>
  );
};

export default Categories;
