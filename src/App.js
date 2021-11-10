import React, { useState } from 'react';
// import 'bootswatch/dist/flatly/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ProductPage from './pages/Product/ProductPage';
import CategoryPage from './pages/Category/CategoryPage';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Layout/Header';
import CartPage from './pages/Cart/CartPage';

function App() {
  return (
    <div>
      {/* <Header productQuantity={productQuantity} /> */}
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          {/* <Header productQuantity={productQuantity} /> */}
          <Route path="/category/:slug">
            <CategoryPage />
          </Route>
          <Route path="/products/:slug">
            <ProductPage />
          </Route>
          <Route path="/cart" exact>
            <CartPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
