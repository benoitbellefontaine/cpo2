import React from 'react'
import { Keyframes, animated, Spring, config } from 'react-spring'
import PropTypes from 'prop-types'
import Service from './service'

const Content = Keyframes.Trail({
    peek: [{ delay: 500, y:0, opacity: 1 }, { delay: 500, y:0, opacity: 1 }],
    open: { delay: 500, from: { y: -50, opacity:0 }, to: { y: 0, opacity:1 }, config: config.stiff },
    close: { delay: 500, from: { y: 0, opacity:1 }, to: { y: -50, opacity:0 }, config: config.stiff }
});

        {/*<Content
          native
          keys={letters.map(_ => _.key)}
          config={{ tension: 200, friction: 20 }}
          //state={show ? "open" : "close"}
          state={"open"}
          >
          {letters.map(item => ({ y, opacity, ...props }) => (
            <animated.h1
              style={{
                transform: y.interpolate(value => `translateY(${value}vh)`),
                opacity: opacity,
                //letterSpacing: 5,
                color: `${item.color}`,
                padding: 5,
                margin: 5,
                //width: '10vw',
                //height: '10vw',
                minHeight: 0,
                borderRadius: '5px',
                textAlign: 'center',
                backgroundColor: 'rgba(0,0,0,0.05)',
                marginBlockStart: '0.0em',
                marginBlockEnd: '0.0em',
                lineHeight: '100px'
              }}
            >
              {item.letter}
            </animated.h1>
          ))}
        </Content>*/}

const Services = ({ services, toggleService }) => (

    <ul style={{width:'100%',height:'inherit',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',margin:3,padding:0}}>
        
        <Content
            native
            keys={services.map(service => service.id)}
            config={{ tension: 200, friction: 20 }}
            //state={show ? "open" : "close"}
            state={"open"}
            >
            {services.map(service => ({ y, opacity, ...props }) => (
                <Service key={service.id} {...service} onClick={() => toggleService(service.id)} y={y}
                    opacity={opacity}/>
            ))}
        </Content>

    </ul>

)

Services.propTypes = {
    services: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            selected: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    toggleService: PropTypes.func.isRequired
}

export default Services