import { NavLink, Outlet } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <header>
        <nav>
          <div>
            <NavLink to="/">Home page</NavLink>
            <NavLink to="/exchange">Exchange</NavLink>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Navigation;
