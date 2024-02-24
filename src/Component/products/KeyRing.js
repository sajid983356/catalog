import React from "react";
import keyRing from "../../data/category/keyRing.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function KeyRing() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={keyRing}  />
    </div>
  );
}
export default KeyRing;
