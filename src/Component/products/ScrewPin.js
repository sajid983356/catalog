import React from "react";
import screw_pin from "../../data/category/Screw Pin.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function ScrewPin() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={screw_pin}  />
    </div>
  );
}