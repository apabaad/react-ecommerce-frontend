import React from 'react';
import { Form, InputGroup, FormControl } from 'react-bootstrap';

const Payment = () => {
  return (
    <div className="payment">
      <div className="checkout-title">
        <h4 className="p-2">
          <i class="fas fa-money-check-alt"></i> Payment Method
        </h4>
      </div>

      <Form className="m-3">
        {['radio'].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
              type={type}
              id={`default-${type}`}
              label="Master Card"
              name="payment-method"
            />
            <Form.Check
              type={type}
              id={`default-${type}`}
              label="Credit Card"
              name="payment-method"
            />
            <Form.Check
              type={type}
              id={`default-${type}`}
              label="Paypal"
              name="payment-method"
            />
            <Form.Check
              type={type}
              id={`default-${type}`}
              label="AfterPay"
              name="payment-method"
            />
            <Form.Check
              type={type}
              id={`default-${type}`}
              label="ZipPay"
              name="payment-method"
            />
            <Form.Check
              type={type}
              id={`default-${type}`}
              label="Direct transfer to bank"
              name="payment-method"
            />
          </div>
        ))}
      </Form>
    </div>
  );
};

export default Payment;
