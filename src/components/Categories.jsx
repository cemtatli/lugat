import React from "react";
import Button from "./Button";

const Categories = () => {
  return (
    <section className="hidden h-full w-40 flex-col  gap-y-5  px-5 md:flex">
      <h3 className="text mt-5 text-center font-bold text-black dark:text-white">Kategoriler</h3>
      <nav className="flex flex-col gap-y-4 overflow-auto">
        <Button variant="JavaScript" className="text-sm font-medium hover:text-gray-900">
          JavaScript
        </Button>
        <Button variant="React" className="text-sm font-medium hover:text-gray-900">
          React
        </Button>
        <Button variant="Git" className="text-sm font-medium hover:text-gray-900">
          Git
        </Button>
        <Button variant="HTML" className="text-sm font-medium hover:text-gray-900">
          HTML
        </Button>
        <Button variant="CSS" className="text-sm font-medium hover:text-gray-900">
          CSS
        </Button>
        <Button variant="Vue.js" className="text-sm font-medium hover:text-gray-900">
          Vue.js
        </Button>
        <Button variant="Web Development" className=" text-sm font-medium hover:text-gray-900">
          Web Development
        </Button>
        <Button variant="Package Managers" className=" text-sm font-medium hover:text-gray-900">
          Package Managers
        </Button>
        <Button variant="Package Managers" className=" text-sm font-medium hover:text-gray-900">
          Package Managers
        </Button>
      </nav>
    </section>
  );
};

export default Categories;
