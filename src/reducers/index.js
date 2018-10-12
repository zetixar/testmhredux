import { combineReducers } from 'redux'
import counter from './counter'
import header from './header'
import screen from './screen'
import activeSlide from './activeSlide'

const rootReducer = combineReducers({
  counter,
  header,
  activeSlide,
  screen
})

export default rootReducer
