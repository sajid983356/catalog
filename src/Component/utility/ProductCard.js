import {
  Row,
  Col,
  Card,
  ListGroup,
  Carousel,
  Modal,
} from "react-bootstrap";

import { Controlled as Zoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";


const imgStyle = {
  objectFit: "fill",
  height: "18rem", // Adjust the height as needed to fit the card design
};

const zoomImgStyle = {
  height: "30rem",
};
const hoveringZoomIn = {
  cursor: 'zoom-in',
};

const disableZoomCursor = {
  cursor: "default",
};

function ProductCard(props) {
  const { folderName, leafGrandChild, index } = props.data;

  // console.log("folderName -> ", folderName);
  // console.log("leafGrandChild -> ", leafGrandChild);

  const [showModal, setShowModal] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [title, setTitle] = useState("");
  
  const handleImageClick = (primaryImage) => {
    setTitle(leafGrandChild.title);
    const filterImages = leafGrandChild.images.filter(
      (secondaryImage) => secondaryImage !== primaryImage
    );
    filterImages.unshift(primaryImage);
    setSelectedImages(filterImages);

    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const bgColor = {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none", // Remove the box shadow if there's any
  };

  return (
    <Col key={index}>
        <Card style={{ height: '100%'}}>
          <Carousel data-bs-theme="dark" className="pointer-events-none">
            {leafGrandChild?.images?.map((imgName, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 carousel-normal-img"
                  src={`${process.env.PUBLIC_URL}/img/products/${folderName}/${imgName}`}
                  style={{ ...imgStyle, ...hoveringZoomIn }}
                  alt="First slide"
                  onClick={() => handleImageClick(imgName, leafGrandChild )}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <Card.Body className="text-center">
            <Card.Title>{leafGrandChild.title}</Card.Title>
            {/* <Card.Text className="small">{leafGrandChild.description} - {leafGrandChild.grandChildName}</Card.Text> */}
            <Card.Text className="small">Model No: {leafGrandChild.grandChildName}</Card.Text>

          </Card.Body>
          {/* <ListGroup className="list-group-flush" style={{ textAlign: 'justify'}}> */}
          <ListGroup className="list-group-flush" style={{ textAlign: 'left'}}>
            <ListGroup.Item >{leafGrandChild.material}</ListGroup.Item>
            <ListGroup.Item> {leafGrandChild.color} </ListGroup.Item>
          </ListGroup>

          <Modal
            show={showModal}
            onHide={handleCloseModal}
            centered
            backdrop="static"
            style={bgColor}
          >
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
                <Carousel data-bs-theme="dark" interval={1000}>
                {
                  selectedImages?.map((image, index) => (
                  <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={`${process.env.PUBLIC_URL}/img/products/${folderName}/${image}`}
                    style={{ ...zoomImgStyle, ...disableZoomCursor }}
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
  );
}

export default ProductCard;