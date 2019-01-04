import React, { Fragment } from 'react'
import { Text } from '@vx/text';

function Node({ node, language, onClick }) {
  const width = 140
  const height = 35
  return (
    <Fragment>
      {node.depth === 0 && (
        <Fragment>
          <circle r={40} fill={`white`} stroke={ `none` } strokeWidth={1} onClick={onClick} />
          <circle r={30} fill={ node.data.color } stroke={ node.data.color } strokeWidth={3} onClick={onClick} />
        </Fragment>
      )}
      {node.depth !== 0 && (
        <Fragment>
        <rect
          height={height+10}
          width={width+10}
          y={(-height-10) / 2}
          x={(-width-10) / 2}
          fill={ 'white' }
          rx={!node.data.children ? 15 : 15}
        />
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
          rx={!node.data.children ? 10 : 10}
          onClick={onClick}
        />
        </Fragment>
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
          node.depth === 0 ? 'white' : node.data.isSelected ? 'white' : node.data.color
        }>
        {language ? node.data.nom : node.data.name}
      </Text>
    </Fragment>
  )
}

export default Node
