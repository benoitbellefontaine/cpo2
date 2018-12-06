import React from 'react'
import { animated } from 'react-spring'
import { ParentSize } from '@vx/responsive'
import Tree from './tree'
//import data from './data'

const TreeExample = ({style}) => (
  <animated.div className="mainRoute" style={{ ...style, backgroundColor: `#eeeefe`,height:'100%',boxSizing:'border-box',display:'flex',flexDirection:'column',justifyContent:'flex-start' }}>
    <h6 style={{margin:20,padding:0}}>D3 Tree</h6>
        
    <ParentSize>
      {size =>
        size.ref && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              background: '#272b4d',
            }}>
            <Tree
              //data={data}
              width={size.width * 0.9}
              height={size.height * 0.9}
            />
          </div>
        )
      }
    </ParentSize>

  </animated.div>
)

export default TreeExample