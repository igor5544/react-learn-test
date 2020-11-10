import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { addPost, getUserProfile, getUserStatus, updateStatus } from '../redux/profile-reducer';
import Profile from './Profile';

class ProfileAPIComponent extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;

    if (!userID) {
      userID = this.props.userID;
    }

    this.props.getUserProfile(userID);
    this.props.getUserStatus(userID);
  }

  render() {
    return (
      <Profile
        profileData={this.props.profileData}
        addPost={this.props.addPost}
        updateStatus={this.props.updateStatus}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profileData: state.profilePage,
    userID: state.auth.id
  }
}

const mapDispatchToProps = {
  addPost,
  getUserProfile,
  getUserStatus,
  updateStatus
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileAPIComponent);
