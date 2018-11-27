import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { animated } from 'react-spring'
import '../routes/routes.css'
import '../styles.css'
import * as Icons from '../icons'

import FilterLink from './FilterLink'
import { VisibilityFilters } from './actions'

/* action */
  const toggleService = id => {
      return {
        type: 'TOGGLE_SERVICE',
        id
      }
  }
/* action */

/* presentation */
  const Item = ({ onClick, completed, name }) => (
      <li
        onClick={onClick}
        style={{
          listStyleType: 'none',
          padding: 10,
          margin: 3,
          borderRadius: 10,
          color: completed ? 'white' : 'black',
          backgroundColor: completed ? 'rgb(116,184,33)' : 'rgba(255,255,255,1)',
          //border: completed ? '2px solid rgb(116,184,33)' : '2px solid gray',
          fontSize: '16px',
          fontWeight: 600,
          flexGrow: 1
        }}
        >
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div><i className={completed ? `fas fa-check-square fa-1x` : `far fa-square fa-1x`}></i></div>
            <span style={{width:'90%',margin:'0 auto',textAlign:'center'}}>{name}</span>
            <span> </span>
        </div>
      </li>
  )
  Item.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }
  
  const List = ({ services, onServiceClick }) => {
    return (
      <ul style={{width:'100%',boxSizing:'border-box',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',margin:3,padding:0}}>
        {services.map(service => (
          <Item key={service.id} {...service} onClick={() => onServiceClick(service.id)} />
        ))}
      </ul>
    );
  }

  List.propTypes = {
      services: PropTypes.arrayOf(
          PropTypes.shape({
              id: PropTypes.number.isRequired,
              completed: PropTypes.bool.isRequired,
              text: PropTypes.string.isRequired
          }).isRequired
      ).isRequired,
      onServiceClick: PropTypes.func.isRequired
  }
/* presentation */

/* ServicesList */
  const getVisibleServices = (services, filter) => {
      switch (filter) {
        case 'SHOW_COMPLETED': return services.filter(t => t.completed)
        case 'SHOW_ACTIVE': return services.filter(t => !t.completed)
        case 'SHOW_DEMARRAGE': return services.filter(t => ( t.type === 'demarrage' ))
        case 'SHOW_COURTTERME': return services.filter(t => ( t.type === 'court terme' ))
        case 'SHOW_MOYENTERME': return services.filter(t => ( t.type === 'moyen terme' ))
        case 'SHOW_EXCELLENCE': return services.filter(t => ( t.type === 'excellence' ))
        case 'SHOW_REDRESSEMENT': return services.filter(t => ( t.type === 'redressement' ))
        case 'SHOW_NONE': return [];
        case 'SHOW_ALL':
        default:
          return services
      }
  }
     
  const mapStateToPropsAll = (state) => {
      return {
        services: getVisibleServices(state.services, 'SHOW_ALL')
      }
  }
     
  const mapDispatchToPropsAll = dispatch => {
      return {
        onServiceClick: id => {
          console.log('onServiceClick');
          dispatch(toggleService(id));
        }
      }
  }
     
  const ServicesList = connect(
      mapStateToPropsAll,
      mapDispatchToPropsAll
  )(List)
/* ServicesList */

const Services = ({ style }) => (
    <animated.div className="mainRoute" style={{ ...style, background: `#ffffff`, height:'100%' }}>

        <div style={{height:'100vh',width:'50vw',display:'flex',flexWrap:'wrap',marginTop:50,alignItems:'flex-start',boxSizing:'border-box'}}>

          <ServicesList />

        </div>

    </animated.div>
)

export default Services