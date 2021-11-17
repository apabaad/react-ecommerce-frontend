import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Container } from 'react-bootstrap';
// import queryString from 'query-string';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getCategoriesAction } from './CategoryAction';
import FrontEndLayout from '../layout/frontEndLayout';
import { getProductAction } from '../Product/ProductAction';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { isPending, catList } = useSelector((state) => state.category);
  const { productList } = useSelector((state) => state.product);

  // get query string
  // const { search } = useLocation(); //get url after '?'
  // const { category } = queryString.parse(search); //get value i.e slug of ?category from url

  // get slug
  const { slug } = useParams();

  //  get id of category based on slug
  const categoryClicked = catList.filter((item) => item.slug === slug); //getting the category coming from the slug
  const _id = categoryClicked[0]?._id; //getting array containing id of category

  const filteredProduct = productList.filter((item) =>
    item.categories.includes(_id)
  );

  useEffect(() => {
    dispatch(getProductAction());
  }, [dispatch]);

  return (
    <FrontEndLayout>
      <div className="categoryPage d-flex row-wrap">
        {filteredProduct.map((item, i) => {
          return (
            <div className="m-2">
              <Link to={`/products/${item.slug}`}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.images[0]} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </FrontEndLayout>
  );
};

export default CategoryPage;
