import React from "react";
import d_ring from "../../data/category/D- Ring.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function DRing() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={d_ring}  />
    </div>
  );
}