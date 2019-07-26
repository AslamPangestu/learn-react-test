import { combineReducers } from 'redux'
import post from '../Post/'

export default combineReducers({
  post: post.reducer
})
