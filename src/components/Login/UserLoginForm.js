import React from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
const UserLoginForm = () => {
  const handleOnSubmit = () => {};
  const handleOnChange = () => {};
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
            <Button type="submit" variant="primary">
              Registration
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default UserLoginForm;
