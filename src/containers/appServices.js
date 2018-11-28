import React from 'react'
import { animated } from 'react-spring'
import {connect} from 'react-redux'
import '../routes/routes.css'
import '../styles.css'
import * as Icons from '../icons'
import VisualServices from './visualServices'
import Header from '../components/header'
import Footer from '../components/footer'

const AppService = ({ style }) => (

    <animated.div className="mainRoute" style={{ ...style,backgroundColor: `#eeeefe`,height:'100%',boxSizing:'border-box',display:'flex',flexDirection:'column',justifyContent:'flex-start' }}>

        <h6 style={{margin:20,padding:0}}>Services</h6>

        <Header style={{width:'90vw',padding:5}}/>

        <div style={{width:'90vw',display:'flex',alignItems:'center',boxSizing:'border-box',overflowY:'auto',border:'1px solid lightgray'}}>
            <VisualServices/>
        </div>

        <Footer />
    
    </animated.div>

)

//export default connect(mapStateToProps)(AppService);
export default AppService;