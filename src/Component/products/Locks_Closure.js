import React from "react";
import locks_closure from "../../data/category/Locks _ Closure.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function Locks_Closure() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={locks_closure}  />
    </div>
  );
}