import React from 'react';
import { NavLink } from "react-router-dom";
import s from '../styles/dialogItem.module.css';

const DialogItem = ({ name, id }) => {
  return (
    <li className={`${s.item} ${s['item--active']}`}>
      <NavLink activeClassName={s.active} className={s.link} to={`/dialogs/${id}`}>{name}</NavLink>
    </li>
  );
}

export default DialogItem;