import React from 'react'
import PropTypes from 'prop-types'
import { Keyframes, animated, Spring, config } from 'react-spring'

const Select = ({ onClick, selected, text, def, color, r, g, b, id, y, opacity }) => (
  <animated.li
    onClick={onClick}
    style={{
      //transform: y.interpolate(value => `translateX(${value}px)`),
      listStyleType: 'none',
      opacity: opacity,
      padding: '2px 4px 4px 10px',
      margin: 1,
      borderRadius: 5,
      color: 'white',
      backgroundColor: 'rgb(128,126,128)',
      fontSize: '1.3vw',
      fontWeight: selected ? 600 : 300,
      flexGrow: 1,
    }}>
    <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
      <span style={{}}>{text}</span> : {def}
    </div>
  </animated.li>
)

Select.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectOnly: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  def: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  r: PropTypes.string.isRequired,
  g: PropTypes.string.isRequired,
  b: PropTypes.string.isRequired,
}

export default Select