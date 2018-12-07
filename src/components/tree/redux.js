import React from 'react'
import PropTypes from 'prop-types'
import { Keyframes, animated, Spring, config } from 'react-spring'

import { connect }          from 'react-redux';

const Content = Keyframes.Trail({
    peek: [{ delay: 500, y:0, opacity: 1 }, { delay: 500, y:0, opacity: 1 }],
    open: { delay: 500, from: { y: -50, opacity:0 }, to: { y: 0, opacity:1 }, config: config.stiff },
    close: { delay: 500, from: { y: 0, opacity:1 }, to: { y: -50, opacity:0 }, config: config.stiff }
});

/**/

  // action
  function toggleService(id) {
      console.log("toggleService",id);
      return {
          type: 'TOGGLE_SERVICE',
          id
      }
  }

  // presentation
  const Item = ({ key, onClick, selected, name, color, opacity, r, g, b, id, y }) => (
  <animated.div
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
      {id}-{name}
    </div>
  </animated.div>
  )
  Item.propTypes = {
      //onClick: PropTypes.func.isRequired,
      selected: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      opacity: PropTypes.number.isRequired,
  }

  const List = ({ serviceApp }) => {//, onServiceClick }) => {
      if (serviceApp.length === 0)
          return (
              <div className="item-presentation-li">
                  <div style={{margin:'0px',padding:'0px'}}>
                      <div><i className={`fas fa-times-circle fa-1x`}></i></div>
                      <span style={{width:'90%',margin:'0 auto',textAlign:'center'}}>
                          {(true) ? "Aucun service sélectionné" : "No services selected"}
                      </span>
                  </div>
              </div>
          )
    return (

        <ul style={{width:'100%',height:'inherit',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',margin:3,padding:0}}>
            
            <Content
                native
                keys={serviceApp.map(service => service.id)}
                config={{ tension: 200, friction: 20 }}
                //state={show ? "open" : "close"}
                state={"open"}
                >
                {serviceApp.map(service => ({ y, opacity, ...props }) => (
                    <Item key={service.id} {...service} onClick={() => toggleService(service.id)} y={y}
                        opacity={opacity}/>
                ))}
            </Content>

        </ul>

      )
  }
  List.propTypes = {
      serviceApp: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          selected: PropTypes.bool.isRequired,
          name: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
      //onServiceClick: PropTypes.func.isRequired
  }

  //connect
  const getVisibleServices = (services, filter) => {
      switch (filter) {
        case 'SHOW_SELECTED':
          return services.filter(t => t.selected)
        case 'SHOW_DEMARRAGE':
          return services.filter(t => t.type === 'demarrage')
        case 'SHOW_ALL':
        default:
          return services
      }
  }

  const mapStateToProps = (state, ownProps) => {
      return {
          serviceApp: getVisibleServices( state.services, ownProps.filter )
      }
  }

  const mapDispatchToProps = dispatch => {
      return {
          onServiceClick: id => {
              console.log("mapDispatchToProps");
              dispatch(toggleService(id))
          }
      }
  }

const ServiceList = connect(
      mapStateToProps,
      mapDispatchToProps
  )(List)

export default ServiceList
/**/