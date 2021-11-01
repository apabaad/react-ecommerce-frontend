import React, { useState } from 'react';

import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mouseEnterCategory, setMouseEnterCategory] = useState(false);
  const [mouseLeaveCategory, setMouseLeaveCategory] = useState(true);

  const onMouseEnterCategory = () => {
    setMouseEnterCategory(true);
    console.log('entered');
  };

  const onMouseLeaveCategory = () => {
    setMouseLeaveCategory(true);
    console.log('left');
  };

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Market Mania</Navbar.Brand>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-0"
            aria-label="Search"
            id="searchbar"
          />
          <Button>
            <i className="fas fa-search"></i>
          </Button>
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-1" style={{ maxHeight: '100px' }}>
            <Link
              to="/categories"
              className="nav-link"
              onMouseEnter={onMouseEnterCategory}
              onMouseLeave={onMouseLeaveCategory}
            >
              Categories
            </Link>

            <Link to="/products" className="nav-link">
              Products
            </Link>
          </Nav>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <a href="" className="nav-link">
                My cart
                <i className="fas fa-cart-plus p-2"></i>0
              </a>
              <a href="/admin-profile" className="nav-link">
                Login
                <i className="fas fa-sign-in-alt p-2"></i>
              </a>
              <a href="/admin-profile" className="nav-link">
                Sign up
                <i className="fas fa-user-plus p-2"></i>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
