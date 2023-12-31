import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <Row>
      <Col md={{ span: 6, offset: 3 }}>
          <h2>About Us:</h2>
          <p> <strong>Elegant Enterprise </strong> is one of the leading exporter and manufacturer of fine and decorative Metal and non metal leather craft tools 
            and accessories such as Buckles, D rings, O rings, Swivels, Magnetic snaps, Hooks, lever snaps, bolt snaps, tri glides, sliders, chains, 
            key holders and rings in India. We have vast experience of about more than 41 years in buckles and similar custom made metal accessories 
            which supplementary mainly to the leather and non leather fashion accessories purses, bags, belts, watches etc.
          </p>
          <p>
            All operations such as engineering, die-making, model making, die casting, stamping, slitting, side-forming, engraving, plating and 
            finishing are done in our own premises. We remain committed in providing our customers with the quality products at competitive prices. 
            Our professional and experienced staff strictly follow industry laid norms in every single stage from procurement to manufacturing and 
            from packing to exporting. We understand the competitive environment of the Industry and hence we make sure our client gets the 
            best quality items with appealing finishing.
          </p>
          <p>
            We cover many industries including tent & awning, military, medical, harness, equine, pet, luggage, strap, automobile, and fashion industry. 
            Every year, Elegant Enterprise increases its product line and its target customers. Recently, Elegant Enterprise has started manufacturing
             Cargo restraints and has been successfully supplying it across the India and has started exporting it to South-East Asia and Middle east.
          </p>
          </Col>
      </Row>
    </Container>
  );
};

export default About;
