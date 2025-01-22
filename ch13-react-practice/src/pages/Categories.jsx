import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/category/rrd">리액트 라우팅</Link>
        </li>
        <li>
          <Link to="/category/sass">sass</Link>
        </li>
        <li>
          <Link to="/category/something">아무거나</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Categories;
