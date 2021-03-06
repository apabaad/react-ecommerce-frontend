import React from 'react';
import FrontEndLayout from '../layout/frontEndLayout';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const { userData, isLoggedIn } = useSelector((state) => state.user);
  return (
    <div>
      <FrontEndLayout>
        {isLoggedIn ? (
          <h2>Welcome {userData.fname}.</h2>
        ) : (
          <h2>Welcome to Homepage.</h2>
        )}
      </FrontEndLayout>
    </div>
  );
};

export default HomePage;
