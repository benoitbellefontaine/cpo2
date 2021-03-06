import React from 'react'
import PropTypes from 'prop-types'
import { Keyframes, animated, Spring, config } from 'react-spring'
import { connect } from 'react-redux';

const Content = Keyframes.Trail({
    peek: [{ delay: 500, y:0, opacity: 1 }, { delay: 500, y:0, opacity: 1 }],
    open: { delay: 750, from: { y: -50, opacity:0 }, to: { y: 0, opacity:1 }, config: config.stiff },
    close: { delay: 500, from: { y: 0, opacity:1 }, to: { y: -50, opacity:0 }, config: config.stiff }
});

const preambule = [
    "Cliquez sur le cercle Services",
    "Cliquez sur le cycle qui décrit le mieux votre situation actuelle",
    "Sélectionnez le ou les services dans le cycle pré-sélectionné",
    "Choisissez les autres cycles et explorer tous les services offerts par CPO"
]

const preamble = [
    "Click on the Services circle",
    "Click on the cycle that best describes your current situation",
    "Select any service within the selected cycle",
    "Select other cycles and explore all the services offered by CPO"
]

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
    const Item = ({ index, onClick, selected, nom, name, language, color, opacity, r, g, b, id, y }) => (
        <animated.div key={index}
            onClick={onClick}
            style={{
                transform: y.interpolate(value => `translateX(${value}px)`),
                listStyleType: 'none',
                opacity: opacity,
                margin: 1,
                borderRadius: 0,
                color: selected ? 'white' : color,
                backgroundColor: selected ? `rgba(${r},${g},${b},1)` : `rgba(${r},${g},${b},0.1)`,
                border: `1px dashed ${color}`,
                fontSize: '1vw',
                fontWeight: selected ? 600 : 300,
                flexGrow: 1,
            }}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div>
                    <i className={selected ? `fas fa-check-square fa-1x` : `far fa-square fa-1x`} style={{paddingRight:5}}></i>
                </div>
                {language ? nom : name}
            </div>
        </animated.div>
    )
    Item.propTypes = {
        //onClick: PropTypes.func.isRequired,
        selected: PropTypes.bool.isRequired,
        nom: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        language: PropTypes.bool.isRequired,
        color: PropTypes.string.isRequired,
        opacity: PropTypes.object.isRequired,
    }

    const List = ({ services, language }) => {

        if (services.length === 0)
            return (
                <div style={{margin:'10px',padding:'10px',fontSize:20}}>

                    <div>{language ? <div>Commencez la sélection des services</div> : <div>Start selecting services</div>}</div>
                    <Content
                        native
                        items={language ? preambule : preamble}
                        keys={language ? preambule.map((item,i) => i)  : preamble.map((item,i) => i)}
                        config={{ tension: 200, friction: 20 }}
                        //state={show ? "open" : "close"}
                        state={"open"}
                        >
                        {(item,i) => ({ y, opacity, ...props }) => (
                            <animated.div style={{
                                transform: y.interpolate(value => `translateY(${value}px)`),
                                listStyleType: 'none',
                                opacity: opacity,
                                //padding: '4px 4px 4px 10px',
                                margin: 1,
                                borderRadius: 0,
                                fontSize: '1vw',
                                flexGrow: 1,
                            }}>
                            <div key={i} style={{fontSize:14}} >
                                <i className={`fas fa-check-circle fa-1x`}></i>
                                <span style={{width:'90%',margin:'0 auto',textAlign:'center',marginLeft:5}}>
                                    {item}
                                </span>
                            </div>
                            </animated.div>
                        )}
                    </Content>
                </div>
            )

        return ( 

            <ul style={{width:'100%',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',margin:0,padding:0,paddingTop:10}}>
                
                <Content
                    native
                    items={services.map(service => service)}
                    keys={services.map(service => service.id)}
                    config={{ tension: 400, friction: 20 }}
                    reverse={"close"}
                    //state={show ? "open" : "close"}
                    state={"open"}
                    >
                    { service => ({ y, opacity, ...props }) => (
                        <Item key={service.id} index={service.id} {...service} onClick={() => toggleService(service.id)} y={y}
                            opacity={opacity} language={language}/>
                    )}
                </Content>

            </ul>

        )
    }

    List.propTypes = {
        services: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                selected: PropTypes.bool.isRequired,
                name: PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
        language: PropTypes.bool.isRequired,
        //onServiceClick: PropTypes.func.isRequired
    }

  //connect
  const getVisibleServices = (services, filter) => {
      switch (filter) {
        case 'SHOW_SELECTED':
          return services.filter(t => t.selected)
        //case 'SHOW_DEMARRAGE': return services.filter(t => t.type === 'demarrage')
        case 'SHOW_ALL':
        default:
          return services
      }
  }

    const mapStateToProps = (state, ownProps) => {
        console.log('mapStateToProps ownProps',ownProps)
        return {
            services: getVisibleServices( state.services, ownProps.filter ),
            language: ownProps.language 
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

//const ServiceList = connect(mapStateToProps,mapDispatchToProps)(List)
export default connect(mapStateToProps,mapDispatchToProps)(List)
/**/