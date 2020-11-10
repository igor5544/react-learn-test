import React from 'react';
import { NavLink } from "react-router-dom";
import s from '../styles/user.module.css';
import userPhoto from '../assets/images/user.png';

const User = ({ userInfo, follow, unfollow, followingInProgress }) => {

  return (
    <li className={s.user}>
      <article className={s['user-bar']}>
        <div className={s['user-action__wrapper']}>
          <NavLink to={`/profile/${userInfo.id}`} className="main-link" style={{ display: 'block' }}>
            {
              userInfo.photos.small != null ?
                <img src={userInfo.photos.small} alt={'Аватар ' + userInfo.fullName} /> :
                <img src={userPhoto}
                  alt={'Аватар заглушка'} />
            }
          </NavLink>
          {
            userInfo.followed ?
              <button disabled={followingInProgress.some(id => id === userInfo.id)}
                className={s['btn--active']}
                onClick={() => {
                  unfollow(userInfo.id);
                }}>Unfollow</button> :
              <button
                disabled={followingInProgress.some(id => id === userInfo.id)}
                onClick={() => {
                  follow(userInfo.id);
                }}>follow
              </button>
          }
        </div>
        <div className={s['user-info__wrapper']}>
          <div className={s['user-info__left-wrapper']}>
            <h3>
              {userInfo.name}
            </h3>
            <p>
              {
                userInfo.status != null ?
                  userInfo.status :
                  'Hi everyone'
              }
            </p>
          </div>
          <div className={s['user-info__right-wrapper']}>
            {/*  <p>
              {userInfo.location.city},
            </p>
            <p>
              {userInfo.location.country}
            </p> */}
          </div>
        </div>

      </article>
    </li>
  )
}

export default User;