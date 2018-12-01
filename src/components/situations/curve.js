import React from 'react';
import { Group } from '@vx/group';
import { GlyphDot } from '@vx/glyph';
import { Area, LinePath, Line, AreaClosed } from '@vx/shape';
import { AxisLeft, AxisRight, AxisBottom } from '@vx/axis';
import { genDateValue } from '@vx/mock-data';
import { scaleTime, scaleLinear } from '@vx/scale';
import { curveMonotoneX, curveBasis, curveNatural } from '@vx/curve';
import { LinearGradient, GradientPinkRed } from '@vx/gradient';

//const data = genDateValue(15);

const lifeCycleData = [
        {x:Math.PI,         nom:"démarrage",      name:"startup",           nom2:"de 0 à 6 mois",       name2:"from 0 to 6 months", color:'rgb(255,127,14)'}, 
        {x:4*Math.PI/3,     nom:"court terme",    name:"short term",        nom2:"de 6 mois à 1 an",    name2:"from 6 months to 1 year", color:'rgb(44,160,44)'}, 
        {x:5*Math.PI/3,     nom:"moyen terme",    name:"middle term",       nom2:"de 1 à 3 ans",        name2:"from 1 to 3 year", color:'rgb(214,39,40)'}, 
        {x:6*Math.PI/3,     nom:"excellence",     name:"excellence",        nom2:"de 3 à 5 ans",        name2:"from 3 to 5 year", color:'rgb(148,103,189)'},
        {x:7*Math.PI/3,     nom:"redressement",   name:"re-engineering",    nom2:"après 5 ans",         name2:"after 5 years", color:'rgb(140,86,75)'}
];

/*const data = [
  {value:Math.PI},
  {value:4*Math.PI/3},
  {value:5*Math.PI/3},
  {value:6*Math.PI/3},
  {value:7*Math.PI/3}
];*/

const language = true;

const data = lifeCycleData.map((_,i) => {
    return {
        nom: language ? _.nom  : _.name,
        nom2: language ? _.nom2  : _.name2,                
        x: ( _.x ),
        y: (Math.cos( _.x )),
        color: _.color,
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
  domain: [Math.min(...data.map(value)), Math.max(...data.map(value))]
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

  function numTicksForWidth(width) {
    if (width <= 300) return 2;
    if (300 < width && width <= 400) return 5;
    return 10;
  }

  return (
    <svg width={width} height={height}>
      <rect x={0} y={0} width={width} height={height} fill={contrast} rx={14} />
        <GradientPinkRed id="PinkRed" />
        <Group left={margin.left} top={ margin.top}>

            <LinePath
                data={data}
                x={x}
                y={y}
                stroke={primary}
                strokeWidth={3}
                curve={curveNatural}
            />
            {data.map((d, i) => {
                const cx = x(d);
                const cy = y(d);
                return (
                    <g key={`line-point-${i}`}>
                        <GlyphDot cx={cx} cy={cy} r={6} fill={contrast} stroke={d.color} fill={d.color} strokeWidth={9} />
                        {/*<GlyphDot cx={cx} cy={cy} r={4} fill={contrast} />*/}
                    </g>
                );
            })}
        </Group>
        <Group left={margin.left}>
            <AxisBottom
                top={yMax+40}
                //left={margin.left}
                scale={xScale}
                numTicks={data.length}
                stroke={'#1b1a1e'}
                label=""
                tickValues={data.map((d)=>d.x)}
                >
                {axis => {
                    const tickLabelSize = 10;
                    const tickRotate = 0;
                    const tickColor = '#8e205f';
                    const axisCenter = (axis.axisToPoint.x - axis.axisFromPoint.x) / 1;
                    return (
                    <g className="my-custom-bottom-axis">
                        {axis.ticks.map((tick, i) => {
                            const tickX = tick.to.x;
                            const tickY = tick.to.y + tickLabelSize + axis.tickLength;
                            return (
                                <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                                    <text
                                        transform={`translate(${tickX}, ${tickY}) rotate(${tickRotate})`}
                                        fontSize={tickLabelSize}
                                        textAnchor="middle"
                                        fill={data[i].color}
                                        >
                                        {data[i].nom}
                                    </text>
                                </Group>
                            );
                        })}
                        <text textAnchor="middle" transform={`translate(${axisCenter}, 40)`} fontSize="18" fontWeight="700">
                        {axis.label}
                        </text>
                    </g>
                    );
                }}
            </AxisBottom>
        </Group>
    </svg>
  );
};