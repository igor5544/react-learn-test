import React from 'react';
import Message from './Message';
import s from '../styles/chatItem.module.css';
import MessageForm from './MessageForm';

const ChatItem = ({ dialog, userId, mainUser, sendNewMessage}) => {

  return (
    <li key={dialog.id}>
      <ul className={`main-list ${s.chat}`}>
        {dialog.messages.map(message =>
          <Message name={message.me ? 'Me' : dialog.name} message={message.message} me={message.me} img={message.me ? mainUser.img : dialog.img} key={message.id}/>
        )}
      </ul>
      <MessageForm btnText={'Send'} addText={sendNewMessage} id={userId}/>
    </li>
  )
}

export default ChatItem;