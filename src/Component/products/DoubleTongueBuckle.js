import React from "react";
import double_tongue_buckle from "../../data/category/Double Tongue Buckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function DoubleTongueBuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={double_tongue_buckle}  />
    </div>
  );
}