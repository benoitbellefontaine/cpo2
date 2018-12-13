import { connect } from 'react-redux'
import { selectSituation } from '../../actions'
import List from '../../components/situations/list'
import { VisibilityFilters } from '../../actions'

const getVisibleSituations = (situations, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return situations
    case VisibilityFilters.SHOW_SELECTED:
      return situations.filter(t => t.selected)
    //case VisibilityFilters.SHOW_ACTIVE: return situations.filter(t => !t.selected)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
} 

const mapStateToProps = state => ({
  situations: getVisibleSituations(state.cycles, VisibilityFilters.SHOW_ALL)
})

const mapDispatchToProps = dispatch => ({
  selectSituation: id => dispatch(selectSituation(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)