import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { follow, unfollow, getUsers } from '../redux/users-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { getUsersData, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../redux/users-selectors';
import Users from './Users';

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;

    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = i => {
    const { pageSize } = this.props;

    this.props.getUsers(i, pageSize);
  }

  render() {
    return (
      <Users
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        isFetching={this.props.isFetching}
        followingInProgress={this.props.followingInProgress}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsersData(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

const mapDispatchToProps = {
  follow,
  unfollow,
  getUsers
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(UsersAPIComponent);