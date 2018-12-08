import React from 'react'
import { animated } from 'react-spring'
import { ParentSize } from '@vx/responsive'
import Tree from './Tree'
import data from './data'
import ServiceList from './redux'

const TreeExample = ({style, language}) => (
  <animated.div className="mainRoute" 
    style={{ ...style,
      backgroundColor: `#eeeeae`,
      height:'85vh',
      boxSizing:'border-box',
      display:'flex',
      flexDirection:'column',
      justifyContent:'flex-start'
    }}>
    <h6 style={{position:'absolute',left:30,margin:0,padding:20,color:'black'}}>Services</h6>
    <div style={{width:'100%',height:'75vh',display:'flex',flexDirection:'column',background:'#eeeeae',boxSizing:'border-box',borderTop:'1px solid #55bdd5'}}>
      <ParentSize>
        {parent => 
          (
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  height: '75vh',
                  width: '100vw',
                  //background: '#272b4d',
                }}>
                <div 
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '60vw',
                    //background: '#272b4d',
                  }}>
                  <Tree style={{display:'flex', justifyContent:'center', alignItems: 'center'}}
                    data={data}
                    width={parent.width * 0.6}
                    height={parent.height * 1.0}
                    language={language}
                  />
                </div> 
                <div style={{
                      width: '40vw',
                      height: '100%',
                      color: "black",
                      borderLeft: '1px solid #55bdd5',
                      padding: 10,
                      background: '#ffffff',
                      overflowY: 'auto',
                      boxSizing: 'border-box',
                      //from="#55bdd5" to="#4f3681"
                      //background: 'radial-gradient(#4f3681,#55bdd5)',
                      //background: 'linear-gradient(to right, #55bdd5,#4f3681)',
                    }}>

                    <div style={{width:'100%',textAlign:'center',fontSize:30,margin:0,padding:0,textDecoration:'underline'}}><em>{language ? <span>Sélection</span> : <span>Selection</span>}</em></div>
                  
                    <ServiceList filter={'SHOW_SELECTED'} language={language} />
                    
                  </div>
              </div>
              <div id="box" style={{height:'15vh',background:'#000000',outline:'1px solid #000000',padding:'5px',fontSize:40,overflowY:'auto'}}>
                  (1) click on the Services circle (2) click on the cycle that best describes your current situation (3) select any service within the selected cycle (4) select another cycle to explore all the services offered by CPO.
              </div>
            </div>
          )
        }
      </ParentSize>
    </div>
  </animated.div>
)

export default TreeExample
