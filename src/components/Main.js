import React from 'react';
import { Route } from "react-router-dom";
import { withSuspense } from '../hoc/withSuspense';
import s from '../styles/main.module.css';
import Navbar from './Navbar';

const DialogsContainer = React.lazy(() => import('../pages/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('../pages/ProfileContainer'));
const LoginContainer = React.lazy(() => import('../pages/LoginContainer'));
const UsersContainer = React.lazy(() => import('../pages/UsersContainer'));
const Settings = React.lazy(() => import('../pages/Settings'));
const Music = React.lazy(() => import('../pages/Music'));
const News = React.lazy(() => import('../pages/News'));

const Main = () => {
  return (
    <main className={s.main}>
      <Navbar className={s.navbar} />
      <section className={s.content}>
        <Route path="/profile/:userID?" render={withSuspense(ProfileContainer)} />
        <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
        <Route path="/news" render={withSuspense(News)} />
        <Route path="/music" render={withSuspense(Music)} />
        <Route path="/users" render={withSuspense(UsersContainer)} />
        <Route path="/settings" render={withSuspense(Settings)} />
        <Route path="/login" render={withSuspense(LoginContainer)} />
      </section>
    </main>
  )
}

export default Main;
