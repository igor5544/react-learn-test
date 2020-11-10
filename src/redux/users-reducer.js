import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return ({
        ...state,
        users: action.users,
      })
    case FOLLOW:
      return ({
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
      })
    case UNFOLLOW:
        return({
          ...state,
          users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
      })
    case SET_TOTAL_USERS_COUNT:
      return ({
        ...state,
        totalUsersCount: action.usersCount
      })
    case SET_CURRENT_PAGE:
      return ({
        ...state,
        currentPage: action.pageIndex
      })
    case TOGGLE_IS_FETCHING:
      return ({
        ...state,
        isFetching: action.isFetching
      })
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return ({
        ...state,
        followingInProgress: action.isFetching ?
          [...state.followingInProgress, action.userID] :
          [...state.followingInProgress.filter(id => id !== action.userID)]
      })
    default:
      return state;
  }
}

export const followSuccess = (userID) => {
  return {
    type: FOLLOW,
    userID
  }
}

export const unfollowSuccess = (userID) => {
  return {
    type: UNFOLLOW,
    userID
  }
}

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

export const setCurrentPage = (pageIndex) => {
  return {
    type: SET_CURRENT_PAGE,
    pageIndex
  }
}

export const setTotalUsersCount = (usersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    usersCount
  }
}

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}

export const toggleIsFollowingProgress = (isFetching, userID) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userID
  }
}

export const getUsers = (currentPage, pageSize) => async dispatch => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPage));

  const response = await usersAPI.getUsers(currentPage, pageSize);
  const totalCount = response.totalCount;

  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(totalCount));
  dispatch(toggleIsFetching(false));
}

const followUnfollowFlow = async (userID, dispatch, apiMethod, actionCreator) => {
  dispatch(toggleIsFollowingProgress(true, userID));

  const response = await apiMethod(userID);

  if (response.resultCode === 0) {
    dispatch(actionCreator(userID));
  }
  dispatch(toggleIsFollowingProgress(false, userID));
}

export const follow = (userID) => async dispatch => {
  const apiMethod = usersAPI.follow.bind(usersAPI);

  followUnfollowFlow(userID, dispatch, apiMethod, followSuccess);
}

export const unfollow = (userID) => async dispatch => {
  const apiMethod = usersAPI.unfollow.bind(usersAPI);

  followUnfollowFlow(userID, dispatch, apiMethod, unfollowSuccess);
}

export default usersReducer;