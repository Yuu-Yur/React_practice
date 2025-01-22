import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Qs from './pages/Qs';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Category from './pages/Category';
import Categories from './pages/Categories';
import CategoryDetails from './pages/CategoryDetails';

function App() {
  return (
    <>
      <h1>CH.13 리액트 라우팅</h1>
      <Routes>
        <Route element={<Layout />}>
          {/* index == path="/" */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:username" element={<Profile />} />
          {/* 문제 1
URL에 파라미터를 추가하여 /category/:name
경로를 처리하려면 어떻게 해야 하나요?, 경로 설정, 컴포넌트 지정 */}
          {/* 문제 3
중첩된 라우트를 설정하여
/category/:name/details를 처리하려면 어떻게 해야 하나요?, 중첩 추가 */}
          <Route path="/category" element={<Categories />}>
            <Route path=":name" element={<Category />}>
              <Route path="details" element={<CategoryDetails />} />
            </Route>
          </Route>
          <Route path="/querystring" element={<Qs />} />
        </Route>
        {/* <Route path="/Articles" element={<Articles />} />
        <Route path="/Articles/:id" element={<Article />} /> */}
        <Route path="/Articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
