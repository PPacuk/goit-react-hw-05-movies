import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.globalContainer}>
      <header>
        <nav className={css.navContainer}>
          <NavLink
            className={({ isActive }) => (isActive ? css.navActive : '')}
            to="/"
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? css.navActive : '')}
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>

      <Outlet />
    </div>
  );
};
