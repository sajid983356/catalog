import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import data from '../data/product.json';

const imgStyle = {
  objectFit: 'fill',
  height: '60vh', // Adjust the height to fit your requirements
};

function CarouselComponent() {
  return (
    <Carousel data-bs-theme="dark" interval={3000}>
      {
        data.carousel.category.map((obj, index) => (
          <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/img/${data.carousel.folderName}/${obj.imageName}`}
            style={imgStyle}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>{obj.title}</h5>
          </Carousel.Caption>
        </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default CarouselComponent;