import React from 'react';
import { useLocation } from 'react-router-dom';

const Qs = () => {
  const location = useLocation();
  return (
    <div>
      <p>쿼리스트링 location.search: {location.search}</p>
      <p>현재 주소의 경로 location.pathname: {location.pathname}</p>
      <p>location.hash: {location.hash}</p>
      <p>location.state: {location.state}</p>
      <p>location.key: {location.key}</p>
    </div>
  );
};

export default Qs;
