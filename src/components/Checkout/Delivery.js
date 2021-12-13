import React from 'react';
import { Form } from 'react-bootstrap';

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="checkout-title">
        <h4 className="p-2">
          <i class="fas fa-home"></i> Delivery Address
        </h4>
      </div>
      <Form className="ml-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control size="lg" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Delivery;
