import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { Tooltip } from 'antd';
import { message, Alert } from 'antd';

const info = () => {
  message.info('hello');
};

const Service = ({ onClick, selected, text, color, r, g, b, id, y, opacity }) => (
  <animated.li
    onClick={onClick}
    style={{
      transform: y.interpolate(value => `translateX(${value}px)`),
      listStyleType: 'none',
      opacity: opacity,
      padding: '4px 4px 4px 10px',
      margin: 2,
      borderRadius: 10,
      color: selected ? 'white' : color,
      backgroundColor: selected ? `rgba(${r},${g},${b},1)` : `rgba(${r},${g},${b},0.2)`,
      border: `1px dashed ${color}`,
      fontSize: '1vw',
      fontWeight: selected ? 600 : 300,
      flexGrow: 1,
      
    }}
  >
    <div onMouseDown={info}>
      <Tooltip placement="topLeft" title={text} style={{maxWidth:'5vw'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <i className={selected ? `fas fa-check-square fa-1x` : `far fa-square fa-1x`} style={{paddingRight:5}}></i>
          {id}-{text}
        </div>
      </Tooltip>
    </div>
  </animated.li>
)

Service.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  r: PropTypes.string.isRequired,
  g: PropTypes.string.isRequired,
  b: PropTypes.string.isRequired,
}

export default Service