import React from 'react';
// import 'bootswatch/dist/flatly/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ProductPage from './pages/Product/ProductPage';
import CategoryPage from './pages/Category/CategoryPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/category/:slug">
            <CategoryPage />
          </Route>
          <Route path="/products">
            <ProductPage />
          </Route>
          <Route path="/cart">
            <CategoryPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
