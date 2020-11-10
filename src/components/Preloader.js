import React from 'react';
import s from '../styles/users.module.css';
import preloader from '../assets/images/preloader.gif';

const Preloader = () => {
  return <img className={s.loader} src={preloader} alt="loading..." height="100" width="100"/>;
}

export default Preloader;