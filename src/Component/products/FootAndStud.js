import React from "react";
import foot_and_stud from "../../data/category/Foot and Stud.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function FootAndStud() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={foot_and_stud}  />
    </div>
  );
}