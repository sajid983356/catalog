import React from "react";
import leather_plaque from "../../data/category/Leather Plaque.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function LeatherPlaque() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={leather_plaque}  />
    </div>
  );
}