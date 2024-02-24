import React from "react";
import capsule from "../../data/category/capsule.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function Capsule() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={capsule}  />
    </div>
  );
}
export default Capsule;
