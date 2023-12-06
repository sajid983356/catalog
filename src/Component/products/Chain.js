import React from "react";
import chain from "../../data/category/Chain.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function Chain() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={chain}  />
    </div>
  );
}
export default Chain;
