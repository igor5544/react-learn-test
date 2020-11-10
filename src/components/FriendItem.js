import React from 'react';
import s from '../styles/friendItem.module.css';

const FriendItem = ({img}) => {
  return (
    <li className={s.item}>
      <img src={img} alt="friend" className={s.img}/>
    </li>
  )
}

export default FriendItem;