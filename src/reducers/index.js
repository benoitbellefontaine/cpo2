import { combineReducers } from 'redux'
import selected from './selected'
import services from './services'
import situations from './situations'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    services,
    selected,
    situations,
    visibilityFilter
})