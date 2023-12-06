import React from "react";
import single_loop_slider from "../../data/category/Single Loop Slider.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function SingleLoopSlider() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={single_loop_slider}  />
    </div>
  );
}