import { mainUser, users } from './global-state';

const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
  users,
  mainUser,
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return ({
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return {
              ...user, messages:
                [
                  ...user.messages,
                  {
                    id: new Date(),
                    message: action.message,
                    me: true
                  }
                ],
              newMessageText: ''
            };
          }
          return user;
        })
      })
    default:
      return state;
  }
}

export const sendNewMessage = (message, userID) => {
  return {
    type: SEND_MESSAGE,
    userID,
    message
  }
}

export default dialogsReducer;