import React from 'react';
import Delivery from '../../components/Checkout/Delivery';
import Email from '../../components/Checkout/Email';
import Payment from '../../components/Checkout/Payment';
import ShoppingDetails from '../../components/Checkout/ShoppingDetails';
import SubmitButton from '../../components/Checkout/SubmitButton';
import FrontEndLayout from '../layout/frontEndLayout';
import './Checkout.css';

const CheckoutPage = () => {
  return (
    <div>
      <FrontEndLayout>
        <h2 className="mt-3">Checkout</h2>
        <hr />
        <div className="checkout-page">
          <div className="left-side">
            <Email />
            <Delivery />
            <Payment />
          </div>
          <div className="right-side">
            <ShoppingDetails />
            <SubmitButton />
          </div>
        </div>
      </FrontEndLayout>
    </div>
  );
};

export default CheckoutPage;
