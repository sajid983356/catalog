import React from "react";
import beltEdge from "../../data/category/beltEdge.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function BeltEdge() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={beltEdge}  />
    </div>
  );
}
export default BeltEdge;
