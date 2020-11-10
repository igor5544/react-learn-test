import React from 'react';
import s from '../styles/mainBtn.module.css';

const MainBtn = ({ type, children, onClick }) => {
  return (
    <button className={s['main-btn']} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default MainBtn;