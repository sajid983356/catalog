import React from "react";
import swivel_chain_connector from "../../data/category/Swivel Chain Connector.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

export default function SwivelChainConnector() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={swivel_chain_connector}  />
    </div>
  );
}