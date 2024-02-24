import React from "react";
import centerBarBuckle from "../../data/category/centerBarBuckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function CenterBarBuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={centerBarBuckle}  />
    </div>
  );
}
export default CenterBarBuckle;
