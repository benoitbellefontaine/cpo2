import React from 'react'
import { Group } from '@vx/group'
import { Tree } from '@vx/hierarchy'
import { LinearGradient } from '@vx/gradient'
import { hierarchy } from 'd3-hierarchy'
import Links from './Links'
//import Nodes from './NodesSpring'
import Nodes from './NodesMove'

import store from '../../../index'

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
      click,
      margin = {
        top: 30,
        left: 50,
        right: 100,
        bottom: 30,
      },
    } = this.props
    const { layout, orientation, linkType, stepPercent } = this.state

    if (width < 10) return null

    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom
    const origin = { x: 0, y: 0 }
    const sizeWidth = innerHeight
    const sizeHeight = innerWidth
    const root = hierarchy(data, d => (d.isExpanded ? d.children : null))

    return (
      <div>
        <svg width={width} height={height}>
          <LinearGradient id="lg" from="#fd9b93" to="#fe6e9e" />
          <Tree
            top={margin.top}
            left={margin.left}
            root={root}
            size={[sizeWidth, sizeHeight]}
            separation={(a, b) => (a.parent == b.parent ? 1 : 0.5) / a.depth}>
            {({ data }) => (
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
                    //document.getElementById("box").innerHTML = '<span style="font-weight:700">' + node.data.name + '</span> : ' + node.data.desc;
                    click(node.data.nom,node.data.name,node.data.descf,node.data.desce)
                  }}
                />
              </Group>
            )}
          </Tree>
        </svg>
      </div>
    )
  }
}