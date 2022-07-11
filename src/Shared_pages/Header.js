import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'



const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg"  className='background-color'>
  <Container>
  <Navbar.Brand as={Link} to='/' href="#home"><span style={{color:'pink'}} className='fs-3'>Health</span> <span className='text-info fs-4'>Care</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className='link-style' as={Link} to='services' href="home#services">Services</Nav.Link>
      <Nav.Link className='link-style' as={Link} to='contact' href="home#contact">Contact</Nav.Link>
      <Nav.Link  className='link-style' as={Link} to='blogs' href="blogs">Blogs</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link className='link-style' as={Link} to='about' href="#about">AboutMe</Nav.Link>
      <Nav.Link className='link-style' as={Link} to='login' eventKey={2} href="#login">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;