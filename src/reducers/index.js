import { combineReducers } from 'redux'
import services from './services'
import situations from './situations'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    services,
    situations,
    visibilityFilter
})