import React from 'react';
import { Link } from 'react-router-dom';

const SubmitButton = () => {
  const handleOnOrderSubmit = () => {
    console.log('elo');
  };
  return (
    <Link to="/checkout">
      <button className="order-submit-button" onClick={handleOnOrderSubmit}>
        Proceed To Checkout
      </button>
    </Link>
  );
};

export default SubmitButton;
