import React from 'react';
import s from '../styles/mainBtn.module.css';

const MainBtn = ({ type, children, onClick, className }) => {
  return (
    <button className={`${className} ${s['main-btn']}`} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default MainBtn;