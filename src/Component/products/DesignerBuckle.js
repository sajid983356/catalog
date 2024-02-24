import React from "react";
import designerBuckle from "../../data/category/designerBuckle.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function DesignerBuckle() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={designerBuckle}  />
    </div>
  );
}
export default DesignerBuckle;
