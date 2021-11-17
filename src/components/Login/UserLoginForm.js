import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

import { userLogin } from '../../pages/User/UserAction';

const UserLoginForm = () => {
  const [formData, setFormData] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return alert('please input both email and password.');
    }
    dispatch(userLogin(formData));
    history.push('/homepage');
  };

  return (
    <div className="login-page">
      <Card className="p-5 mt-4 login-card">
        <h1>User Login</h1>
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
          <div className="d-grid gap-2">
            <Button type="submit" variant="secondary">
              Login
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default UserLoginForm;
