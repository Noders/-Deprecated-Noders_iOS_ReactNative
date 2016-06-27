import { AsyncStorage } from 'react-native'
import { applyMiddleware, compose, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './modules';

// middleWares
import devTools from 'remote-redux-devtools';
import { persistStore, autoRehydrate } from 'redux-persist';

// import Auth from '../Auth0';
// import { Actions } from 'react-native-router-flux';

const persistConfig = {
  storage: AsyncStorage,
  skipRestore: false,
  blackList: ['notifications'],
}

const addPromiseSupportToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    if (typeof action.then === 'function') {
      return action.then(rawDispatch);
    }
    return rawDispatch(action);
  }
}

export default function configureStore (initialState, __DEBUG__) {
  let enhancer;
  //const middleware = applyMiddleware(thunk);

  if(__DEBUG__){
    enhancer = compose(autoRehydrate(), devTools());
  } else {
    enhancer = compose(autoRehydrate());
  }
  const store = createStore(
    rootReducer,
    {},
    enhancer
  );

  store.dispatch = addPromiseSupportToDispatch(store);

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
