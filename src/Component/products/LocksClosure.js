import React from "react";
import locks_closure from "../../data/category/LocksClosure.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function LocksClosure() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={locks_closure}  />
    </div>
  );
}