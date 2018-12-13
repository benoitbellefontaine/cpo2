import { connect } from 'react-redux'
import { selectService, toggleService, VisibilityFilters } from '../../actions'
import Services from '../../components/services'
import {bindActionCreators} from 'redux'

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
  services: getVisibleServices(state.services, state.visibilityFilter)
})

/*const mapDispatchToProps = dispatch => ({
  bindActionCreators({
  toggleService: id => dispatch(toggleService(id)),
  selectService: id => dispatch(selectService(id))},dispatch)
})*/

function mapDispatchToProps(dispatch) {
  return bindActionCreators({toggleService: toggleService,selectService: selectService,}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Services)