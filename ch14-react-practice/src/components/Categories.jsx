import styled, { css, keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  { name: 'all', text: '전체보기' },
  { name: 'business', text: '비즈니스' },
  { name: 'entertainment', text: '엔터테인먼트' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'technology', text: '기술' },
  { name: 'cctvsample', text: 'cctv 날씨 샘플' },
  { name: 'busanatt', text: '부산 명소' },
];

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const CategoriesBlock = styled.div`
  // flexbox를 사용하여 자식 요소들을 가로로 배치
  display: flex;
  // 문제 1 모든 카테고리를 왼쪽 정렬하는 대신 가운데 정렬하도록 CategoriesBlock 스타일을 수정, justify-content
  justify-content: center;
  // 컨테이너 내부에 1rem(16px) 간격으로 패딩 추가
  padding: 1rem;

  // 컨테이너의 기본 너비를 768px로 설정
  width: 768px;

  // 컨테이너를 화면 가운데 정렬
  margin: 0 auto;

  // 화면 너비가 768px 이하일 경우에 적용
  /* @media screen and (max-width: 768px) {
    // 컨테이너 너비를 화면의 100%로 설정
    width: 100%;

    // 가로 스크롤을 허용 (내부 콘텐츠가 넘칠 경우)
    overflow-x: auto;
  } */
  ${media.tablet`
    width: 100%;
    overflow-x: auto;
   `}
`;

const pulse = keyframes`
  0%, 100% {
    color: #3493a1;
  }
  50% {
    color: #00e1ff;
  }
`;

const Category = styled(NavLink)`
  // 텍스트 크기를 1.125rem(18px)로 설정
  font-size: 1.125rem;

  // 커서를 포인터(손 모양)로 변경하여 클릭 가능하다는 표시
  cursor: pointer;

  // 텍스트가 줄바꿈 없이 한 줄로 표시되도록 설정
  white-space: pre;

  // 텍스트에 밑줄 제거
  text-decoration: none;

  // 기본 텍스트 색상을 상속받도록 설정
  color: inherit;

  // 아래쪽에 0.25rem(4px) 간격 추가
  padding-bottom: 0.25rem;

  // hover 상태에서 텍스트 색상을 #495057로 변경
  &:hover {
    color: #22b8cf;
    transform: scale(1.1);
  }

  // 동일한 요소가 연속으로 배치될 때, 각 요소 간에 왼쪽 간격 1rem 추가
  & + & {
    margin-left: 1rem;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      animation: ${pulse} 1s infinite;

      &:hover {
        color: #3bc9db;
        transform: none;
      }
    `}
  // 문제 2 카테고리를 클릭했을 때 활성화된 카테고리에 애니메이션 효과를 추가
  transition: all 0.3s ease-in-out;
  // 문제 3 모바일 환경에서 카테고리 간의 간격을 더 넓게 설정

  ${media.mobile`
    & + & {
    margin-left: 2rem;
  }
`}
`;
// 문제 2 카테고리를 클릭했을 때 활성화된 카테고리에 애니메이션 효과를 추가
const Categories = (/*{ onSelect, category }*/ { category }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          active={c.name === category}
          //   onClick={() => onSelect(c.name)}
          to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
