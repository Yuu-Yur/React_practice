// 문제 1
// URL에 파라미터를 추가하여 /category/:name
// 경로를 처리하려면 어떻게 해야 하나요?, 컴포넌트 작성
import React from 'react';
import {
  useParams,
  useNavigate,
  Outlet,
  useSearchParams,
} from 'react-router-dom';

const category = {
  something: {
    description: '아무거나',
  },
  rrd: {
    description: '리액트 라우팅',
  },
  sass: {
    description: 'css 에서 변수나 함수처럼 쓸 수 있음',
  },
};
const Category = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lang = searchParams.get('lang');
  const { name } = useParams();
  const navigate = useNavigate();
  const data = category[name];
  if (data === undefined) return <Navigate to="/" />;
  return (
    <div>
      <h1>{data.description}</h1>
      <h2>{lang} 언어로 표시됨 </h2>
      <button onClick={() => navigate(`/category/${name}?lang=en`)}>
        영어로 표시하기
      </button>
      <Outlet />
      <button onClick={() => navigate(`/category/${name}/details`)}>
        세부
      </button>
    </div>
  );
};

export default Category;
