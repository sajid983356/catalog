import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Rings from './Rings';
import ViewAll from './ViewAll';
import BeltLoop from './BeltLoop';
import Menu from './Menu';


function Header() {
  return (
    <Navbar expand="lg" className="d-flex px-2">
      <Navbar.Brand href="/">ELEGANT BUCKLES</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '180px' }} navbarScroll>
          <NavDropdown title="Product Category" id="navbarScrollingDropdown">
            <NavDropdown.Item as={Link} to="/category/view_all">view all</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/category/belt_loop">Belt Loop</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/rings">rings</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
          <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
