import React from "react";
import keychain from "../../data/category/keychain.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";

function Keychain() {
  return (
    <div className="px-2 mt-4">
      <InfiniteScrolling data={keychain}  />
    </div>
  );
}
export default Keychain;
