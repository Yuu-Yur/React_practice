import { Link, Outlet, NavLink } from 'react-router-dom';

const Articles = () => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };
  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <NavLink
            to="/Articles/1"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Articles/2"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Articles/3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 3
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
