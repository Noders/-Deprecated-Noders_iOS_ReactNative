import { AsyncStorage } from 'react-native'
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import rootReducer from './modules';
import { persistStore, autoRehydrate } from 'redux-persist';
import { Actions } from 'react-native-router-flux';
// import Auth from '../Auth0';

const persistConfig = {
  storage: AsyncStorage,
  skipRestore: false,
  blackList: ['notifications'],
}
export default function configureStore (initialState, __DEBUG__) {
  let enhancer;
  const middleware = applyMiddleware(thunk);
  if(__DEBUG__){
    enhancer = compose(middleware, autoRehydrate(), devTools());
  } else {
    enhancer = compose(middleware, autoRehydrate());
  }
  const store = createStore(
    rootReducer,
    {},
    enhancer
  );
  persistStore(store, persistConfig,  () => {
    /*
    setTimeout(function () {
      if (store.getState().account.loggedIn) {
        Actions.home();
      } else {
        Auth.logIn(store)
      }
    }, 1000);
    */
  })
  return store;
}
