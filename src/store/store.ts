import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import storage from 'redux-persist/lib/storage/session';
import { persistStore, persistReducer } from 'redux-persist';
// import autoMergeLevel1
// from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import createRootReducer from './reducer';

export const history: any = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['router'],
  // stateReconciler: autoMergeLevel1
};

const persistedReducer = persistReducer<any>(
  persistConfig,
  createRootReducer(history)
);

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

export type AppDispatch = typeof store.dispatch;

const persistedStore = persistStore(store);

export { persistedStore };

export default store;