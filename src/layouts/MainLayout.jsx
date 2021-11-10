import React from 'react';
import Header from '../components/header/Header';

const MainLayout = ({ children }) => {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="main">{children}</div>
    </div>
  );
};

export default MainLayout;
