import React from 'react';
import s from '../styles/post.module.css';

const Post = ({ message, likes, dislikes }) => {
  return (
    <li className={s.item}>
      <img src="https://taxi-forum.ru/sites/default/files/styles/64x64/public/avatars/picture-24090-1554010154.jpg?itok=QXwWtQ9L" alt="another user" height="64" width="64" />
      <div>
        <p>{message}</p>
        <div>
          <button>
            like <span>{likes}</span>
          </button>
          <button>
            dislike <span>{dislikes}</span>
          </button>
        </div>
      </div>
    </li>
  )
}

export default Post;