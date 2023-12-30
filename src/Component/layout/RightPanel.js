import React , { } from 'react';
// import { useNavigate } from "react-router-dom";
import Menu from "../main/Menu";
// import CarouselComponent from "../main/Carousel";



function RightPanel() {
  // const history = useNavigate();
  // // const currentPath = history.location.pathname;
  // const currentPath = window.location.pathname

  // const shouldDisplayCarousel = !["/about-us", "/contact-us"].includes(window.location.pathname)
  return (
    <>
     {/* { shouldDisplayCarousel && <CarouselComponent /> } */}
    <Menu />
    </>
    
  );
}

export default RightPanel;
