import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Offcanvas,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Rings from "./Rings";
import ViewAll from "./ViewAll";
import BeltLoop from "./BeltLoop";
import Menu from "./Menu";

function Header() {

  const [activeItem, setActiveItem] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false)

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const hanleNavdropDown = () => {
    setShowDropDown(!showDropDown);
    console.log("click on hanleNavdropDown")
  }
  return (
    <Navbar key="sm" expand="sm" className="d-flex px-2">
      <Container fluid>
      <Navbar.Brand href="/" >ELEGANT BUCKLES</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Offcanvas
          style={{ width: "50vw" }}
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
        >
          <Offcanvas.Header closeButton>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                ELEGANT BUCKLES
              </Offcanvas.Title>
            </Link>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Navbar.Collapse id="navbarScroll" className="ms-auto">
              <Nav
                className="mx-auto my-2 my-lg-0"
                navbarScroll
              >
                <Nav>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about-us">
                    About Us
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact-us">
                    Contact Us
                  </Nav.Link>
                </Nav>
                <NavDropdown
                      title="Product Category"
                      id="navbarScrollingDropdown"
                      onToggle={() => hanleNavdropDown()}
                      show={showDropDown}
                      // className="d-sm-none"
                    >
                      <NavDropdown.Item
                        as={Link}
                        to="/category/view_all"
                        className={activeItem === 'view_all' ? 'active' : ''}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent event propagation
                          handleItemClick('view_all');
                        }}
                      >
                        View All
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        as={Link}
                        to="/category/belt_loop"
                        className={activeItem === 'belt_loop' ? 'active' : ''}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent event propagation
                          handleItemClick('belt_loop');
                        }}
                      >
                        Belt Loop
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/category/rings"
                        className={activeItem === 'rings' ? 'active' : ''}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent event propagation
                          handleItemClick('rings');
                        }}
                      >
                        Rings
                      </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
