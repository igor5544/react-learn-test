import React from 'react';
import s from '../styles/header.module.css';
import { NavLink } from 'react-router-dom';
import MainBtn from './MainBtn';

const Header = ({ login, isAuth, logout }) => {
  return (
    <header className={s.header}>
      <img src="https://i.pinimg.com/originals/d1/2b/cf/d12bcf726d8683c17229522b730ea061.png" alt="logo" width="140" />

      <div className={s['login-wrapper']}>
        {
          isAuth ?
            <div>
              <p className={s.login}>{login}</p>
              <MainBtn onClick={logout}>Logout</MainBtn>
            </div> :
            <NavLink className={`main-link ${s.link}`} to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header;
