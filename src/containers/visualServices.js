import { connect } from 'react-redux'
import { toggleService } from '../actions'
import Services from '../components/services'
import { VisibilityFilters } from '../actions'

const getVisibleServices = (services, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return services
    case VisibilityFilters.SHOW_SELECTED:
      return services.filter(t => t.selected)
    case VisibilityFilters.SHOW_ACTIVE:
      return services.filter(t => !t.selected)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  services: getVisibleServices(state.services, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleService: id => dispatch(toggleService(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Services)