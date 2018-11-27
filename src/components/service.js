import React from 'react'
import PropTypes from 'prop-types'

const Service = ({ onClick, selected, text, id }) => (
  <li
    onClick={onClick}
    style={{
      listStyleType: 'none',
      padding: '4px 4px 4px 10px',
      margin: 3,
      borderRadius: 10,
      color: selected ? 'white' : 'black',
      backgroundColor: selected ? 'rgb(116,184,33)' : 'rgba(255,255,255,1)',
      border: selected ? '1px solid rgb(116,184,33)' : '1px solid gray',
      fontSize: '1.3vw',
      fontWeight: selected ? 600 : 300,
      flexGrow: 1,
      
    }}
  >
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div>
        <i className={selected ? `fas fa-check-square fa-1x` : `far fa-square fa-1x`} style={{paddingRight:5}}></i>
      </div>
      {id}-{text}
    </div>
  </li>
)

Service.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default Service