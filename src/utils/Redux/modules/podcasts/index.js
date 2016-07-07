import createReducer from '../../createReducer';
import { fetchPodcasts } from '../../../api/podcasts';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

// ------------------------------------
// Constants
// ------------------------------------
const PODCAST_RECEIVE = 'PODCAST_RECEIVE';
const PODCAST_CLEAR = 'PODCAST_CLEAR';

// ------------------------------------
// Actions
// ------------------------------------
export const podcastsFetch = () =>
  fetchPodcasts().then(data => {
    return podcastsReceive(data);
  })
const podcastsReceive = (payload) => ({
  type: PODCAST_RECEIVE,
  payload
});
export const podcastClear = () => ({
  type: PODCAST_CLEAR
})
export const actions = {
  podcastsFetch,
  podcastClear
};


// ------------------------------------
// State
// ------------------------------------
const initialState = {
  podcasts: [],
};


// ------------------------------------
// Reducer
// ------------------------------------
export default createReducer(initialState, {
  [PODCAST_RECEIVE]  (state, payload = null) {
    const newChapters = [];
    payload.forEach(el => {
      const fileName = el.enclosure.$.url.split('/').pop();
      const newEl = Object.assign({}, el, {fileName});
      newChapters.push(newEl);

      //Compares if recieved podcasts already existss in the current state, if they do, we update the state.
      /*
      if (state.podcasts.length > 0) {
        state.podcasts.forEach((stateEl, stateI) => {
          if (stateEl.guid._ === el.guid._ ) {
            newChapters.push(stateEl);
            return;
          } else {
            newChapters.push(el);
            return;
          }
        });
      } else {
        newChapters.push(el);
      }
      */
    });
    const newState = {...state};
    newChapters.map((el) => {
      el.newPubDate = moment(el.pubDate).format('LL');
    })
    newState.podcasts = newChapters;
    return newState;
  },
  [PODCAST_CLEAR]  (state, payload = null) {
    const newState = {...state};
    newState.podcasts = initialState.podcasts;
    return newState;
  },
})
