import React from 'react'
import { animated } from 'react-spring'
import '../routes/routes.css'
import '../styles.css'
//import * as Icons from '../icons'
import VisualSituations from './visualSituations'
import Header from '../components/situations/header'
//import SelectedService from '../containers/selectedService'

const AppSituation = ({ style, language }) => (

    <animated.div className="mainRoute" style={{ ...style, backgroundColor: `#eeeefe`, height:'100%', boxSizing:'border-box', display:'flex', flexDirection:'column', justifyContent:'flex-start' }}>

        <h6 style={{margin:20,padding:0}}>{language ? <div>Cycles</div> : <div>Lifecycles</div>}</h6>
        {/*<h6 style={{margin:20,padding:0}}>Cycles de vie</h6>*/}

        <div style={{width:'90vw',display:'flex'}}>

            <Header style={{width:'90vw',padding:5}} />

            <div style={{width:'90vw',display:'flex',alignItems:'center',boxSizing:'border-box',overflowY:'auto'}}>
                <VisualSituations/>
            </div>

            {/*<SelectedService />*/}

        </div>
    
    </animated.div>

)
export default AppSituation