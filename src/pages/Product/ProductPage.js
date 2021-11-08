import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import FrontEndLayout from '../layout/frontEndLayout';

const ProductPage = () => {
  const { slug } = useParams();
  const { productList } = useSelector((state) => state.product);

  const selectedProduct = productList.filter((item) => item.slug == slug)[0];
  console.log(selectedProduct);
  return (
    <FrontEndLayout>
      <div className="main">
        <div className="productTitle">
          <h2>{selectedProduct.title}</h2>
        </div>
        <div>
          <img
            src={selectedProduct.images[0]}
            alt={selectedProduct.title}
            className="productMainImage"
          />
        </div>
      </div>
    </FrontEndLayout>
  );
};

export default ProductPage;
