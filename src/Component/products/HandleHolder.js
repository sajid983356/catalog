import React from "react";
import handle_holder from "../../data/category/Handle Holder.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function HandleHolder() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={handle_holder}  />
    </div>
  );
}