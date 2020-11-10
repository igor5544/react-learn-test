import React from 'react';
import s from '../styles/profileInfo.module.css';
import userPhoto from '../assets/images/user.png';
import ProfileStatus from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = ({ userInfo, status, updateStatus }) => {

  const socialLinks = [];

  for (const link in userInfo.contacts) {
    if (userInfo.contacts[link] !== null && userInfo.contacts[link] !== '') {

      socialLinks.push(
        <li key={link} className="card-panel"><b>{link}:</b> <a className="main-link" target="_blank" href={`https://${userInfo.contacts[link]}`}>{userInfo.contacts[link]}</a></li>
      )
    }
  }

  return (
    <section>
      <img src="https://mobimg.b-cdn.net/pic/v2/gallery/preview/dorogi-pejzazh-priroda-48515.jpg" style={{ display: 'block', objectFit: 'cover' }} alt="long road" height="320" />
      <div className={s.user}>
        <img
          className={s['avatar-img']}
          src={userInfo.photos.large ? userInfo.photos.large : userPhoto}
          alt="user avatar" height="50"
        />
        <div>
          <h2 className={s.name}>
            {userInfo.fullName}
          </h2>
          <ProfileStatus status={status} updateStatus={updateStatus} />
          <ul className={s.list}>
            <li>
              {userInfo.aboutMe}
            </li>
            <li>
              Looking For job: <b>{userInfo.lookingForJob ? 'Looking for' : 'nope'}</b>
              <ul className={s.list}>
                <li>
                  {userInfo.lookingForAJobDescription}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

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
    </section>
  )
}

export default ProfileInfo;