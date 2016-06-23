import createReducer from '../../createReducer';

// ------------------------------------
// Constants
// ------------------------------------
const OPEN = 'OPEN';
const CLOSE = 'CLOSE';
const TOGGLE = 'TOGGLE';
// ------------------------------------
// Actions
// ------------------------------------
export const sideBarOpen = (data) => ({ type: OPEN, payload: data });
export const sideBarClose = (data) => ({ type: CLOSE, payload: data });
export const sideBarToggle = (data) => ({ type: TOGGLE, payload: data });

export const actions = {
  sideBarOpen,
  sideBarClose,
  sideBarToggle,
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isOpen: false,
};
export default createReducer(initialState, {
  [OPEN] (state, payload = null) {
    if (payload !== null) {
      return { ...state, isOpen: true };
    }
    return state;
  },
  [CLOSE]  () {
    return initialState;
  },
  [TOGGLE] (state, payload = null) {
    if (payload !== null) {
      const currentState = state.isOpen;
      return { ...state, isOpen: !currentState };
    }
    return state;
  },
});
