import React from "react";
import heelBarBuckle from "../../data/category/heelBarBuckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function HeelBarBuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={heelBarBuckle}  />
    </div>
  );
}
export default HeelBarBuckle;
