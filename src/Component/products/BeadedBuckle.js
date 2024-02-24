import React from "react";
import beadedBuckle from "../../data/category/beadedBuckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function BeadedBuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={beadedBuckle}  />
    </div>
  );
}
export default BeadedBuckle;
