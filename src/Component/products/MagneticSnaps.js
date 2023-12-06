import React from "react";
import magnetic_snaps from "../../data/category/Magnetic Snaps.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function MagneticSnaps() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={magnetic_snaps}  />
    </div>
  );
}