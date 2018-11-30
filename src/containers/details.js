import React, { Component } from 'react'
import { connect } from 'react-redux'

class Details extends Component {
  render() {
    if (!this.props.service) {
      return (
        <div>Select a contact from the list to see its details</div>
      );
    } 
    return (
      <div style={{fontSize: 10}}>
        <h3>Service Details for: {this.props.service.text}</h3>
        <div>ID: {this.props.service.is}</div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    service: state.selection
  }
}
export default connect(mapStateToProps)(Details);