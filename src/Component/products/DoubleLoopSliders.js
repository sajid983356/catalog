import React from "react";
import double_loop_sliders from "../../data/category/Double Loop Sliders.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function DoubleLoopSliders() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={double_loop_sliders}  />
    </div>
  );
}