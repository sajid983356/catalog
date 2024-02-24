import React from "react";
import dring from "../../data/category/dRing.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function DRing() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={dring}  />
    </div>
  );
}
export default DRing;
