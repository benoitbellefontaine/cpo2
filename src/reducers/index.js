import { combineReducers } from 'redux'
import selected from './selected'
import services from './services'
import cycles from './cycles'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    services,
    selected,
    cycles,
    visibilityFilter
})