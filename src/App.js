import React from 'react';
// import 'bootswatch/dist/flatly/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import FrontEndLayout from './pages/layout/frontEndLayout';
import CategoryPage from './pages/Category/CategoryPage';

function App() {
  return (
    <div>
      <FrontEndLayout />
      <Router>
        <Route path="/categories">
          <CategoryPage />
        </Route>
        <Route path="/products">
          <CategoryPage />
        </Route>
        <Route path="/cart">
          <CategoryPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
