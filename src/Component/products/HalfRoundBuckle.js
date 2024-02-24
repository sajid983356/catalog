import React from "react";
import halfRoundBuckle from "../../data/category/halfRoundBuckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function HalfRoundBuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={halfRoundBuckle}  />
    </div>
  );
}
