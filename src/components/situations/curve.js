import React from 'react';
import { Group } from '@vx/group';
import { GlyphDot } from '@vx/glyph';
import { LinePath } from '@vx/shape';
import { genDateValue } from '@vx/mock-data';
import { scaleTime, scaleLinear } from '@vx/scale';
import { curveMonotoneX, curveBasis } from '@vx/curve';

//const data = genDateValue(15);

const lifeCycleData = [
        {x:Math.PI,         nom:"démarrage",      name:"startup",           span_f:"de 0 à 6 mois",       span_e:"from 0 to 6 months"}, 
        {x:4*Math.PI/3,     nom:"court terme",    name:"short term",        span_f:"de 6 mois à 1 an",    span_e:"from 6 months to 1 year"}, 
        {x:5*Math.PI/3,     nom:"moyen terme",    name:"middle term",       span_f:"de 1 à 3 ans",        span_e:"from 1 to 3 year"}, 
        {x:6*Math.PI/3,     nom:"excellence",     name:"excellence",        span_f:"de 3 à 5 ans",        span_e:"from 3 to 5 year"},
        {x:7*Math.PI/3,     nom:"redressement",   name:"re-engineering",    span_f:"après 5 ans",         span_e:"after 5 years"}
];

/*const data = [
  {value:Math.PI},
  {value:4*Math.PI/3},
  {value:5*Math.PI/3},
  {value:6*Math.PI/3},
  {value:7*Math.PI/3}
];*/

const data = lifeCycleData.map((_,i) => {
    return {
        //name: this.props.langue === 'FR' ? _.nom  : _.name,
        //span: this.props.langue === 'FR' ? _.span_f  : _.span_e,                
        x: ( _.x ) - 5,
        y: 1 + (Math.cos( _.x )),
        //r: 20,
        //xtext: 0,
        //ytext: -30
    }
});

// accessors
const date = d => d.x;
const value = d => d.y;

// scales
const xScale = scaleLinear({
  domain: [Math.min(...data.map(date)), Math.max(...data.map(date))]
});
const yScale = scaleLinear({
  domain: [0, Math.max(...data.map(value))]
});

// positions
const x = d => xScale(date(d));
const y = d => yScale(value(d));

// colors
const primary = '#8921e0';
const secondary = '#00f2ff';
const contrast = '#ffffff';

export default ({ width, height, margin }) => {
  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // update scale range to match bounds
  xScale.range([0, xMax]);
  yScale.range([yMax, 0]);

  console.log('data', data);

  return (
    <svg width={width} height={height}>
      <rect x={0} y={0} width={width} height={height} fill={contrast} rx={14} />
      <Group left={margin.left} top={ margin.top}>
        <LinePath
          data={data}
          x={x}
          y={y}
          stroke={primary}
          strokeWidth={2}
          strokeDasharray="2,2"
          curve={curveBasis}
        />
        <LinePath
          data={data}
          x={x}
          y={y}
          stroke={primary}
          strokeWidth={3}
          curve={curveMonotoneX}
        />
        {data.map((d, i) => {
          const cx = x(d);
          const cy = y(d);
          return (
            <g key={`line-point-${i}`}>
              <GlyphDot cx={cx} cy={cy} r={6} fill={contrast} stroke={secondary} strokeWidth={10} />
              <GlyphDot cx={cx} cy={cy} r={6} fill={secondary} stroke={primary} strokeWidth={3} />
              <GlyphDot cx={cx} cy={cy} r={4} fill={contrast} />
            </g>
          );
        })}
      </Group>
    </svg>
  );
};