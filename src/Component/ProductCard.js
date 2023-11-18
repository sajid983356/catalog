import { Row, Col, Card, ListGroup, Carousel, Modal, Button } from 'react-bootstrap';

import data from '../data/product.json';

import { Controlled as Zoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useState } from 'react';


let selectedCategory = "view_all";
const viewAll = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpeg', 'image5.jpeg', 'image6.jpeg', 'image7.jpeg', 'image8.jpeg']
const imageYellow = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpeg'];
const greenYellow = ['image5.jpeg', 'image6.jpeg', 'image7.jpeg', 'image8.jpeg'];
let imagePath = [];

let cardWidth = {
  width: '100%'
}


const imgStyle = {
  objectFit: 'fill',
  height: '22rem', // Adjust the height as needed to fit the card design
};

const zoomImgStyle = {
  height: '30rem',
}
const hoveringZoomIn = {
  cursor: 'zoom-in',
}

const disableZoomCursor = {
  cursor: 'default'
}

function ProductCard(props) {

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState([]);
  const [title, setTitle] = useState('');

  const handleImageClick = (primaryImage, categoryObject) => {
    setTitle(categoryObject.title)

    const filterImages =  categoryObject.imageName.filter((secondaryImage) => secondaryImage != primaryImage)
    filterImages.unshift(primaryImage)
    setSelectedImage(filterImages);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const { category } = props;

  if(category?.toLowerCase()  === 'belt_loop') {
    selectedCategory = "belt_loop";
  } else if (category?.toLowerCase() === 'rings') {
    selectedCategory = "rings";
  } else {
    selectedCategory = "view_all";
  }
  
  if(window.innerWidth >= 992) {
    cardWidth='25vw';
  } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
    cardWidth='33vw'
  } else if (window.innerWidth >= 576 && window.innerWidth <= 767) {
    cardWidth='50vw';
  } else if (window.innerWidth <= 575){
    cardWidth='100%';
  } else {

  }

  const bgColor = {
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none', // Remove the box shadow if there's any
  }
  
    return (
    <Row className="row-cols-1 row-cols-md-4 g-4 justify-content-center text-center">
       { data[selectedCategory].map((folderObject, index) => (
          folderObject.category.map((categoryObject, index) => (
            <Col key={index} style={{ "width": cardWidth }}>
            <Card>
                <Carousel data-bs-theme="dark" className='pointer-events-none' >
                  {
                    categoryObject.imageName.map((image, index) => (
                      <Carousel.Item key={index} > 
                      <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/img/${folderObject.folderName}/${categoryObject.subFolderName}/${image}`}
                        style={{ ...imgStyle, ...hoveringZoomIn}}
                        alt="First slide"
                        onClick={() => handleImageClick(image, categoryObject)}
                      />
                  </Carousel.Item>
                    ))
                  }
                </Carousel>
  
                <Card.Body className='text-center'>
                  <Card.Title>{categoryObject.title}</Card.Title>
                  <Card.Text>{categoryObject.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{categoryObject.size}</ListGroup.Item>
                  <ListGroup.Item>{categoryObject.material}</ListGroup.Item>
                </ListGroup>
  
              < Modal show={showModal} onHide={handleCloseModal} centered backdrop="static"  style={bgColor}>
                <Modal.Header closeButton>
                  {/* Optional title in the header, adjust as needed */}
                  {/* w-100 justify-content-center align-items-center */}
                  <Row className="w-100 text-center">
                  <Col>
                    <Modal.Title>{title}</Modal.Title>
                  </Col>
                </Row>
                </Modal.Header>
                <Modal.Body>
                  <Zoom>
                    <Carousel data-bs-theme="dark" >
                      {
                        selectedImage.map((image, index) => (
                          <Carousel.Item key={index}> 
                          <img
                            className="d-block w-100"
                            src={`${process.env.PUBLIC_URL}/img/${folderObject.folderName}/${categoryObject.subFolderName}/${image}`}
                            style={{ ...zoomImgStyle, ...disableZoomCursor}}
                            alt="First slide"
                          />
                      </Carousel.Item>
                        ))
                      }
                    </Carousel>
                  </Zoom>
                </Modal.Body>
              </Modal>
  
              </Card>
          </Col>
          ))

        ))}      
    </Row>
  );
}

export default ProductCard;
