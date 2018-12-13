import React from 'react'
import { animated } from 'react-spring'
import '../../routes/routes.css'
//import '../appstyles.css'
//import * as Icons from '../icons'
import VisualSituations from './visualSituations'
import Header from '../../components/situations/header'

const AppSituation = ({ style, language }) => (

    <animated.div className="mainRoute" style={{ ...style, 
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

        <h6 style={{margin:20,padding:0}}>{language ? <div>Cycles</div> : <div>Lifecycles</div>}</h6>

        <div style={{width:'90vw',display:'flex',alignItems:'center',boxSizing:'border-box',overflowY:'auto'}}>
                <VisualSituations/>
        </div>
    
    </animated.div>

)
export default AppSituation