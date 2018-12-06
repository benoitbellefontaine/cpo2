import React, { Fragment } from 'react'

function Node({ node, onClick }) {
  const width = 150
  const height = 30
  return (
    <Fragment>
      {node.depth === 0 && (
        <circle r={20} fill="url('#lg')" onClick={onClick} />
      )}
      {node.depth !== 0 && (
        <rect
          height={height}
          width={width}
          y={-height / 2}
          x={-width / 2}
          fill={node.data.color}
          stroke={node.data.children ? node.data.color : node.data.color}
          strokeWidth={1}
          strokeDasharray={!node.data.children ? '2,2' : '0'}
          strokeOpacity={!node.data.children ? 0.6 : 1}
          rx={!node.data.children ? 10 : 0}
          onClick={onClick}
        />
      )}
      <text
        dy={'.33em'}
        fontSize={12}
        fontFamily="Arial"
        //dx={ node.depth != 2 ? '0' : '30' }
        textAnchor={
          node.depth === 0 ? 'middle' : node.depth === 1 ? 'middle' : 'middle'
        }
        style={{ pointerEvents: 'none' }}
        fill={
          node.depth === 0 ? '#71248e' : node.children ? 'white' : 'white'
        }>
        {node.data.name}
      </text>
    </Fragment>
  )
}

export default Node
