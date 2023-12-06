import React from "react";
import key_fob from "../../data/category/Key Fob.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function KeyFob() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={key_fob}  />
    </div>
  );
}