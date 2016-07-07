import createReducer from '../../createReducer';
import { fetchMediumPosts } from '../../../api/medium';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

// ------------------------------------
// Constants
// ------------------------------------
const MEDIUM_RECEIVE = 'MEDIUM_RECEIVE';
const MEDIUM_CLEAR = 'MEDIUM_CLEAR';

// ------------------------------------
// Actions
// ------------------------------------
export const mediumFetch = () =>
  fetchMediumPosts().then(data => {
    debugger;
    return mediumRecieve(data);
  })
const mediumRecieve = (payload) => ({
  type: MEDIUM_RECEIVE,
  payload
});
export const mediumClear = () => ({
  type: MEDIUM_CLEAR
})
export const actions = {
  mediumFetch,
  mediumRecieve,
  mediumClear
};


// ------------------------------------
// State
// ------------------------------------
const initialState = {
  medium: [],
};


// ------------------------------------
// Reducer
// ------------------------------------
export default createReducer(initialState, {
  [MEDIUM_RECEIVE]  (state, payload = null) {
    debugger;
    const newMedium = [];
    const newState = {...state};
    newState.newMedium = newMedium;
    return newState;
  },
  [MEDIUM_CLEAR]  (state, payload = null) {
    const newState = {...state};
    newState.medium = initialState.medium;
    return newState;
  },
})
