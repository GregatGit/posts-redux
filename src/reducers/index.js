import { combineReducers } from 'redux'
import temp from './reducer_temp'
import posts from './reducer_posts'

const rootReducer = combineReducers({
  posts
})

export default rootReducer