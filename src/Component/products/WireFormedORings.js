import React from "react";
import wire_formed_o_rings from "../../data/category/wire formed o-rings.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function WireFormedORings() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={wire_formed_o_rings}  />
    </div>
  );
}