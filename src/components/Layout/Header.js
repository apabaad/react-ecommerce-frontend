import React from 'react';
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const Header = () => {
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
          />
          <Button>
            <i className="fas fa-search"></i>
          </Button>
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-1"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/categories">Categories</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <a href="" className="nav-link">
                <i className="fas fa-cart-plus"></i>
              </a>
              <Nav.Link href="">My cart</Nav.Link>

              <a href="/admin-profile" className="nav-link">
                <i className="fas fa-user-tie ml-2"></i>
              </a>
              <Nav.Link href="#">Sign in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
