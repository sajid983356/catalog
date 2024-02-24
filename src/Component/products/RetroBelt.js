import React from "react";
import retroBelt from "../../data/category/retroBelt.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function RetroBelt() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={retroBelt}  />
    </div>
  );
}
