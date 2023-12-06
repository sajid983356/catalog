import React from "react";
import key_ring from "../../data/category/Key Ring.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function KeyRing() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={key_ring}  />
    </div>
  );
}