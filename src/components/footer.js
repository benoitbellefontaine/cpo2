import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Services from '../components/services'

const Footer = ({selected}) => (
    <div>{selected}</div>
)

Footer.propTypes = {
    selected: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    selected: state.selected
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps,mapDispatchToProps)(Footer)