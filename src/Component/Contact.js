import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="mb-4">Contact Us:</h2>

          <p>
            <FaEnvelope className="mr-2" />&nbsp;&nbsp;
            <strong>Email Address:</strong> elegantbuckle@gmail.com
          </p>
          <p>
            <FaMapMarkerAlt className="mr-2" />&nbsp;&nbsp;
            <strong>Office Address:</strong> C/2, Jai Bajrang Bali CHS, Sant Rohidas Marg,
            Khambdev Nagar Mumbai, Maharashtra 400017
          </p>
          <p>
            <FaPhone className="mr-2" />&nbsp;&nbsp;
            <strong>Mobile No:</strong> +91 9987627053
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
