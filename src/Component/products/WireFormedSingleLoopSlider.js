import React from "react";
import wire_formed_single_loop_slider from "../../data/category/Wire Formed Single Loop Slider.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function WireFormedSingleLoopSlider() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={wire_formed_single_loop_slider}  />
    </div>
  );
}