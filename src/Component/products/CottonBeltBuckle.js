import React from "react";
import cottonBeltBuckle from "../../data/category/cottonBeltBuckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function CottonBeltBuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={cottonBeltBuckle}  />
    </div>
  );
}
export default CottonBeltBuckle;
