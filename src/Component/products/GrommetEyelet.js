import React from "react";
import grommetEyelet from "../../data/category/grommetEyelet.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function GrommetEyelet() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={grommetEyelet}  />
    </div>
  );
}
export default GrommetEyelet;
