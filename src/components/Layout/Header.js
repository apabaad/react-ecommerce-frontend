import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getCategoriesAction } from '../../pages/Category/CategoryAction';

const Header = () => {
  const dispatch = useDispatch();

  const { isPending, catList } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  // select just the parent cats
  const parentCategories = catList.filter((item) => !item.parentCat);

  return (
    <Navbar expand="lg">
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
          {parentCategories.map((item, i) => {
            return (
              <Link to={`/category/${item.slug}`} className="nav-link">
                {item.name}
              </Link>
            );
          })}

          {/* <Link to="/products" className="nav-link">
            Products
          </Link> */}
        </Nav>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <a href="" className="nav-link">
              Cart
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
    </Navbar>
  );
};

export default Header;
