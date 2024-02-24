import React from "react";
import carbineClip from "../../data/category/carbineClip.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function CarbineClip() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={carbineClip}  />
    </div>
  );
}
export default CarbineClip;
