import React from 'react';
import { Link } from 'react-router-dom';
import { URL_ERUDITE, URL_QANDA } from '../../utils/consts';

const AppsList = () => {
  return (
    <div className="apps_menu">
      <Link to={URL_QANDA}>
        <div className="app_card">
          <span>Q&A</span>
        </div>
      </Link>
      <Link to={URL_ERUDITE}>
        <div className="app_card">
          <span>Эрудит</span>
        </div>
      </Link>
    </div>
  );
};

export default AppsList;
