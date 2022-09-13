import { NavLink, Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.headerNav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Home page
          </NavLink>
          <NavLink
            to="/exchange"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Exchange
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Navigation;
