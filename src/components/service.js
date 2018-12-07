import React from 'react'
import PropTypes from 'prop-types'
import { Keyframes, animated, Spring, config } from 'react-spring'

const Service = ({ onClick, selected, texte, color, r, g, b, id, y, opacity }) => (
  <animated.li
    onClick={onClick}
    style={{
      transform: y.interpolate(value => `translateX(${value}px)`),
      listStyleType: 'none',
      opacity: opacity,
      padding: '4px 4px 4px 10px',
      margin: 1,
      borderRadius: 0,
      color: selected ? 'white' : color,
      backgroundColor: selected ? `rgba(${r},${g},${b},1)` : `rgba(${r},${g},${b},0.1)`,
      border: `1px dashed ${color}`,
      fontSize: '1.3vw',
      fontWeight: selected ? 600 : 300,
      flexGrow: 1,
    }}>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div>
        <i className={selected ? `fas fa-check-square fa-1x` : `far fa-square fa-1x`} style={{paddingRight:5}}></i>
      </div>
      {id}-{texte}
    </div>
  </animated.li>
)

Service.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  texte: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  r: PropTypes.string.isRequired,
  g: PropTypes.string.isRequired,
  b: PropTypes.string.isRequired,
}

export default Service