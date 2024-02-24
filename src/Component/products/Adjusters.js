import React from "react";
import adjusters from "../../data/category/adjusters.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function Adjusters() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={adjusters}  />
    </div>
  );
}
export default Adjusters;
