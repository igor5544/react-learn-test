import React, { useEffect, useState } from 'react';
import s from './profileStatus.module.css';

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);

    props.updateStatus(status);
  }

  const onStatusChange = (evt) => {
    setStatus(evt.currentTarget.value);
  }

  return (
    <>
      {!editMode ?
        <p onDoubleClick={activateEditMode} className={s.text}>
          {props.status ?
            props.status :
            'Hello everyone!'
          }
        </p> :
        <input
          autoFocus
          onChange={onStatusChange}
          onBlur={deactivateEditMode}
          className={s['text-field']}
          type="text"
          name={'Status'}
          value={status}
        />
      }
    </>
  )
}

export default ProfileStatusWithHooks;