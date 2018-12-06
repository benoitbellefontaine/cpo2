import React from 'react'
import { animated } from 'react-spring'
import { ParentSize } from '@vx/responsive'
import { GradientPinkBlue, GradientOrangeRed } from '@vx/gradient'
import Tree from './Tree'
import data from './data'

const TreeExample = ({style}) => (
  <animated.div className="mainRoute" style={{ ...style,backgroundColor: `#eeeeae`,height:'90vh',boxSizing:'border-box',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
    <h6 style={{position:'absolute',margin:0,padding:20,color:'white'}}>Services</h6>
    <div style={{width:'100%',height:'80vh',display:'flex',flexDirection:'column',background: '#a9d3b6'}}>
      <ParentSize>
        {parent => 
          (
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  height: '80vh',
                  width: '50%',
                  background: '#272b4d',
                }}>
                <div 
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh',
                    width: '100%',
                    background: '#272b4d',
                    padding:50,
                  }}>
                  <Tree style={{display:'flex', justifyContent:'center', alignItems: 'center'}}
                    data={data}
                    width={parent.width * 0.35}
                    height={parent.height * 0.75}
                  />
                </div>
                <div style={{width:'50%',background:'#ffffff'}}></div>
              </div>
              <div style={{height:'10vh',background:'#ffffff'}}></div>
            </div>
          )
        }
      </ParentSize>
      
    </div>
  </animated.div>
)

export default TreeExample
