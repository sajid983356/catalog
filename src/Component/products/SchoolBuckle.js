import React from "react";
import schoolBuckle from "../../data/category/schoolBuckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function SchoolBuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={schoolBuckle}  />
    </div>
  );
}
