import React from "react";
import bolt_snaps from "../../data/category/Bolt Snaps.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function BoltSnaps() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={bolt_snaps}  />
    </div>
  );
}
export default BoltSnaps;
