import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CarouselComponent from "./Carousel";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import data from "../data/product.json";
import { Row } from "react-bootstrap";
import {FOLDER_TO_DISPLAY_COUNT} from '../data/preloadConfig.js'

function Home() {
  const increment = FOLDER_TO_DISPLAY_COUNT;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setItems(data.view_all.slice(index, index+increment));
  }, []);

  const fetchMoreData = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + increment;
      setItems((prevItems) => [
        ...prevItems,
        ...data.view_all.slice(newIndex, newIndex + increment),
      ]);
      return newIndex;
    });
    data.view_all.length >= (index + increment) ? setHasMore(true) : setHasMore(false);
  };
  return (
    <div className="px-2">
      <CarouselComponent />
      <div className="mt-4"></div>

      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loader />}
        scrollThreshold={0.7}
      >
        <Row className="row-cols-1 row-cols-md-4 g-4 mb-4 justify-content-center text-center">
          {items &&
            items.map((folderObject, index) => {
              {
                return folderObject.category.map((categoryObject, index) => {
                  return (
                    <ProductCard
                      data={{
                        folderName1: folderObject.folderName,
                        categoryObject,
                        index,
                      }}
                      key={index}
                    />
                  );
                });
              }
            })}
        </Row>
      </InfiniteScroll>
    </div>
  );
}

export default Home;
