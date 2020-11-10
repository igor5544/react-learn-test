import React from 'react';
import UsersList from '../components/UsersList';
import PaginationList from '../components/common/pagination/PaginationList';
import Preloader from '../components/Preloader';

const Users = ({ users, pageSize, totalUsersCount, currentPage, onPageChanged, follow, unfollow, isFetching, followingInProgress }) => {
  return (
    <section>
      <h2 className="main-title">Users list</h2>
      <PaginationList
        pageSize={pageSize}
        totalItems={totalUsersCount}
        currentItem={currentPage}
        setCurrentPage={onPageChanged}
      />
      {
        isFetching ?
          <Preloader /> :
          <UsersList
            users={users}
            follow={follow}
            unfollow={unfollow}
            followingInProgress={followingInProgress}
          />
      }
    </section>
  )
}

export default Users;