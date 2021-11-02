import React, { useEffect } from 'react';
import dellxps from '../../assets/images/category/dellxps.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Container } from 'react-bootstrap';
import moduleName from 'module';
import { getCategoriesAction } from './CategoryAction';
import FrontEndLayout from '../layout/frontEndLayout';

const CategoryPage = () => {
  const dispatch = useDispatch();

  const { isPending, catList } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  return (
    <FrontEndLayout>
      <div className="d-flex row-wrap">
        {catList.map((item, i) => {
          return (
            <div className=" m-2">
              <a href="">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={dellxps} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </div>
          );
        })}
      </div>
    </FrontEndLayout>
  );
};

export default CategoryPage;
