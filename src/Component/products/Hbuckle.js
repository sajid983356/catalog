import React from "react";
import hbuckle from "../../data/category/h-buckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function Hbuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={hbuckle}  />
    </div>
  );
}
export default Hbuckle;
