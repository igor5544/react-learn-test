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

export const users = [
  { id: 1, name: 'Dmitry', img: 'https://i.pinimg.com/originals/e1/13/f6/e113f64f714bcf8a32d0b183727e8f38.jpg', friend: true, messages: messages[0] },
  { id: 2, name: 'Sasha', img: 'https://www.hdwallpapers.in/download/jake_sully_avatar_2009-normal.jpg', friend: false, messages: messages[1] },
  { id: 3, name: 'Vlad', img: 'https://wallbox.ru/wallpapers/main/201546/c26dc72f2bd9e7f.jpg', friend: true, messages: messages[2] },
  { id: 4, name: 'Katya', img: 'http://getwallpapers.com/wallpaper/full/0/f/5/1232404-download-avatar-hd-wallpaper-1920x1080-photo.jpg', friend: true, messages: messages[3] },
  { id: 5, name: 'Valera', img: 'https://img3.goodfon.ru/wallpaper/nbig/4/99/neytiri-avatar.jpg', friend: false, messages: messages[4] },
];

export const mainUser = {
  img: 'https://i.pinimg.com/originals/d4/d7/f7/d4d7f72121dc2c81e04829f0184396d1.jpg'
}

const friends = users.filter(user => user.friend);
const MAX_TOP_FRIENDS = 5;

export const topFriends = friends.length < MAX_TOP_FRIENDS ? friends : friends.slice(0, MAX_TOP_FRIENDS);
