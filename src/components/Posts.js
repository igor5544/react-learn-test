import React from 'react';
import PostsList from './Postslist';
import MessageForm from './MessageForm';

const Posts = ({ posts, addPost }) => {
  return (
    <section>
      <h2 className="main-title">Posts</h2>
      <MessageForm btnText={'Add post'} addText={addPost} />
      <PostsList posts={posts} />
    </section>
  )
}

export default React.memo(Posts);;