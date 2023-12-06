import React from "react";
import wire_formed_d_rings from "../../data/category/Wire Formed D-rings.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function WireFormedDRings() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={wire_formed_d_rings}  />
    </div>
  );
}