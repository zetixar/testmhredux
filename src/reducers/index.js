import { combineReducers } from 'redux'
import counter from './counter'
import header from './header'

const rootReducer = combineReducers({
  counter,
  header
})

export default rootReducer
