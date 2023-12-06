import React from "react";
import rivet_setter from "../../data/category/Rivet Setter.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function RivetSetter() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={rivet_setter}  />
    </div>
  );
}