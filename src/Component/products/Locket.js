import React from "react";
import locket from "../../data/category/locket.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function Locket() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={locket}  />
    </div>
  );
}
export default Locket;
