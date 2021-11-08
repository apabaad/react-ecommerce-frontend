import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import FrontEndLayout from '../layout/frontEndLayout';

const ProductPage = () => {
  const { slug } = useParams();
  const { productList } = useSelector((state) => state.product);

  const selectedProduct = productList.filter((item) => item.slug == slug)[0];
  console.log(selectedProduct.images);
  return (
    <FrontEndLayout>
      <div className="main">
        <div className="productTitle mt-3">
          <h2>{selectedProduct.title}</h2>
        </div>
        <div className="productBody mt-3">
          <div className="productRow">
            <div className="imageSection">
              <img
                src={selectedProduct.images[0]}
                alt={selectedProduct.title}
                className="productMainImage"
              />

              <div className="productThumbnail">
                {selectedProduct.images.map((item) => {
                  return (
                    <ul>
                      <li>
                        <img src={item} alt="" />
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="addToCartSection">
              <div className="productPrice">
                <h3>${selectedProduct.price}</h3>
              </div>

              <button className="addToCartButton">Add To Cart</button>
              <button className="buyNowButton">Buy Now</button>
            </div>
          </div>
          <div className="productDescription">
            <h3>Description</h3>
            {selectedProduct.description}
          </div>
        </div>
      </div>
    </FrontEndLayout>
  );
};

export default ProductPage;
