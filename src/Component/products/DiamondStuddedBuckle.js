import React from "react";
import diamondStuddedBuckle from "../../data/category/diamond-studdedBuckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function DiamondStuddedBuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={diamondStuddedBuckle}  />
    </div>
  );
}
export default DiamondStuddedBuckle;
