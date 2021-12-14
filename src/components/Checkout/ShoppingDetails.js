import React from 'react';
import { useSelector } from 'react-redux';

const ShoppingDetails = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const totalItems = cartItems.reduce((accumulator, cartItems) => {
    return (accumulator = accumulator + cartItems.cartQty);
  }, 0);

  const totalPrice = cartItems.reduce((accumulator, cartItems) => {
    return (accumulator = accumulator + cartItems.price * cartItems.cartQty);
  }, 0);
  return (
    <div className="shopping">
      <h4 className="shopping-title p-2">
        <i class="fas fa-shopping-cart"></i> Shopping Summary
      </h4>
      <div className="shopping-details-card">
        <div className="cart-total-items">Total items: {totalItems}</div>
        <div className="cart-item-qty">
          {cartItems.map((cartItems, i) => {
            return (
              <ul>
                <li>
                  {cartItems.cartQty}x * {cartItems.title}
                </li>
              </ul>
            );
          })}
        </div>
        <div className="total-price">Item Total: ${totalPrice}</div>
      </div>
    </div>
  );
};

export default ShoppingDetails;
