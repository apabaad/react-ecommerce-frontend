import React from 'react';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import { Container } from 'react-bootstrap';

const FrontEndLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
      {/* <Footer /> */}
    </div>
  );
};

export default FrontEndLayout;
