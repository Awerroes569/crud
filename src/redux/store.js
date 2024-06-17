import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import postsReducer from './postRedux';
import cathegoryReducer from './cathegoryRedux';

const subreducers = {
    posts: postsReducer,
    cathegories: cathegoryReducer,
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;