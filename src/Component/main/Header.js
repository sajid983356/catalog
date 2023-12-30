import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import '../../css/Header.css'
import menu from '../../data/menu.json';

function Header() {

  const [showDropDown, setShowDropDown] = useState(false)
  const hanleNavdropDown = () => {
    setShowDropDown(!showDropDown);
  }
  return (
    <Navbar key="md" expand="md" className="d-flex px-2">
      <Container fluid>
      <Navbar.Brand href="/" >ELEGANT BUCKLES</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Offcanvas
          className="custom-offcanvas"
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
        >
          <Offcanvas.Header closeButton>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
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
                {menu.headers.map((menu, index) => (
                    <Nav.Link key={index} className="custom-link" as={Link} to={menu.to}>
                      {menu.link}
                    </Nav.Link>
                ))}
                </Nav>
                <NavDropdown
                      title="Category"
                      id="navbarScrollingDropdown"
                      onToggle={() => hanleNavdropDown()}
                      show={showDropDown}
                      className="d-md-none"
                    >
                      {
                        menu.dropdown.map((category, index) => (
                          <NavDropdown.Item
                          key={index}
                          as={Link}
                          to={category.to}
                          className="small custom-link"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent event propagation
                          }}
                        >
                          {category.link}
                        </NavDropdown.Item>
                        ))
                      }
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
