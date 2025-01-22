import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
        <ul>
          <li>
            <Link to="/articles">articles</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/mypage">mypage</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
