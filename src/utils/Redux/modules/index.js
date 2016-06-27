import { combineReducers } from 'redux';
import videos from './videos';
import podcasts from './podcasts';

export default combineReducers({
  videos,
  podcasts
});
