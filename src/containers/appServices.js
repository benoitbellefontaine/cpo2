import React from 'react'
import { animated } from 'react-spring'
import '../routes/routes.css'
import '../styles.css'
import * as Icons from '../icons'
import VisualServices from './visualServices'

const AppService = ({ style }) => (
    <animated.div className="mainRoute" style={{ ...style,background:`#ffffff`,height:'80vh',boxSizing:'border-box' }}>

        <div style={{width:'90vw',display:'flex',alignItems:'center',boxSizing:'border-box',overflowY:'auto'}}>
          <VisualServices/>
        </div>
    
    </animated.div>
)
export default AppService