import React, { useState } from 'react';
import { Form, Button, Col, Row, InputGroup, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import FrontEndLayout from '../layout/frontEndLayout';
import { createUserAction } from './UserAction';

export const RegistrationPage = () => {
  const dispatch = useDispatch();
  const initialState = {
    fname: '',
    lname: '',
    dob: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    gender: '',
  };
  const [newUser, setNewUser] = useState(initialState);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { confirmPassword, ...userInfo } = newUser;

    dispatch(createUserAction(userInfo));
  };

  return (
    <FrontEndLayout>
      <div className="signup-form">
        <Card className="p-5 m-4">
          <h1>User Registration</h1>

          <hr />
          <Form onSubmit={handleOnSubmit}>
            <Form.Group as={Row} className="mb-3 mt-3">
              <Form.Label column sm="3">
                Email
              </Form.Label>

              <Col sm="9">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleOnChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 mt-3">
              <Form.Label column sm="3">
                Password
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleOnChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 mt-3">
              <Form.Label column sm="3">
                Confirm Password
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                  onChange={handleOnChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 mt-3">
              <Form.Label column sm="3">
                First Name
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  name="fname"
                  placeholder="Sam"
                  required
                  onChange={handleOnChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 mt-3">
              <Form.Label column sm="3">
                Last Name
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  name="lname"
                  placeholder="Smith"
                  required
                  onChange={handleOnChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 mt-3">
              <Form.Label column sm="3">
                DOB
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="dd/mm/yyyy"
                  onChange={handleOnChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 mt-3">
              <Form.Label column sm="3">
                Phone
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  name="phone"
                  placeholder="040000000"
                  onChange={handleOnChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 mt-3">
              <Form.Label column sm="3">
                Address
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  name="address"
                  placeholder="Sydney"
                  onChange={handleOnChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 mt-3">
              <Form.Label column sm="3">
                Gender
              </Form.Label>
              <Col sm="9">
                <InputGroup>
                  <InputGroup.Radio
                    name="gender"
                    value="male"
                    aria-label="Male"
                  />
                  <Form.Label>Male</Form.Label>
                  <InputGroup.Radio
                    name="gender"
                    value="female"
                    aria-label="Female"
                  />
                  <Form.Label>Female</Form.Label>
                </InputGroup>
              </Col>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button type="submit" variant="primary">
                Register
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </FrontEndLayout>
  );
};
