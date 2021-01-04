import { combineReducers } from 'redux';
import {FeedReducer} from './FeedReducer'

const rootReducer = combineReducers({
    FeedReducer:FeedReducer
})

export default rootReducer