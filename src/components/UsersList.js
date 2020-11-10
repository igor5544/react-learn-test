import React from 'react';
import User from './User';

const UsersList = ({ users, follow, unfollow, followingInProgress }) => {


  return (
    <ul className="main-list">
      {users.map(user =>
        <User
          key={user.id} userInfo={user}
          follow={follow} unfollow={unfollow}
          followingInProgress={followingInProgress}
        />
      )}
    </ul>
  )
}

export default UsersList;