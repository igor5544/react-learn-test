import React from 'react';
import { NavLink } from "react-router-dom";
import s from '../styles/navbar.module.css';
import UsersBarContainer from './UsersBarContainer';

const Navbar = ({ className }) => {
  return (
    <section className={className, s.navbar}>
      <nav className={s['nav-list']}>
        <ul className="main-list">
          <li>
            <NavLink className={s.link} to="/profile" activeClassName={s['link--active']}>
              Profile
            </NavLink >
          </li>
          <li>
            <NavLink className={s.link} to="/dialogs" activeClassName={s['link--active']}>
              Messages
            </NavLink >
          </li>
          <li >
            <NavLink className={s.link} to="/news" activeClassName={s['link--active']}>
              News
            </NavLink >
          </li>
          <li>
            <NavLink className={s.link} to="/music" activeClassName={s['link--active']}>
              Music
            </NavLink >
          </li>
          <li>
            <NavLink className={s.link} to="/users" activeClassName={s['link--active']}>
              Users
            </NavLink >
          </li>
          <li>
            <NavLink className={s.link} to="/settings" activeClassName={s['link--active']}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      <UsersBarContainer />
    </section>
  )
}

export default Navbar;
