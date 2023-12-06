import React from "react";
import double_loop from "../../data/category/Double Loop.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function DoubleLoop() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={double_loop}  />
    </div>
  );
}