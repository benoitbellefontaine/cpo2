//const ADD_TODO = 'ADD_TODO'
const TOGGLE_SERVICE = 'TOGGLE_SERVICE'
const SELECT_SERVICE = 'SELECT_SERVICE'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
const SET_SITUATION_FILTER = 'SET_SITUATION_FILTER'

/*function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}*/

export const toggleService = id => {
    return {
      type: TOGGLE_SERVICE,
      id
    }
}

export const selectService = id => {
    return {
      type: SELECT_SERVICE,
      id
    }
}

export const selectCycle = id => {
    return {
        type: 'SELECT_CYCLE',
        id
    }
}

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})

export const setSituationFilter = filter => ({
    type: SET_SITUATION_FILTER,
    filter
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_SELECTED: 'SHOW_SELECTED',
    SHOW_DEMARRAGE: 'SHOW_DEMARRAGE',
    SHOW_COURTTERME: 'SHOW_COURTTERME',
    SHOW_MOYENTERME: 'SHOW_MOYENTERME',
    SHOW_EXCELLENCE: 'SHOW_EXCELLENCE',
    SHOW_REDRESSEMENT: 'SHOW_REDRESSEMENT'
}

export const SituationFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DEMARRAGE: 'SHOW_DEMARRAGE',
    SHOW_COURTTERME: 'SHOW_COURTTERME',
    SHOW_MOYENTERME: 'SHOW_MOYENTERME',
    SHOW_EXCELLENCE: 'SHOW_EXCELLENCE',
    SHOW_REDRESSEMENT: 'SHOW_REDRESSEMENT'
}