import React, { useState } from 'react';
import FrontEndLayout from '../layout/frontEndLayout';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { changeCartQtyAction } from './CartAction';
import { updateCart } from './CartSlice';
import { Link } from 'react-router-dom';
import checkout from '../Checkout/CheckoutPage';

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalCartItems = cartItems.reduce((accumulator, cartItems) => {
    return accumulator + cartItems.cartQty;
  }, 0);

  let totalValue = 0;
  cartItems.map((item) => {
    totalValue = totalValue + item.cartQty * item.price;
  });

  const handleOnAddQtyButton = (_id) => {
    const cartItem = cartItems.map((item) => {
      if (item._id === _id) {
        return { ...item, cartQty: item.cartQty + 1 };
      }
      return item;
    });

    dispatch(updateCart(cartItem));
  };

  const handleOnSubtractQtyButton = (_id) => {
    const cartItem = cartItems.map((item) => {
      if (item._id === _id) {
        if (item.cartQty - 1 < 1) {
          alert("quantity can't be less than 0.");
          return item;
        }
        return { ...item, cartQty: item.cartQty - 1 };
      }
      return item;
    });

    dispatch(updateCart(cartItem));
  };
  const handleOnItemRemove = (_id) => {
    const cartItem = cartItems.filter((item) => item._id !== _id);
    dispatch(updateCart(cartItem));
  };

  const handleOnProceedButton = () => {
    if (cartItems.length == 0) {
      return alert('Your cart is empty.');
    }
  };
  return (
    <div>
      <FrontEndLayout>
        <h3 className="m-4">Shopping Cart ({totalCartItems} items)</h3>
        <div className="cartPageMain">
          <div className="cartTable">
            <Table striped bordered className="cartTable">
              <thead>
                <tr>
                  <th>Thumbnail</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Item Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td id="cartTableThumbnail">
                        <img src={item.image} width="75px" alt={item.title} />
                      </td>
                      <td>
                        {item.title}
                        <br />
                        <span
                          id="onItemRemove"
                          onClick={() => handleOnItemRemove(item._id)}
                        >
                          remove{' '}
                        </span>
                      </td>
                      <td>
                        <div className="cartTableQty">
                          <div
                            className="cartTablePlusButton m-3"
                            onClick={() => handleOnSubtractQtyButton(item._id)}
                          >
                            <i class="fas fa-minus m-2"></i>
                          </div>{' '}
                          {item.cartQty}
                          <div
                            className="cartTablePlusButton m-3"
                            onClick={() => handleOnAddQtyButton(item._id)}
                          >
                            <i class="fas fa-plus m-2"></i>
                          </div>
                        </div>
                      </td>
                      <td>${item.price}</td>
                      <td>${item.price * item.cartQty}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            {/* <h5>Total Items: {totalCartItems}</h5> */}
            <h5>Total: ${totalValue}</h5>

            <div className="proceedCheckOutDiv">
              <Link to="/checkout">
                <button
                  className="proceedToCheckOutButton"
                  onClick={handleOnProceedButton}
                >
                  Proceed To Checkout
                </button>
              </Link>
            </div>
          </div>
          {/* <div className="goToCheckOutDiv">
            <div className="goToCheckOutDivBody">
              Items: ({totalCartItems}) <br />
              Sub Total: {totalValue} <br />
              Postage: $5 <br />
              Discount: $10 <br />
            </div>

            <button className="proceedToCheckOutButton">
              Proceed To Checkout
            </button>
          </div> */}
        </div>
      </FrontEndLayout>
    </div>
  );
};

export default CartPage;
