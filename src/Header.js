import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Yellow from './Yellow';
import Green from './Green';
import ViewAll from './ViewAll';

function Header() {
  return (
    <Router>
    <Navbar expand="lg" className="d-flex px-2">
      <Navbar.Brand href="/">GODOWN BUCKLES</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '180px' }} navbarScroll>
          <NavDropdown title="Shop By Category" id="navbarScrollingDropdown">
            <NavDropdown.Item as={Link} to="/category/green">green buckle</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/yellow">yellow belt</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/category/all">view all</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
          <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Routes>
        <Route path="/about-us" element={<About />} />
        <Route path='/' element={<Home />}/>
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/category/all' element={<ViewAll />} />
        <Route path='/category/yellow' element={<Yellow />}/>
        <Route path='/category/green' element={<Green />}/>

      </Routes>
    </Router>
  );
}

export default Header;
