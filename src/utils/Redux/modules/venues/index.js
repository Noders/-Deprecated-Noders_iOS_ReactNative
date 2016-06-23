import createReducer from '../../createReducer';

// ------------------------------------
// Constants
// ------------------------------------
const VENUES_SET = 'VENUES_SET';
const VENUES_UNSET = 'VENUES_UNSET';
const VENUE_CURRENT_SET = 'VENUE_CURRENT_SET';
const VENUE_CURRENT_UNSET = 'VENUE_CURRENT_UNSET';
const VENUE_CURRENT_SCHEDULE_SET = 'VENUE_CURRENT_SCHEDULE_SET';
const VENUE_CURRENT_SCHEDULE_UNSET = 'VENUE_CURRENT_SCHEDULE_UNSET';
const VENUE_CLEAR = 'VENUE_CLEAR';

// ------------------------------------
// Actions
// ------------------------------------
export const venuesSet = (data) => ({ type: VENUES_SET, payload: data });
export const venuesUnset = () => ({ type: VENUES_UNSET });
export const venueCurrentSet = (data) => ({ type: VENUE_CURRENT_SET, payload: data });
export const venueCurrentUnset = () => ({ type: VENUE_CURRENT_UNSET });
export const venueCurrentScheduleSet = (data) => ({ type: VENUE_CURRENT_SCHEDULE_SET, payload: data });
export const venueCurrentScheduleUnset = () => ({ type: VENUE_CURRENT_SCHEDULE_UNSET });
export const venueClear = () => ({ type: VENUE_CLEAR });

export const actions = {
  venuesSet,
  venuesUnset,
  venueCurrentSet,
  venueCurrentUnset,
  venueCurrentScheduleSet,
  venueCurrentScheduleUnset,
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  venues: {},
  current: {},
  currentSchedule: {},
};
export default createReducer(initialState, {

  [VENUES_SET]  (state, payload = null) {
    if (payload !== null) {
      return {...state, venues: payload}
    }
    return state;
  },
  [VENUES_UNSET] (state) {
    return {...state, venues: initialState.venues}
  },
  [VENUE_CURRENT_SET]  (state, payload = null) {
    if (payload !== null) {
      return {...state, current: {...payload}}
    }
    return state;
  },
  [VENUE_CURRENT_UNSET]  (state) {
    return {...state, current: initialState.current}
  },
  [VENUE_CURRENT_SCHEDULE_SET]  (state, payload = null) {
    if (payload !== null) {
      return {...state, currentSchedule: {...payload}}
    }
    return state;
  },
  [VENUE_CURRENT_SCHEDULE_UNSET]  (state) {
    return {...state, currentSchedule: initialState.currentSchedule}
  },
  [VENUE_CLEAR]  () {
    return initialState;
  },

});
