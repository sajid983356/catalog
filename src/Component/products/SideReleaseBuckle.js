import React from "react";
import side_release_buckle from "../../data/category/Side Release Buckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function SideReleaseBuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={side_release_buckle}  />
    </div>
  );
}