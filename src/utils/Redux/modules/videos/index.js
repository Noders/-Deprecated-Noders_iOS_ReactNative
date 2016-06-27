import createReducer from '../../createReducer';
import { fetchVideos } from '../../../api/videos';

// ------------------------------------
// Constants
// ------------------------------------
const VIDEOS_RECEIVE = 'VIDEOS_RECEIVE';

// ------------------------------------
// Actions
// ------------------------------------
export const videosFetch = () =>
  fetchVideos().then(data => {
    return videosReceive(data);
  })
const videosReceive = (payload) => ({
  type: VIDEOS_RECEIVE,
  payload
});
export const actions = {
  videosFetch
};


// ------------------------------------
// State
// ------------------------------------
const initialState = {
  videos: [],
};


// ------------------------------------
// Reducer
// ------------------------------------
export default createReducer(initialState, {
  [VIDEOS_RECEIVE]  (state, payload = null) {
    const newVids = [];
    //Compares if recieved videos already existss in the current state, if they do, we update the state.
    payload.items.forEach(el => {
      if (el.kind === "youtube#video") {
        if (state.videos.length > 0) {
          state.videos.forEach((stateEl, stateI) => {
            if (stateEl.id === el.id ) {
              if(stateEl.etag === el.etag){
                newVids.push(stateEl);
              } else {
                newVids.push(el);
              }
            };
          });
        } else {
          newVids.push(el);
        }
      }
    });
    const newState = {...state};
    newState.videos = newVids
    return newState;
  },
})
