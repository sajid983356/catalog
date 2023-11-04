import React from "react";
import CarouselComponent from "./Carousel";
import ProductCard from "./ProductCard";

function Green(){
    let category = {
        category: "green"
    }
    return (
        <div className="px-2">
            <CarouselComponent />
            <div className="mt-4"></div>
            <ProductCard {...category} />
        </div>
    )
}

export default Green;