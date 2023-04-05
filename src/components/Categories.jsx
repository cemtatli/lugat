import React from "react";
import Button from "./Button";

const Categories = () => {
  return (
    <aside className="h-full w-full gap-y-5 px-5 xl:flex xl:w-50 xl:flex-col">
      <h3 className="text my-4 text-center font-bold text-black dark:text-white xl:mb-0">
        Kategoriler
      </h3>
      <nav className="flex w-full gap-2.5 overflow-auto xl:flex-col ">
        <Button variant="HTML" className=" text-sm font-medium hover:text-gray-900">
          HTML {}
        </Button>
        <Button variant="CSS" className=" text-sm font-medium hover:text-gray-900">
          CSS
        </Button>
        <Button variant="JavaScript" className="text-sm font-medium hover:text-gray-900">
          JavaScript
        </Button>
        <Button variant="React" className="text-sm font-medium hover:text-gray-900">
          React
        </Button>
        <Button variant="Vue.js" className="text-sm font-medium hover:text-gray-900">
          Vue.js
        </Button>
        <Button variant="Git" className=" text-sm font-medium hover:text-gray-900">
          Git
        </Button>
        <Button variant="Web Development" className=" text-sm font-medium hover:text-gray-900">
          Web Development
        </Button>
        <Button variant="Package Managers" className=" text-sm font-medium hover:text-gray-900">
          Package Managers
        </Button>
      </nav>
    </aside>
  );
};

export default Categories;
