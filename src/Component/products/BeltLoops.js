import React from "react";
import belt_loops from "../../data/category/Belt Loops.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function BeltLoops() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={belt_loops}  />
    </div>
  );
}
export default BeltLoops;
