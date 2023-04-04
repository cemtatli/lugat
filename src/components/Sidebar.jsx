import React from "react";
import Categories from "./Categories";

const Sidebar = () => {
  return (
    <aside className="flex flex-col items-center p-5">
      <Categories />
    </aside>
  );
};

export default Sidebar;
