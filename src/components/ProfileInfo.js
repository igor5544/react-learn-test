import React, { useState } from 'react';
import s from '../styles/profileInfo.module.css';
import userPhoto from '../assets/images/user.png';
import ProfileStatus from './ProfileStatus/ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';

const ProfileInfo = ({ userInfo, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
  const [editMode, setEditMode] = useState(false);
  const socialLinks = [];
  const urlPattern = /^((http|https|ftp):\/\/)/;

  for (const link in userInfo.contacts) {
    if (userInfo.contacts[link] !== null && userInfo.contacts[link] !== '') {
      let linkUrl = userInfo.contacts[link]; 

      if (!urlPattern.test(linkUrl)) {
        linkUrl = 'http://' + linkUrl;
      }

      socialLinks.push(
        <li key={link} className="card-panel">
          <b>{link}: </b>
          <a className="main-link" target="_blank" rel="noreferrer" href={linkUrl}>{userInfo.contacts[link]}</a>
        </li>
      )
    }
  }

  const onPhotoSelected = (evt) => {
    if (evt.target.files.length) {
      savePhoto(evt.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  }

  return (
    <section className={s['mian-wrapper']}>
      <img src="https://mobimg.b-cdn.net/pic/v2/gallery/preview/dorogi-pejzazh-priroda-48515.jpg" style={{ display: 'block', objectFit: 'cover' }} alt="long road" height="320" />
      <div className={s['top-wrapper']}>
        <div>
          <img
            className={s['avatar-img']}
            src={userInfo.photos.large ? userInfo.photos.large : userPhoto}
            alt="user avatar" height="50"
          />
          {isOwner &&
            <form>
              <input className={s['img-btn']} type="file" accept="image/*" onChange={onPhotoSelected} />
            </form>
          }
        </div>
        <div>
          {!editMode &&
            <h2 className={s.name}>
              {userInfo.fullName}
            </h2>
          }
          <ProfileStatus status={status} updateStatus={updateStatus} />
          {!editMode && <ProfileMainData userInfo={userInfo} />}
        </div>
        {isOwner && !editMode && <button className={s['edit-btn']} onClick={() => setEditMode(true)}>Edit</button>}
      </div>
      { editMode ? <ProfileDataForm initialValues={userInfo} profileContacts={userInfo.contacts} onSubmit={onSubmit} /> : <ProfileContactsData socialLinks={socialLinks} />}
    </section>
  )
}

const ProfileMainData = ({ userInfo }) => {
  return (
    <ul className={s.list}>
      <li>
        {userInfo.aboutMe}
      </li>
      <li>
        Looking for a job: <b>{userInfo.lookingForAJob ? 'Looking for' : 'nope'}</b>
        <ul className={s.list}>
          <li>
            {userInfo.lookingForAJobDescription}
          </li>
        </ul>
      </li>
    </ul>
  )
}

const ProfileContactsData = ({ socialLinks }) => {
  return (
    <>
      {
        socialLinks.length > 0 && <div className={s.contacts}>
          <h3>
            contacts:
        </h3>
          <ul className={`${s['contacts__lsit']} main-list`}>
            {socialLinks}
          </ul>
        </div>
      }
    </>
  )
}

export default ProfileInfo;