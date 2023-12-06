import React from "react";
import collarFastener from "../../data/category/Collar Fastener.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function CollarFastener() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={collarFastener}  />
    </div>
  );
}
export default CollarFastener;
