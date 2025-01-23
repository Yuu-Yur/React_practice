import styled from 'styled-components';
import NewsItem from './NewsItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import usePromise from '../lib/usePromise';
import WeatherSample from './WeatherSample';
import BusanAtt from './BusanAtt';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 1024px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://reqres.in/img/faces/7-image.jpg',
};

const NewsList = ({ category }) => {
  //   const [articles, setArticles] = useState(null);
  //   const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     // async를 사용하는 함수 선 언
  //     const fetchData = async () => {
  //       setLoading(true);
  //       try {
  //         const query = category === 'all' ? '' : `&category=${category}`;

  //         const response = await axios.get(
  //           `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`,
  //         );
  //         setArticles(response.data.articles);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //       setLoading(false);
  //     };

  //     fetchData();
  //   }, [category]); 이것을 usePromise 로 빼냄
  const [loading, resolved, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    if (category === 'cctvsample') {
      return axios.get(
        `http://apis.data.go.kr/1360000/RoadWthrInfoService/getCctvStnRoadWthr?ServiceKey=zytXafKy%2Bm%2FrnUWmID8dWjMYtcsoEGBLO42CK%2BGCj7GqtS2rAskQyRttpfZ2dvx8SxomL8i90ZMPjBEJM2Plig%3D%3D&pageNo=1&nomOfRows=4&eqmtId=0500C00001&dataType=JSON`,
      );
    } else if (category === 'busanatt') {
      return axios.get(
        `http://apis.data.go.kr/6260000/AttractionService/getAttractionKr?ServiceKey=zytXafKy%2Bm%2FrnUWmID8dWjMYtcsoEGBLO42CK%2BGCj7GqtS2rAskQyRttpfZ2dvx8SxomL8i90ZMPjBEJM2Plig%3D%3D&pageNo=1&numOfRows=5&resultType=json`,
      );
    } else {
      return axios.get(
        `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`,
      );
    }
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // 아직 articles 값이 설정되지 않았을 때
  if (!resolved) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  if (category === 'cctvsample') {
    const { item } = resolved.data.response.body.items;
    return (
      <NewsListBlock>
        {<WeatherSample key={item.baseDate + item.baseTime} item={item} />}
      </NewsListBlock>
    );
  } else if (category === 'busanatt') {
    const items = resolved.data.getAttractionKr.item;
    return (
      <NewsListBlock>
        {items.map((item) => (
          <BusanAtt key={item.UC_SEQ} item={item} />
        ))}
      </NewsListBlock>
    );
  } else {
    const { articles } = resolved.data;
    return (
      <NewsListBlock>
        {articles.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
      </NewsListBlock>
    );
  }
};

export default NewsList;
