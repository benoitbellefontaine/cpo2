import React from 'react'
import { Keyframes, animated, Spring, config } from 'react-spring'
import PropTypes from 'prop-types'
import Select from './select'

const Content = Keyframes.Trail({
    peek: [{ delay: 500, y:0, opacity: 1 }, { delay: 500, y:0, opacity: 1 }],
    open: { delay: 500, from: { y: -50, opacity:0 }, to: { y: 0, opacity:1 }, config: config.stiff },
    close: { delay: 500, from: { y: 0, opacity:1 }, to: { y: -50, opacity:0 }, config: config.stiff }
});

const Selected = ({ services }) => (

    <ul style={{width:'90vw',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',margin:3,padding:0}}>
        
        <Content
            native
            keys={services.map(service => service.id)}
            config={{ tension: 200, friction: 20 }}
            //state={show ? "open" : "close"}
            state={"open"}
            >
            {services.map(service => ({ y, opacity, ...props }) => (
                <Select key={service.id} {...service} y={y} opacity={opacity}/>
            ))}
        </Content>

    </ul>

)

Selected.propTypes = {
    services: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            selectInfo: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            def: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    selectService: PropTypes.func.isRequired
}

export default Selected