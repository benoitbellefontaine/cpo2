import React from 'react'
import PropTypes from 'prop-types'
import Service from './service'

const Services = ({ services, toggleService }) => (
    <ul style={{width:'100%',height:'inherit',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',margin:3,padding:0}}>
        {services.map(service => (
            <Service key={service.id} {...service} onClick={() => toggleService(service.id)} />
        ))}
    </ul>
)

Services.propTypes = {
    services: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            selected: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleService: PropTypes.func.isRequired
}

export default Services