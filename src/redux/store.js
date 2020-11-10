import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

const mainUser = {
  img: 'https://i.pinimg.com/originals/d4/d7/f7/d4d7f72121dc2c81e04829f0184396d1.jpg'
}

const messages = [
  [
    { id: 1, message: 'Hi', me: false },
    { id: 2, message: 'Hi, what\'s up?', me: true },
  ],
  [
    { id: 1, message: 'Hi', me: true },
    { id: 2, message: 'Hello', me: false },
  ],
  [
    { id: 1, message: 'Yo', me: false },
    { id: 2, message: 'what\'s up?', me: false },
    { id: 3, message: 'Hi, fine, you?', me: true },
    { id: 4, message: 'Me too', me: false },
  ],
  [
    { id: 2, message: 'what\'s up?', me: false },
    { id: 3, message: 'Hi, fine, you?', me: true },
  ],
  [
    { id: 1, message: 'Yo', me: false },
    { id: 2, message: 'what\'s up?', me: false },
  ],
]

const users = [
  { id: 1, name: 'Dmitry', img: 'https://i.pinimg.com/originals/e1/13/f6/e113f64f714bcf8a32d0b183727e8f38.jpg', friend: true, messages: messages[0], newMessageText: '' },
  { id: 2, name: 'Sasha', img: 'https://www.hdwallpapers.in/download/jake_sully_avatar_2009-normal.jpg', friend: false, messages: messages[1], newMessageText: '' },
  { id: 3, name: 'Vlad', img: 'https://wallbox.ru/wallpapers/main/201546/c26dc72f2bd9e7f.jpg', friend: true, messages: messages[2], newMessageText: '' },
  { id: 4, name: 'Katya', img: 'http://getwallpapers.com/wallpaper/full/0/f/5/1232404-download-avatar-hd-wallpaper-1920x1080-photo.jpg', friend: true, messages: messages[3], newMessageText: '' },
  { id: 5, name: 'Valera', img: 'https://img3.goodfon.ru/wallpaper/nbig/4/99/neytiri-avatar.jpg', friend: false, messages: messages[4], newMessageText: '' },
];

const friends = users.filter(user => user.friend);

const MAX_TOP_FRIENDS = 5;
const topFriends = friends.length < MAX_TOP_FRIENDS ? friends : friends.slice(0, MAX_TOP_FRIENDS);

const posts = [
  { id: '1', message: 'Hi, how are you?', likes: '21', dislikes: '2' },
  { id: '2', message: 'It\'s my first post', likes: '32', dislikes: '0' },
]

export let store = {
  _state: {
    profilePage: {
      posts,
      mainUser,
      newPostText: '',
    },
    dialogsPage: {
      users,
      mainUser,
      newMessageText: '',
    },
    navbar: {
      topFriends
    }
  },
  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _addPost() {
    const newPost = {
      id: new Date(),
      message: this._state.profilePage.newPostText,
      likes: '0',
      dislikes: '0'
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  _sendNewMessage(userId) {
    const user = this._state.dialogsPage.users.find(user => user.id === userId);

    const newMessage = {
      id: new Date(),
      message: user.newMessageText,
      me: true
    }

    user.messages.push(newMessage);
    user.newMessageText = '';
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  _updateNewMessageText(userId, newText) {
    const user = this._state.dialogsPage.users.find(user => user.id === userId);

    user.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navbar = navbarReducer(this._state.navbar, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;
