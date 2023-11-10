import React from "react";
import CarouselComponent from "./Carousel";
import ProductCard from "./ProductCard";

function ViewAll(){
    let category = {
        category: "view_all"
    }
    return (
        <div className="px-2">
            <CarouselComponent />
            <div className="mt-4"></div>
            <ProductCard {...category} />
        </div>
    )
}

export default ViewAll;