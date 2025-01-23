import { useState, useCallback } from 'react';
import axios from 'axios';
import './App.css';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import NewsPage from './pages/NewsPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  // const [data, setData] = useState(null);
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);

  // const onClick = () => {
  //   axios
  //     .get(
  //       'https://newsapi.org/v2/top-headlines?country=us&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f',
  //     )
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };
  return (
    <>
      <h1>CH14. API 연동</h1>
      {/* <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )} */}
      {/* <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} /> */}
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
    </>
  );
}

export default App;
