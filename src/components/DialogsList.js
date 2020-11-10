import React from 'react';
import s from '../styles/dialogList.module.css';
import DialogItem from './DialogItem';

const DialogsList = ({ dialogs, className }) => {

  return (
    <ul className={`${s.list} ${className} main-list`}>
      {dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
      )}
    </ul>
  )
}

export default DialogsList;