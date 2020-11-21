import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { addPost, getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile } from '../redux/profile-reducer';
import Profile from './Profile';

class ProfileAPIComponent extends React.Component {
  refreshProfile() {
    let userID = this.props.match.params.userID;

    if (!userID) {
      userID = this.props.userID;
    }

    this.props.getUserProfile(userID);
    this.props.getUserStatus(userID);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userID !== prevProps.match.params.userID) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        isOwner={!this.props.match.params.userID}
        profileData={this.props.profileData}
        addPost={this.props.addPost}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
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
  updateStatus,
  savePhoto,
  saveProfile
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileAPIComponent);
