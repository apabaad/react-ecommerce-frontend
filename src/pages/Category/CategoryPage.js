import React from 'react';
import dellxps from '../../assets/images/category/dellxps.jpg';

import { Card, Button } from 'react-bootstrap';

const CategoryPage = () => {
  return (
    <div class="m-4">
      <a href="">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={dellxps} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
};

export default CategoryPage;
