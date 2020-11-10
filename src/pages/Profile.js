import React from 'react';
import Posts from '../components/Posts';
import ProfileInfo from '../components/ProfileInfo';
import Preloader from '../components/Preloader';

const Profile = ({ profileData, addPost, updateStatus }) => {

  if (!profileData.profile) {
    return <Preloader />
  }

  return (
    <section>
      <ProfileInfo userInfo={profileData.profile} status={profileData.status} updateStatus={updateStatus} />
      <Posts
        posts={profileData.posts}
        addPost={addPost}
      />
    </section >
  )
}

export default Profile;