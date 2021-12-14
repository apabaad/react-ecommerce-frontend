import React from 'react';
import { Form } from 'react-bootstrap';

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="checkout-title">
        <h4 className="p-2">
          <i class="fas fa-home"></i> Delivery
        </h4>
      </div>
      <Form className="m-3">
        <Form.Group className="w-100 mb-3" controlId="formBasicEmail">
          <Form.Label>Delivery Address</Form.Label>
          <Form.Control
            size="md"
            type="text"
            placeholder="1 Sunbeam street, Belmore, NSW 2192"
          />
        </Form.Group>
        <div className="customer-info">
          <div className="first-name">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control size="md" type="text" placeholder="John" />
            </Form.Group>
          </div>
          <div className="last-name">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control size="md" type="text" placeholder="Smith" />
            </Form.Group>
          </div>
        </div>

        <Form.Group className="phone-field mb-3 " controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control size="md" type="text" placeholder="041000000" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Delivery;
