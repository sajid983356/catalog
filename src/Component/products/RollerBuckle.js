import React from "react";
import roller_buckle from "../../data/category/Roller Buckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function RollerBuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={roller_buckle}  />
    </div>
  );
}