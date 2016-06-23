import { combineReducers } from 'redux';
import account from './account';
import sidebar from './sidebar';
import venues from './venues';
import notifications from './notifications';
// import notifications from './notifications';

export default combineReducers({
  account,
  sidebar,
  venues,
  notifications,
});
