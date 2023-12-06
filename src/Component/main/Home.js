import React from "react";
import view_all from "../../data/category/view_all.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";
import CarouselComponent from '../main/Carousel.js'


function Home() {
  return (
    <div className="px-2 mt-4">
      <CarouselComponent />
      <InfiniteScrolling data={view_all}  />
    </div>
  );
}

export default Home;
