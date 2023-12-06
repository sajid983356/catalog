import React from "react";
import plastic_hardware from "../../data/category/Plastic Hardware.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function PlasticHardware() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={plastic_hardware}  />
    </div>
  );
}