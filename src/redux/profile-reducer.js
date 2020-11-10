import { profileAPI } from '../api/api';
import { mainUser } from './global-state';

const ADD_POST = 'kama/profile/ADD-POST';
const SET_USER_PROFILE = 'kama/profile/SET-USER-PROFILE';
const SET_STATUS = 'kama/profile/SET-STATUS';
const DELETEE_POST = 'kama/profile/DELETEE-POST';

const posts = [
  { id: '1', message: 'Hi, how are you?', likes: '21', dislikes: '2' },
  { id: '2', message: 'It\'s my first post', likes: '32', dislikes: '0' },
]

const initialState = {
  posts,
  mainUser,
  status: ''
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: new Date(),
            message: action.message,
            likes: '0',
            dislikes: '0'
          }
        ]
      };
    case DELETEE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
}

export const addPost = (message) => {
  return {
    type: ADD_POST,
    message
  }
}

export const deletePost = (postId) => {
  return {
    type: DELETEE_POST,
    postId
  }
}

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  }
}

export const getUserProfile = (userID) => async dispatch => {
  const response = await profileAPI.getProfile(userID);

  dispatch(setUserProfile(response));
}

export const getUserStatus = (userID) => async dispatch => {
  const response = await profileAPI.getStatus(userID);
  
  dispatch(setStatus(response));
}

export const updateStatus = (status) => async dispatch => {
  const response = await profileAPI.updateStatus(status);

  if (response.resultCode === 0) {
    dispatch(setStatus(status));
  }
}

export default profileReducer;