import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'c2000f58-5fdf-49e4-81b7-b9b544914fce'
  }
});

export const usersAPI = {
  auth() {
    return instance.get(`auth/me`).then(response =>
      response.data
    );
  },
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response =>
      response.data
    );
  },
  follow(id) {
    return instance.post(`follow/${id}`).then(response =>
      response.data
    );
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then(response =>
      response.data
    );
  }
}

export const profileAPI = {
  getProfile(userID) {
    return instance.get(`profile/${userID}`).then(response =>
      response.data
    );
  },
  getStatus(userID) {
    return instance.get(`profile/status/${userID}`).then(response =>
      response.data
    );
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status }).then(response =>
      response.data
    );
  },
  savePhoto(file) {
    const formData = new FormData();
    formData.append('image', file);

    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response =>
      response.data
    );
  },
  saveProfile(profileData) {
    return instance.put('profile/', profileData).then(response =>
      response.data
    );
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then(response =>
      response.data
    );
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response =>
      response.data
    );
  },
  logout() {
    return instance.delete(`auth/login`).then(response =>
      response.data
    );
  },
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.delete(`security/get-captcha-url`).then(response =>
      response.data
    );
  }
}