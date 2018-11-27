//const ADD_TODO = 'ADD_TODO'
const TOGGLE_SERVICE = 'TOGGLE_SERVICE'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

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

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_SELECTED: 'SHOW_SELECTED',
    //SHOW_ACTIVE: 'SHOW_ACTIVE'
  }