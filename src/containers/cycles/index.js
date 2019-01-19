import React from 'react'
import { animated } from 'react-spring'
import VisualCycles from './visualCycles'
//import Header from '../../components/situations/header'

const Cycles = ({ style, language }) => (

    <animated.div style={{ ...style, 
        backgroundColor: `#433343`,
        //color: `#433343`,
        height: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        zIndex: 10
        }}>

        <h6 style={{margin:20,marginBottom:5,padding:0,color:'white'}}>{language ? <div>Cycles</div> : <div>Lifecycles</div>}</h6>
        <p style={{margin:10,padding:0,fontSize:'50%'}}>
            {language 
                ? <div>Cycles</div>
                : <div>Lifecycles</div>}
        </p>

        <div style={{width:'90vw',display:'flex',alignItems:'center',boxSizing:'border-box',overflowY:'auto'}}>
                <VisualCycles/>
        </div>
    
    </animated.div>

)
export default Cycles