import React, { useState, useEffect } from "react";
import axios from "axios";
import data from "@/data/data.json";
import Button from "./Button";

const Layout = () => {
  return (
    <div className="h-full rounded-md p-8">
      {data.map((data) => (
        <div className="mb-8" key={data.id}>
          <h2 className="text-xl font-bold">{data.term}</h2>

          <p className="mt-4 text-sm text-gray-700 dark:text-yellow-200">{data.desc}</p>
          <pre className="mt-4 rounded-lg border bg-gray-100 p-4 text-xs font-medium dark:text-black">
            {data.example.codeBlock}
          </pre>
        </div>
      ))}
    </div>
  );
};

export default Layout;
