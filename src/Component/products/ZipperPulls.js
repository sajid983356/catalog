import React from "react";
import zipper_pulls from "../../data/category/Zipper Pulls.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function ZipperPulls() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={zipper_pulls}  />
    </div>
  );
}