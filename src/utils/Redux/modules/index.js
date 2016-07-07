import { combineReducers } from 'redux';
import videos from './videos';
import podcasts from './podcasts';
import medium from './medium';

export default combineReducers({
  videos,
  podcasts,
  medium
});
