import createReducer from '../../createReducer';

// ------------------------------------
// Constants
// ------------------------------------
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
// ------------------------------------
// Actions
// ------------------------------------
export const logIn = (data) => ({ type: LOG_IN, payload: data });
export const logOut = (data) => ({ type: LOG_OUT, payload: data });
export const actions = {
  logIn,
  logOut,
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loggedIn: false,
  userData: {},
};
export default createReducer(initialState, {
  [LOG_OUT]  () {
    return initialState;
  },
  [LOG_IN] (state, payload = null) {
    if (payload !== null) {
      return { ...state, loggedIn: true, userData: { ...payload } };
    }
    return state;
  },
});
