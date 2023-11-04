import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const viewAll = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpeg', 'image5.jpeg', 'image6.jpeg', 'image7.jpeg', 'image8.jpeg']
const imageYellow = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpeg'];
const greenYellow = ['image5.jpeg', 'image6.jpeg', 'image7.jpeg', 'image8.jpeg'];
let imagePath = [];

let cardWidth = {
  width: '100%'
}

const largeScreenCardWidth = {
  width: '25vw'
}

const imgStyle = {
  objectFit: 'fill',
  height: '15rem', // Adjust the height as needed to fit the card design
};

function ProductCard(props) {
  const { category } = props;

  if(category?.toLowerCase()  === 'yellow') {
    imagePath = imageYellow;
  } else if (category?.toLowerCase() === 'green') {
    imagePath = greenYellow;
  } else {
    imagePath = viewAll;
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

    return (
    <Row className="row-cols-1 row-cols-md-4 g-4">
       { imagePath.map((item, index) => (
          <Col key={index} style={{ "width": cardWidth }}>
          <Card>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/${item}`} style={imgStyle} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Read More</Card.Link>
                <Card.Link href="#">Contact Us</Card.Link>
              </Card.Body>
            </Card>
        </Col>
        ))}      
    </Row>
  );
}

export default ProductCard;
