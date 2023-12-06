import React from "react";
import snap_button from "../../data/category/Snap Button.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function SnapButton() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={snap_button}  />
    </div>
  );
}