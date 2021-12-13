import React from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';

const Email = () => {
  return (
    <div>
      <Form.Label htmlFor="basic-url">
        <div className="email-confirmation">
          <h4>Email </h4> <span>to send your order confirmation</span>
        </div>
      </Form.Label>
      <InputGroup className="mb-3">
        <FormControl id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
    </div>
  );
};

export default Email;
