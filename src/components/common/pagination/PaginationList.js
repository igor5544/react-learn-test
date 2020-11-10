import React, { useState } from 'react';
import PaginationItem from './PaginationItem';
import s from './paginationList.module.css';

const PaginationList = ({ pageSize, totalItems, currentItem, setCurrentPage, portionSize = 12 }) => {
  const pageCount = Math.ceil(totalItems / pageSize);
  const portionCount = Math.ceil(pageCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  if (portionNumber === portionCount) {
    rightPortionPageNumber = pageCount;
  }

  const getPaginationsItems = (firstItem, lastItem) => {
    const paginationsItems = [];

    for (let i = firstItem; i <= lastItem; i++) {
      paginationsItems.push(
        <PaginationItem
          index={i}
          key={i}
          active={i === currentItem ? true : false}
          onClick={() => setCurrentPage(i)}
        />
      );
    }

    return paginationsItems;
  };

  return (
    <ul className={`main-list ${s.list}`}>
      { portionNumber !== 1 &&
        <li>
          <button className={`${s['arrow-btn']} ${s['arrow-btn--prev']}`} onClick={() => {
            setPortionNumber(portionNumber - 1);
          }} />
        </li>
      }
      {
        getPaginationsItems(leftPortionPageNumber, rightPortionPageNumber)
      }
      { portionNumber !== portionCount &&
        <li>
          <button className={`${s['arrow-btn']} ${s['arrow-btn--next']}`} onClick={() => {
            setPortionNumber(portionNumber + 1);
          }} />
        </li>
      }
    </ul>
  )
}

export default PaginationList;
