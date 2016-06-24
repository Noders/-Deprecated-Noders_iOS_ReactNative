import createReducer from '../../createReducer';
const videosUrl = {
	'videos_endpoint_search': 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDGuMR3AHQ5kmXW5hdD_Ia9iEuv7V4LA-c&channelId=UC7tUsO3S7424TMcgSCUOCow&part=snippet,id&order=date&maxResults=50',
	'videos_endpoint': 'https://www.googleapis.com/youtube/v3/videos?part=id,snippet,contentDetails&id={}&key=AIzaSyDGuMR3AHQ5kmXW5hdD_Ia9iEuv7V4LA-c'
}


// ------------------------------------
// Constants
// ------------------------------------
const VIDEOS_GET = 'VIDEOS_GET';
const VIDEOS_GET_FULLFILLED = 'VIDEOS_GET_FULLFILLED';
const VIDEOS_GET_REJECTED = 'VIDEOS_GET_REJECTED';

// ------------------------------------
// Actions
// ------------------------------------
export const videosGet = () => ({
  type: VIDEOS_GET,
  payload: {
		promise: fetch(videosUrl.videos_endpoint_search)
	}
});
export const actions = {
  videosGet,
};


// ------------------------------------
// State
// ------------------------------------
const initialState = {
  videos: {},
};


// ------------------------------------
// Reducer
// ------------------------------------
export default createReducer(initialState, {
  [VIDEOS_GET_FULLFILLED]  (state, payload = null) {
    debugger;
    if (payload !== null) {
      return {...state, videos: payload}
    }
    return state;
  },
  [VIDEOS_GET_REJECTED]  (state, payload = null) {
    debugger;
    if (payload !== null) {
      return {...state, videos: payload}
    }
    return state;
  },
  [VIDEOS_GET]  (state, payload = null) {
    debugger;
    return state;
  },
})
