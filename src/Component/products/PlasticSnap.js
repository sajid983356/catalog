import React from "react";
import plasticSnap from "../../data/category/plasticSnap.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function PlasticSnap() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={plasticSnap}  />
    </div>
  );
}
