import React from "react";
import trigger_snaps from "../../data/category/Trigger Snaps.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function TriggerSnaps() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={trigger_snaps}  />
    </div>
  );
}