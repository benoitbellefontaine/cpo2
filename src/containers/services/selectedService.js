import { connect } from 'react-redux'
import { selectService } from '../../actions'
import Selects from '../../components/selects'
import { VisibilityFilters } from '../../actions'

const getVisibleServices = (services, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_SELECT_ONLY:
      return services.filter(t => t.selectOnly)
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  services: getVisibleServices(state.services, VisibilityFilters.SHOW_SELECT_ONLY)
})

export default connect(mapStateToProps)(Selects)