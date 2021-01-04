import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { enableBatching, batchDispatchMiddleware} from 'redux-batched-actions';

import rootReducer from '../reducers/index'; //Import the reducer
// Connect our store to the reducers
const enhancer = compose(applyMiddleware(thunk,batchDispatchMiddleware  ));

export default createStore(enableBatching(rootReducer), enhancer)
