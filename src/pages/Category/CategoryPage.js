import React, { useEffect } from 'react';
import dellxps from '../../assets/images/category/dellxps.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Container } from 'react-bootstrap';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getCategoriesAction } from './CategoryAction';
import FrontEndLayout from '../layout/frontEndLayout';

const CategoryPage = ({ props }) => {
  const dispatch = useDispatch();
  const { isPending, catList } = useSelector((state) => state.category);

  // get query string
  const { search } = useLocation(); //get url after '?'
  const { category } = queryString.parse(search); //get value i.e slug of ?category from url
  console.log(category);
  // get id of category based on slug
  // const filtered = catList.filter((item) => item.slug === category);

  catList.map((item) => item.slug);
  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  // props.params.slug;
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
