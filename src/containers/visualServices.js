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
    case 'SHOW_DEMARRAGE': 
      return services.filter(t => ( t.type === 'demarrage' ))
    case 'SHOW_COURTTERME': 
      return services.filter(t => ( t.type === 'court terme' ))
    case 'SHOW_MOYENTERME': 
      return services.filter(t => ( t.type === 'moyen terme' ))
    case 'SHOW_EXCELLENCE': 
      return services.filter(t => ( t.type === 'excellence' ))
    case 'SHOW_REDRESSEMENT': 
      return services.filter(t => ( t.type === 'redressement' ))
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  services: getVisibleServices(state.services, state.visibilityFilter),
  //selected: state.selected
})

const mapDispatchToProps = dispatch => ({
  toggleService: id => dispatch(toggleService(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Services)