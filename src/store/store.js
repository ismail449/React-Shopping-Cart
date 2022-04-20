import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducers/reducers';

const initialState = {};

const reduxDev = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  reduxDev(applyMiddleware(reduxThunk)),
);

export default store;
