import createReducer from '../../createReducer';
const guid = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4() + ' - ' + Date.now();
}

// ------------------------------------
// Constants
// ------------------------------------
const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
const CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS';

// ------------------------------------
// Actions
// ------------------------------------
export const notificationAdd = (data) => ({ type: ADD_NOTIFICATION, payload: data });
export const notificationRemove = (data) => ({ type: REMOVE_NOTIFICATION, payload: data });
export const notificationsClear = () => ({ type: CLEAR_NOTIFICATIONS });

export const actions = {
  notificationAdd,
  notificationRemove,
  notificationsClear,
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  notifications: {},
};
export default createReducer(initialState, {
  [ADD_NOTIFICATION]  (state, payload = null) {
    if (payload !== null) {
      const unique_uuid = guid();
      const newNotif = {};
      newNotif[unique_uuid] = {
        message: payload,
      };
      const newNotifications = {
        ...state.notifications,
        ...newNotif,
      };
      return {...state, notifications: {...newNotifications}}
    }
    return state;
  },
  [REMOVE_NOTIFICATION] (state, payload = null) {
    if (payload !== null) {
      const newState = state;
      delete newState.notifications[payload];
      return newState;
    }
    return state;
  },
  [CLEAR_NOTIFICATIONS] () {
    return initialState;
  },
});
