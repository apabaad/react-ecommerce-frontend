import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import FrontEndLayout from '../layout/frontEndLayout';
import { changeCartAction } from '../../components/Cart/CartAction';
import { updateCart } from '../../components/Cart/CartSlice';

const ProductPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);
  const [productQuantity, setProductQuantity] = useState(0);
  const [mainImage, setMainImage] = useState(0);

  const selectedProduct = productList.filter((item) => item.slug == slug)[0];

  const handleOnQtyChange = (e) => {
    setProductQuantity(e.target.value);
  };

  const handleOnAddCartClick = (e) => {
    if (productQuantity < 1) {
      return alert('Quantity must be greater than 0.');
    }

    const productPropertiesForCart = {
      _id: selectedProduct._id,
      title: selectedProduct.title,
      price: selectedProduct.price,
      image: selectedProduct.images[0],
      cartQty: +productQuantity,
    };

    // use filter to check if the product already exists, if so replace that specific product or update the qty
    // if not exist then add on the list

    const filteredArg = cartItems.filter(
      (item) => item._id !== selectedProduct._id
    );

    const newCart = [...filteredArg, productPropertiesForCart];
    dispatch(updateCart(newCart));
  };

  const changeProductImage = (i) => {
    setMainImage(i);
  };

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
                src={selectedProduct.images[mainImage]}
                alt={selectedProduct.title}
                className="productMainImage"
              />

              <div className="productThumbnail">
                {selectedProduct.images.map((item, i) => {
                  return (
                    <ul>
                      <li>
                        <img
                          src={item}
                          alt={selectedProduct.title}
                          onClick={() => changeProductImage(i)}
                        />
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
              <div className="selectQuantity">
                Quantity:
                <form>
                  <input
                    type="number"
                    name="qty"
                    id="setProductQuantity"
                    onChange={handleOnQtyChange}
                    required
                  />
                </form>
              </div>

              <div className="product-buttons mt-2">
                <button
                  className="addToCartButton"
                  onClick={handleOnAddCartClick}
                >
                  Add To Cart
                </button>
                <button
                  className="buyNowButton"
                  // onClick={() => changeCartValue()}
                >
                  Buy Now
                </button>
              </div>
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
