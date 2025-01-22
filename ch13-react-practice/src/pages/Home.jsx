import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [language, setLanguage] = useState('kor');
  return (
    <div>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <Link to="/about">소개</Link>
      <Link to="/category/rrd">문제1,3,4</Link>
      <Link to={`/querystring?lang=${language}`}>문제2</Link>
    </div>
  );
};

export default Home;
