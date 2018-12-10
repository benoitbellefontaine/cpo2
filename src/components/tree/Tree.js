import React from 'react'
import { Group } from '@vx/group'
import { Tree } from '@vx/hierarchy'
import { LinearGradient, GradientPinkBlue, GradientOrangeRed, RadialGradient,
  GradientTealBlue } from '@vx/gradient'
import { hierarchy } from 'd3-hierarchy'
import { LinkHorizontal } from '@vx/shape';
import Links from './Links'
import Nodes from './NodesMove'
import ServiceList from './redux'

//import { combineReducers }  from 'redux';
//import { createStore }      from 'redux';
//import { connect }          from 'react-redux';
//import reducers             from '../../reducers';
import store                from '../../index';

const lightpurple = '#374469';

export default class extends React.Component {
  state = {
    layout: 'cartesian',
    orientation: 'horizontal',
    linkType: 'diagonal',
    stepPercent: 0.5,
  }

  render() {
    const {
      data,
      width,
      height,
      language,
      margin = {
        top: 30,
        left: 30,
        right: 30,
        bottom: 30,
      },
    } = this.props

    const { layout, orientation, linkType, stepPercent } = this.state

    if (width < 10) return null

    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom
    const origin = { x: 80, y: 15 }
    const sizeWidth = innerHeight
    const sizeHeight = innerWidth
    const root = hierarchy(data, d => (d.isExpanded ? d.children : null))

    return (
      
      <svg width={width} height={height} >
        <GradientTealBlue id="tb" vertical={false} />
        <GradientPinkBlue id="pb" />
        <GradientOrangeRed id="or" />
        <LinearGradient from="#ffffff" to="#ffffff" id="lg" />
        {/*<rect width={width} height={height} fill={`url(#lg)`} />*/}
        <Tree
          top={margin.top}
          left={margin.left}
          root={root}
          size={[sizeWidth+30, sizeHeight-140]}
          separation={(a, b) => (a.parent == b.parent ? 1 : 0.5) / a.depth}>
          {
            (data) => (
            <Group top={origin.y} left={origin.x}>
              <Links
                links={data.links()}
                linkType={linkType}
                layout={layout}
                orientation={orientation}
                stepPercent={stepPercent}
              />
              <Nodes
                nodes={data.descendants()}
                layout={layout}
                orientation={orientation}
                language={language}
                onNodeClick={node => {
                  if (!node.data.isExpanded) {
                    node.data.x0 = node.x
                    node.data.y0 = node.y
                  }
                  node.data.isExpanded = !node.data.isExpanded
                  node.data.isSelected = !node.data.isSelected
                  this.forceUpdate()
                  store.dispatch({ type: 'TOGGLE_SERVICE', id:node.data.id });
                }}
              />
            </Group>
          )}
        </Tree>
      </svg>
    
    )
  }
}
