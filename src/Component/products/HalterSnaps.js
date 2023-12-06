import React from "react";
import halter_snaps from "../../data/category/Halter Snaps.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function HalterSnaps() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={halter_snaps}  />
    </div>
  );
}