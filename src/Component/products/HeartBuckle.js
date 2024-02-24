import React from "react";
import heartBuckle from "../../data/category/heartBuckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function HeartBuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={heartBuckle}  />
    </div>
  );
}
export default HeartBuckle;
