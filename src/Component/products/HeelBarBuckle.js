import React from "react";
import heel_bar_buckle from "../../data/category/Heel Bar Buckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function HeelBarBuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={heel_bar_buckle}  />
    </div>
  );
}