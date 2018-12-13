import React from 'react'
import { Transition, Trail, animated, interpolate } from 'react-spring'
import Node from './Node'
import { findCollapsedParent, getTopLeft } from './utils'

const keyAccessor = n => n.data.name

const from = (node,layout,orientation) => {
  console.log("parentTopLeft",node.data);
  const parentTopLeft = getTopLeft(
    node.parent || { x: 0, y: 0 },
    layout,
    orientation
  )
  return {
    top: parentTopLeft.top,
    left: parentTopLeft.left,
    opacity: 0,
  }
}

function enter (node,layout,orientation) {
  console.log('topLeft',node.data.name);
  const topLeft = getTopLeft(node, layout, orientation)
  return {
    top: topLeft.top,
    left: topLeft.left,
    opacity: 1,
  }
}

const leave = (node,layout,orientation) => {
  const collapsedParent = findCollapsedParent(node.parent)
  const collapsedParentPrevPos = {
    x: collapsedParent.data.x0,
    y: collapsedParent.data.y0,
  }
  const topLeft = getTopLeft(collapsedParentPrevPos, layout, orientation)
  return {
    top: topLeft.top,
    left: topLeft.left,
    opacity: 0,
  }
}

const Nodes = ({ nodes, layout, orientation, onNodeClick }) => {
  return (
    <Transition
      native
      unique
      items={nodes}
      keys={keyAccessor}
      config={{ tension: 1000, friction: 130, mass: 5 }}
      from={ (node) => { from(node,layout,orientation) }}
      enter={ node => { enter(node,layout,orientation) }}
      update={ node => { enter(node,layout,orientation) }}
      leave={ node => { leave(node,layout,orientation) }}>
      {node => styles => {
        const key = keyAccessor(node)
        return (
          <animated.g
            className="cx-group"
            style={{
              cursor: 'pointer',
              pointerEvents: styles.opacity.interpolate(
                v => (v < 0.5 ? 'none' : 'all')
              ),
            }}
            width={40}
            height={20}
            opacity={styles.opacity}
            transform={interpolate(
              [styles.left, styles.top],
              (l, t) => `translate(${l}, ${t})`
            )}
            key={keyAccessor(node)}>
            <Node
              node={node}
              layout={layout}
              orientation={orientation}
              onClick={() => onNodeClick(node)}
              key={key}
            />
          </animated.g>
        )
      }}
    </Transition>
  )
}

export default Nodes
