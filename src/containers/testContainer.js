import React, {Component} from 'react'
import {connect} from 'react-redux'
import { selectService, toggleService } from '../actions'
import Services from '../components/services'
import {bindActionCreators} from 'redux'

class List extends Component {
  render() {
    return (
      <div>{this.props.selected}</div>
    );
  }
}
function mapStateToProps(state) {
  return {
    selected: state.selection.selected
  };
}
/*function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleService: toggleService,
    selectService: selectService
  }, dispatch);
}*/
const mapDispatchToProps = dispatch => ({
  //toggleService: id => dispatch(toggleService(id)),
  selectService: service => dispatch(selectService(service))
})
export default connect(mapStateToProps,mapDispatchToProps)(List)