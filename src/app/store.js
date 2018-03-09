import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools as compose } from 'redux-devtools-extension/developmentOnly';

import reducers from './reducers';

const middleware = [thunk];
middleware.push(createLogger());

let initialState = {};
typeof window !== "undefined" && (initialState = window.__REDUX_STATE__);

const store = createStore(combineReducers(reducers),initialState,compose(applyMiddleware(...middleware)));

export default store;
