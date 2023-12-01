import React from "react";
import CarouselComponent from './Carousel';
import ProductCard from './ProductCard';

function Home() {
    return (
        <div className="px-0">
            <CarouselComponent />
            <div className="mt-4"></div>
            <ProductCard />
        </div>
    )
}

export default Home;