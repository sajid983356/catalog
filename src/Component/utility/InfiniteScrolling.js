import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "./ProductCard.js";
import Loader from "./Loader.js";
import { Row } from "react-bootstrap";
import {FOLDER_TO_DISPLAY_COUNT} from '../../data/preloadConfig.js'

function InfiniteScrollling({data}) {
  // console.log("inital", data)
  const increment = FOLDER_TO_DISPLAY_COUNT;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // console.log("index, increment, hasMore", index,increment, hasMore, data.slice(index, index+increment))
    setItems(data.slice(index, index+increment));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = () => {
    // console.log("called fetchMoreData before, index, hasMire", index, hasMore)
    setIndex((prevIndex) => {
      const newIndex = prevIndex + increment;
      const newItems = data.slice(newIndex, newIndex + increment);
      if (newItems.length === 0) {
        // console.log("setting it to false");
        setHasMore(false);
      }
      setItems((prevItems) => [
        ...prevItems,
        ...newItems,
      ]);
      return newIndex;
    });
  };
  return (
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loader />}
        scrollThreshold={0.6}
        className="min-vh-100"
        // style={{ border: '1px solid black'}}
      >
        <Row xl={5} lg={4} md={3} sm={2} xs={1} className="g-4 justify-content-center text-center">
          {items &&
            items.map((parentObject, index) => {
              // eslint-disable-next-line no-lone-blocks
              {
                // console.log("sajid parentObject->",parentObject)
                // console.log("sajid parentObject->",parentObject.parentFolder)
                return parentObject.childList.map((childObject, index) => {
                  return childObject.grandChildList.map((leafGrandChild, index) => {
                  return (
                    <ProductCard
                      data={{
                        folderName: `${parentObject.parentFolder}/${childObject.childName}/${leafGrandChild.grandChildName}`,
                        leafGrandChild,
                        index,
                      }}
                      key={index}
                    />
                  );
                });
                });
              }
            })}
        </Row>
      </InfiniteScroll>
  );
}

export default InfiniteScrollling;
