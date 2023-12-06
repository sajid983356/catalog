import React from "react";
import screw from "../../data/category/Screw.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function Screw() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={screw}  />
    </div>
  );
}