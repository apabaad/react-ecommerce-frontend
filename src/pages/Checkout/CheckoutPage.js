import React from 'react';
import Delivery from '../../components/Checkout/Delivery';
import Payment from '../../components/Checkout/Payment';
import ShoppingDetails from '../../components/Checkout/ShoppingDetails';
import FrontEndLayout from '../layout/frontEndLayout';
import './Checkout.css';

const CheckoutPage = () => {
  return (
    <div>
      <FrontEndLayout>
        <h2 className="mt-3">Checkout</h2>
        <div className="checkout-page">
          <div className="left-side">
            <Delivery />
            <Payment />
          </div>
          <div className="right-side">
            <ShoppingDetails />
          </div>
        </div>
      </FrontEndLayout>
    </div>
  );
};

export default CheckoutPage;
