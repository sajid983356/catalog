import React from "react";
import cinch_buckle from "../../data/category/Cinch Buckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function CinchBuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={cinch_buckle}  />
    </div>
  );
}
export default CinchBuckle;
