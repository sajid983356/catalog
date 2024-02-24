import React from "react";
import snapHook from "../../data/category/snapHook.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function SnapHook() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={snapHook}  />
    </div>
  );
}
