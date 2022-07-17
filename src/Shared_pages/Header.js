import { signOut } from 'firebase/auth';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import './Header.css'



const Header = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  }

  return (
    <>
      <Navbar collapseOnSelect sticky='top' expand="lg" className='background-color'>
        <Container>
          <Navbar.Brand as={Link} to='/' href="#home"><span style={{ color: 'pink' }} className='fs-3'>Health</span> <span className='text-info fs-4'>Care</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='link-style' href="home#services">Services</Nav.Link>
              <Nav.Link className='link-style' href="home#contact">Contact</Nav.Link>
              <Nav.Link className='link-style' as={Link} to='blogs'>Blogs</Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link className='link-style' as={Link} to='about' >AboutMe</Nav.Link>
              {

                user ? <button className="btn btn-link link-style text-decoration-none" onClick={logOut}>Sign Out</button> :

                  <Nav.Link className='link-style' as={Link} to='login' eventKey={2} >
                    Login
                  </Nav.Link>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;