import { connect } from 'react-redux'
import { selectCycle } from '../../actions'
import List from '../../components/situations/list'
import { VisibilityFilters } from '../../actions'

const getVisibleCycles = (cycles, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return cycles
    case VisibilityFilters.SHOW_SELECTED:
      return cycles.filter(t => t.selected)
    default:
    return cycles
  }
} 

const mapStateToProps = (state, ownProps) => {
  return {
    cycles: getVisibleCycles( state.cycles, ownProps.filter ),
    language: ownProps.language 
  }
}

const mapDispatchToProps = dispatch => ({
  selectCycle: id => dispatch(selectCycle(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)