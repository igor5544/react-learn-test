import profileReducer, { addPost, deletePost } from './profile-reducer';

const initialState = {
  posts: [
    { id: '1', message: 'Hi, how are you?', likes: '21', dislikes: '2' },
    { id: '2', message: 'It\'s my first post', likes: '32', dislikes: '0' },
  ]
};

test('length of posts should be incremented', () => {
  const action = addPost('test-message');

  const newState = profileReducer(initialState, action);

  expect(newState.posts.length).toBe(3);
});

test('post body should be correct', () => {
  const action = addPost('test-message');

  const newState = profileReducer(initialState, action);

  expect(newState.posts[2].message).toBe('test-message');
});

test('after deleting length of messages should be decrement', () => {
  const action = deletePost('1');

  const newState = profileReducer(initialState, action);

  expect(newState.posts.length).toBe(1);
});

test('after deleting length of messages shouldn\'be decrement if id is incorrect', () => {
  const action = deletePost('3');

  const newState = profileReducer(initialState, action);

  expect(newState.posts.length).toBe(2);
});