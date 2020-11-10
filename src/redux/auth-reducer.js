import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'kama/auth/SET-USER0DATA';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return ({
        ...state,
        ...action.payload
      })
    default:
      return state;
  }
}

export const setUserData = (id, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: {
      id,
      email,
      login,
      isAuth
    }
  }
}

export const getAuthUserData = () => async dispatch => {
  const response = await authAPI.me();

  if (response.resultCode === 0) {
    const { id, login, email } = response.data;
    dispatch(setUserData(id, email, login, true));
  }
}

export const login = (email, password, rememberMe) => async dispatch => {
  const response = await authAPI.login(email, password, rememberMe);

  if (response.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    const message = response.messages.length > 0 ? response.messages[0] : 'Some error';
    dispatch(stopSubmit('login', { _error: message }));
  }
}

export const logout = () => async dispatch => {
  const response = await authAPI.logout();

  if (response.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
}

export default authReducer;