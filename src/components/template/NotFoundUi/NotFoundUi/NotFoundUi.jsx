import React from 'react';
import NotFoundUiStyle from './NotFoundUiStyle';

const NotFoundUi = () => {
  return (
    <NotFoundUiStyle>
      <div className="not-found-container">
        <h1 className="error-title">404</h1>
        <p className="error-message">Oops! Page not found.</p>
        <a href="/" className="home-link">
          Go back to Home
        </a>
      </div>
    </NotFoundUiStyle>
  );
};

export default NotFoundUi;
