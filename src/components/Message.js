import React from 'react';
import s from '../styles/message.module.css';

const Messagee = ({ name, message, me, img }) => {
  return (
    <li className={`${s.item} ${me ? s.me : ''}`}>
      <div className={s.wrapper}>
        <img className={s.img} src={img} alt="another user" height="64" width="64" />
        <h3 className={s.name}>
          {name}
        </h3>
      </div>
      <p className={s.message}>
        {message}
      </p>
    </li>
  )
}

export default Messagee;