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
      <InputGroup className="w-50 mb-3">
        <FormControl
          type="email"
          id="basic-url"
          aria-describedby="basic-addon3"
          placeholder="abc@zyx.com"
        />
      </InputGroup>
    </div>
  );
};

export default Email;
