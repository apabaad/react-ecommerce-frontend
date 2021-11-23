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
import { userLogOut } from '../../pages/User/UserAction';

const Header = (productQuantity) => {
  const dispatch = useDispatch();

  const { catList } = useSelector((state) => state.category);
  const { cartItems } = useSelector((state) => state.cart);
  const { user, isLoggedIn } = useSelector((state) => state.user);

  const totalCartItems = cartItems.reduce((accumulator, item) => {
    return accumulator + item.cartQty;
  }, 0);

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  // select just the parent cats
  const parentCategories = catList.filter((item) => !item.parentCat);

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">Market Mania</Navbar.Brand>
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
          {parentCategories.length
            ? parentCategories.map((item, i) => {
                return (
                  <Link to={`/category/${item.slug}`} className="nav-link">
                    {item.name}
                  </Link>
                );
              })
            : ''}

          {/* <Link to="/products" className="nav-link">
            Products
          </Link> */}
        </Nav>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/cart" className="nav-link">
              Cart
              <i className="fas fa-cart-plus p-2"></i>
              {totalCartItems}
            </Link>

            <Link to="/login" className="nav-link">
              {isLoggedIn ? user.fname : 'Login  '}
              <i className="fas fa-user-plus p-2"></i>
              {/* <i className="fas fa-sign-in-alt"></i> */}
            </Link>
            {isLoggedIn ? (
              <Nav.Link href="#" onClick={() => dispatch(userLogOut())}>
                Logout
                <i className="fas fa-user-plus p-2"></i>
              </Nav.Link>
            ) : (
              <Link to="/signup" className="nav-link">
                Sign up
                <i className="fas fa-user-plus p-2"></i>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
