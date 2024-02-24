import React from "react";
import rivet from "../../data/category/rivet.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function Rivet() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={rivet}  />
    </div>
  );
}
