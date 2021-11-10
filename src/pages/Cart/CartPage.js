import React, { useState } from 'react';
import FrontEndLayout from '../layout/frontEndLayout';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { changeCartQtyAction } from './CartAction';
import { updateCart } from './CartSlice';

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalCartItems = cartItems.reduce((accumulator, cartItems) => {
    return accumulator + cartItems.cartQty;
  }, 0);

  return (
    <div>
      <FrontEndLayout>
        <h3 className="m-4">Shopping Cart ({totalCartItems} items)</h3>

        <Table striped bordered className="cartTable">
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, i) => {
              return (
                <tr key={i}>
                  <td id="cartTableThumbnail">
                    <img src={item.image} width="75px" alt={item.title} />
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <div className="cartTableQty">
                      <div className="cartTablePlusButton m-3">
                        <i class="fas fa-minus m-2"></i>
                      </div>{' '}
                      {item.cartQty}
                      <div className="cartTablePlusButton m-3">
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
      </FrontEndLayout>
    </div>
  );
};

export default CartPage;
