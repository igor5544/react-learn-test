import React from 'react';
import Post from './Post';

const PostsList = ({ posts }) => {
  return (
    <ul className="main-list">
      {posts.map(post =>
        <Post message={post.message} likes={post.likes} dislikes={post.dislikes} key={post.id} />
      )}
    </ul>
  )
}

export default PostsList;