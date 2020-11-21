import { profileAPI } from '../api/api';
import { mainUser } from './global-state';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'kama/profile/ADD-POST';
const SET_USER_PROFILE = 'kama/profile/SET-USER-PROFILE';
const SET_STATUS = 'kama/profile/SET-STATUS';
const DELETEE_POST = 'kama/profile/DELETEE-POST';
const SAVE_PHOTO_SUCCESS = 'kama/profile/SAVE-PHOTO-SUCCESS';

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
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos
        }
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

export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos
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

export const savePhoto = (file) => async dispatch => {
  const response = await profileAPI.savePhoto(file);

  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos));
  }
}

export const saveProfile = (profileData) => async (dispatch, getState) => {
  const response = await profileAPI.saveProfile(profileData);

  if (response.resultCode === 0) {
    dispatch(getUserProfile(getState().auth.id));
  } else {
    const message = response.messages.length > 0 ? response.messages[0] : 'Some error';

    dispatch(stopSubmit('ProfileData', { _error: message }));
    return Promise.reject(message);
  }
}

export default profileReducer;