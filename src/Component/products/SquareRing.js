import React from "react";
import squareRing from "../../data/category/squareRing.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function SquareRing() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={squareRing}  />
    </div>
  );
}
