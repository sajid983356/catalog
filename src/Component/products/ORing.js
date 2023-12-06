import React from "react";
import oring from "../../data/category/O-Ring.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function ORing() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={oring}  />
    </div>
  );
}