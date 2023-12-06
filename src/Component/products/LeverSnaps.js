import React from "react";
import lever_snaps from "../../data/category/Lever Snaps.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function LeverSnaps() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={lever_snaps}  />
    </div>
  );
}