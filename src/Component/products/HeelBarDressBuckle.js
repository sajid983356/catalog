import React from "react";
import heel_bar_dress_buckle from "../../data/category/Heel Bar Dress Buckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function HeelBarDressBuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={heel_bar_dress_buckle}  />
    </div>
  );
}