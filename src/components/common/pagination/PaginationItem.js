import React from 'react';
import s from './paginationItem.module.css';

const PaginationItem = ({ index, active, onClick }) => {
  const onPaginationClick = (evt) => {
    evt.preventDefault();

    onClick();
  }

  return (
    <li className={`${s.item} ${active && s['item--active']}`}>
      <a className={s.link} href="#" onClick={onPaginationClick}>
        {index}
      </a>
    </li>
  )
}

export default PaginationItem;
