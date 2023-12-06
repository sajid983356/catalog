import React from "react";
import grommets_eyelet from "../../data/category/Grommets Eyelet.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function GrommetsEyelet() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={grommets_eyelet}  />
    </div>
  );
}