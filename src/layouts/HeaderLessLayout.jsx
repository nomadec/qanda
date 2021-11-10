import React from 'react';

const HeaderLessLayout = ({ children }) => {
  return (
    <div className="container">
      <div className="main">{children}</div>
    </div>
  );
};

export default HeaderLessLayout;
