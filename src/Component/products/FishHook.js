import React from "react";
import fish_hook from "../../data/category/Fish Hook.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function FishHook() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={fish_hook}  />
    </div>
  );
}