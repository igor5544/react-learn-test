import React from 'react';
import s from '../styles/dialogs.module.css';
import DialogsList from '../components/DialogsList';
import Chat from '../components/Chat';

const Dialogs = ({ dialogsData, sendNewMessage}) => {
  return (
    <section>
      <h2 className="main-title">Dialogs</h2>
      <div className={s.wrapper}>
        <DialogsList dialogs={dialogsData.users} className={s['users-list']} />
        <Chat sendNewMessage={sendNewMessage} dialogs={dialogsData.users} mainUser={dialogsData.mainUser} messageText={dialogsData.newMessageText} />
      </div>

    </section>
  )
}

export default Dialogs;
