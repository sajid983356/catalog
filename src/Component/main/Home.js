import React, { useState } from "react";
import view_all from "../../data/category/view_all.json";
import InfiniteScrolling from "../utility/InfiniteScrolling.js";
import CarouselComponent from '../main/Carousel.js';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // You can perform additional search-related logic here if needed
  };

  return (
    <div className="px-2 mt-4">
      {/* Add a simple text input for searching */}
      <input
        type="text"
        placeholder="Enter your Material Category e.g. Antique Brass or Nickle"
        value={searchTerm}
        onChange={handleSearchChange}
        className="form-control mb-3"
      />
      <CarouselComponent />
      {/* Pass the searchTerm to InfiniteScrolling component for filtering */}
      <InfiniteScrolling data={view_all} searchTerm={searchTerm} />
    </div>
  );
}

export default Home;
