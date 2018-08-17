import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 var initialState = {
   currentVideo: null,
   videoList: []
 };

const store = createStore(rootReducer, initialState, composeEnhancers(
 applyMiddleware(thunk))); //HMM: May or may not need to pass in an initial state

export default store;