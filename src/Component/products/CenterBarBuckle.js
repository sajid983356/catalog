import React from "react";
import center_bar_buckle from "../../data/category/Center Bar Buckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function CenterBarBuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={center_bar_buckle}  />
    </div>
  );
}
export default CenterBarBuckle;
