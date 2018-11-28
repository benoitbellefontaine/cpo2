import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick, color, style }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: `${style.marginLeft}`,
      borderRadius: '5px',
      backgroundColor: `${color}`,
      color: 'white',
      border: 'none',
      flexGrow: 1,
      lineHeight:'3em'
    }}
  >
    {children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
}

export default Link