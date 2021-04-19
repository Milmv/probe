import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./rootReducer";
import rootSaga from './saga';


import { UsersState } from './users/types/state';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface RootState {
  users: UsersState;
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);