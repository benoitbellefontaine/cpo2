import React, { Fragment } from 'react'
import { Text } from '@vx/text';

function Node({ node, onClick }) {
  const width = 140
  const height = 35
  return (
    <Fragment>
      {node.depth === 0 && (
        <circle r={30} fill="url('#gradient')" onClick={onClick} />
      )}
      {node.depth !== 0 && (
        <rect
          height={height}
          width={width}
          y={-height / 2}
          x={-width / 2}
          fill={ node.data.isSelected ? node.data.color : 'white' }
          stroke={ node.data.color }
          strokeWidth={2}
          strokeDasharray={!node.data.children ? '2,2' : '0'}
          strokeOpacity={!node.data.children ? 0.6 : 1}
          rx={!node.data.children ? 10 : 0}
          onClick={onClick}
        />
      )}
      <Text
        //dy={'.33em'}
        fontSize={12}
        fontFamily="Arial"
        textAnchor={'middle'}
        verticalAnchor={'middle'}
        width={width}
        //scaleToFit={true}
        style={{ pointerEvents: 'none' }}
        fill={
          node.depth === 0 ? '#71248e' : node.data.isSelected ? 'white' : node.data.color
        }>
        {node.data.name}
      </Text>
    </Fragment>
  )
}

export default Node
