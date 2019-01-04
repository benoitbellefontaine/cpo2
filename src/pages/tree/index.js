import React from 'react'
import { Keyframes, animated, Spring, config } from 'react-spring'
import { ParentSize } from '@vx/responsive'
import Tree from './Tree'
import data from './data'
import ServiceList from './redux'

const Content = Keyframes.Trail({
  peek: [{ delay: 500, y:0, opacity: 1 }, { delay: 500, y:0, opacity: 1 }],
  open: { delay: 750, from: { y: -50, opacity:0 }, to: { y: 0, opacity:1 }, config: config.stiff },
  close: { delay: 500, from: { y: 0, opacity:1 }, to: { y: -50, opacity:0 }, config: config.stiff }
});

const topLeftColor = '#3460cf'
const topRightColor = '#ffffff'
const bottomColor = '#305870'

class TreeExample extends React.Component { //}= ({style, language}) => {

constructor(props) {
    super(props);
    this.state = {
      name: 'service',
      desc: props.language ? "l'action d'aider ou de travailler pour quelqu'un" : "the action of helping or doing work for someone",
      show: true
    };
  }

  nodeClick = (name,desc) => {
    console.log(name,' + ',desc);
    this.setState({name:name,desc:desc,show:true})
  }

  render () {
    return (
    <animated.div className="mainRoute" 
      style={{ ...this.props.style,
        //background: `#ffffff`,
        height: '85vh',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        background: 'linear-gradient(#3da300, white)'
      }}>
      <h6 style={{position:'absolute',left:30,margin:0,padding:20,color:'black'}}>Services</h6>
      <div style={{width:'100%',height:'75vh',display:'flex',flexDirection:'column',
        //background:'#ffffff',
        boxSizing:'border-box'}}>
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
                    //backgroundColor: topLeftColor,
                    padding: 10,
                  }}>
                  <div 
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                      width: '60vw',
                      margin: 0,
                    }}>
                    <Tree style={{display:'flex', justifyContent:'center', alignItems: 'center'}}
                      data={data}
                      width={parent.width * 0.6}
                      height={parent.height * 1.0}
                      language={this.props.language}
                      open={true}
                      click={(name,desc)=>this.nodeClick(name,desc)}
                    />
                  </div> 
                  <div style={{
                      width: '40vw',
                      height: '100%',
                      color: "black",
                      //borderLeft: '1px solid #55bdd5',
                      padding: 10,
                      overflowY: 'auto',
                      boxSizing: 'border-box',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.75)'
                    }}>
                      <div style={{
                          width: '100%',
                          textAlign: 'center',
                          display: 'flex',
                          flexFlow: 'row nowrap',
                          justifyContent: 'space-around',
                          borderRadius: '3px',
                          fontSize: `2vw`,
                          background: 'rgba(48,88,112,0.75)',
                          color: `white`,
                          }}>
                          <div>S</div>
                          {this.props.language ? <div>é</div> : <div>e</div>}
                          <div>l</div>
                          <div>e</div>
                          <div>c</div>
                          <div>t</div>
                          <div>i</div>
                          <div>o</div>
                          <div>n</div>
                      </div>
                    
                      <ServiceList filter={'SHOW_SELECTED'} language={this.props.language} />
                      
                    </div>
                </div>
                <div style={{
                  height: '15vh',
                  overflowY: 'auto',
                  color: 'black',
                  padding: 10,
                  borderTop: '1px solid #c8c8c8',
                  //background: '#e8c8c8'
                  }}>
                    <div style={{width:'100%',margin:5}}>
                      <span style={{fontWeight:700}}>{this.state.name}</span> - {this.state.desc}
                    </div>
                </div>
              </div>
            )
          }
        </ParentSize>
      </div>
    </animated.div>
    )
  }
}

export default TreeExample;