import React from 'react';
import s from '../styles/usersBar.module.css';
import FriendItem from './FriendItem';

const UsersBar = ({ topFriends }) => {
  
  return (
    <>
      <h2 className={s.title}>Top friends</h2>
      <ul className={`${s.list} main-list`}>
        {topFriends.map(Friend => <FriendItem img={Friend.img} key={Friend.id} />)}
      </ul>
    </>
  )
}

export default UsersBar;