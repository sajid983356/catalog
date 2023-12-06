import React from "react";
import hoof_pickup_buckle from "../../data/category/Hoof Pickup Buckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function HoofPickupBuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={hoof_pickup_buckle}  />
    </div>
  );
}