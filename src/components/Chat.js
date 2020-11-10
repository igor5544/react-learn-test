import React from 'react';
import { Route } from "react-router-dom";
import s from '../styles/chat.module.css';
import ChatItem from './ChatItem';

const Chat = ({ sendNewMessage, dialogs, mainUser }) => {

  return (
    <ul className={`${s.dialogs} main-list`}>
      {dialogs.map(dialog =>
        <Route path={`/dialogs/${dialog.id}`} key={dialog.id}
          render={() =>
            <ChatItem dialog={dialog} mainUser={mainUser} userId={dialog.id} sendNewMessage={sendNewMessage}
            />} />
      )}
    </ul>
  )
}

export default Chat;