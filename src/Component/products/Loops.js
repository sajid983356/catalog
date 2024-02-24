import React from "react";
import loops from "../../data/category/loops.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function Loops() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={loops}  />
    </div>
  );
}
