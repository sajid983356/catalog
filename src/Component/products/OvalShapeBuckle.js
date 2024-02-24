import React from "react";
import ovalShapeBuckle from "../../data/category/ovalShapeBuckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function OvalShapeBuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={ovalShapeBuckle}  />
    </div>
  );
}
