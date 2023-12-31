import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactUs = () => {

  const handleWhatsAppButtonClick = () => {
    // Replace the phone number and message with your own
    const phoneNumber = "9987627053";
    const message = "Dear Elegant Buckle, I would like to contact you.";

    // Create the WhatsApp link
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Open the WhatsApp link in a new window or tab
    window.open(whatsappLink, "_blank");
  };

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
          <div className="d-flex">
              {/* Your other content goes here */}
              {/* <MdMessage className="mr-2" />&nbsp;&nbsp; */}
              <button
                onClick={handleWhatsAppButtonClick}
                className="btn btn-primary mt-2"
              >
                Contact Me on WhatsApp
              </button>
            </div>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
