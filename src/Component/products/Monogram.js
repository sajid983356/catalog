import React from "react";
import monogram from "../../data/category/monogram.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function Monogram() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={monogram}  />
    </div>
  );
}
