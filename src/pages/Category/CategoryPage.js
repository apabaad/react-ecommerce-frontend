import React, { useEffect } from 'react';
import dellxps from '../../assets/images/category/dellxps.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Container } from 'react-bootstrap';
import queryString from 'query-string';
import { useLocation, useParams } from 'react-router-dom';
import { getCategoriesAction } from './CategoryAction';
import FrontEndLayout from '../layout/frontEndLayout';
import { getProductAction } from '../Product/ProductAction';

const CategoryPage = ({ props }) => {
  const dispatch = useDispatch();
  const { isPending, catList } = useSelector((state) => state.category);
  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductAction());
  }, [dispatch]);

  // get query string
  // const { search } = useLocation(); //get url after '?'
  // const { category } = queryString.parse(search); //get value i.e slug of ?category from url

  // get slug
  const { slug } = useParams();
  console.log(slug);

  //  get id of category based on slug
  const categoryClicked = catList.filter((item) => item.slug === slug); //getting the category coming from the slug
  const id = categoryClicked.map((item, i) => item._id); //getting id of category
  console.log(id);

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
