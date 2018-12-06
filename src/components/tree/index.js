import React from 'react'
import { animated } from 'react-spring'
import { ParentSize } from '@vx/responsive'
import { GradientPinkBlue, GradientOrangeRed } from '@vx/gradient'
import Tree from './Tree'
import data from './data'

const TreeExample = ({style}) => (
  <animated.div className="mainRoute" style={{ ...style, backgroundColor:`#eeeeae`,width:'100vw',height:'100%',boxSizing:'border-box',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
      
    <h6 style={{width:'100vw',height:'10vh',margin:0,padding:10,color:'white',textAlign:'center',background:'lightblue'}}>Services</h6>
    
    <div style={{width:'100vw',height:'90vh'}}>
      <ParentSize>
        {parent =>
          (
            <div style={{width:'100vw',height:'90%',display:'flex',flexDirection:'column'}}>
              {/* TOP */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '100vw',
                  padding: '0vh',
                  margin: '0px auto',
                  background: '#272b4d',
                  background: '#ff0fff',
                }}>
                {/* GAUCHE */}
                <div 
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '70%',
                    background: '#272b4d',
                    background: '#ffffff',
                    padding: '0 0 0 0px'
                  }}>
                  <Tree style={{display:'flex', justifyContent:'center', alignItems: 'center'}}
                    data={data}
                    width={parent.width * 0.45}
                    height={parent.height * 0.75}
                  />
                </div>
                {/* DROITE */}
                <div style={{height:'100%',width:'30%',background:'red'}}>
                </div>
              </div>
              {/* BOTTOM */}
              <div style={{height:'10vh',background:'#000000'}}>Hello</div>
            </div>
          )
        }
      </ParentSize>
    </div>

  </animated.div>
)

export default TreeExample
