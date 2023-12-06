import React from "react";
import collar_button from "../../data/category/Collar Button.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function CollarButton() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={collar_button}  />
    </div>
  );
}