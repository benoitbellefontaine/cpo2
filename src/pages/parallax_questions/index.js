import React, { Fragment } from 'react'
import { Parallax } from 'react-spring'
import Curve from '../../components/situations/curve'
import { Group } from '@vx/group';
import { GlyphDot } from '@vx/glyph';
import { LinePath } from '@vx/shape';
import { genDateValue } from '@vx/mock-data';
import { scaleTime, scaleLinear } from '@vx/scale';
import { curveMonotoneX, curveBasis } from '@vx/curve';
import { Avatar, Form, Icon, Input, Button, Checkbox, Menu } from 'antd'
import * as BusinessIcons from '../../businessIcons'
import FileSolid from './business_icons/file-solid.svg'
import BriefcaseSolid from './business_icons/briefcase-solid.svg'

const data = genDateValue(15);

// accessors
const date = d => d.date;
const value = d => d.value;

// scales
const xScale = scaleTime({
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

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default class Questions extends React.Component {
  
    render() {
      const width = 800;
      const height = 400;
      const margin = {left:40,right:40,top:40,bottom:40};

      return (
        <Parallax ref={ref => (this.parallax = ref)} pages={3}>
            <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#73805E' }} />

            <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
            <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

            <Parallax.Layer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

            <Parallax.Layer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <img src={FileSolid} style={{ width: '5%', marginLeft: '20%', color:'red' }} />
                <img src={BriefcaseSolid} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
            </Parallax.Layer>

            <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            </Parallax.Layer>

            <Parallax.Layer offset={1.3} speed={0.0} style={{ opacity: 0.4 }}>
                <img src={FileSolid} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={BriefcaseSolid} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            </Parallax.Layer>

            <Parallax.Layer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
            </Parallax.Layer>

            <Parallax.Layer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
            </Parallax.Layer>

            <Parallax.Layer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
            </Parallax.Layer>

            <Parallax.Layer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
            </Parallax.Layer>

            <Parallax.Layer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <img src={url('earth')} style={{ width: '60%' }} />
            </Parallax.Layer>

            <Parallax.Layer
                offset={2}
                speed={-0.3}
                style={{
                    backgroundSize: '80%',
                    backgroundPosition: 'center',
                    backgroundImage: url('clients', true)
                }}
            />

            <Parallax.Layer
                offset={0}
                speed={0.1}
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize:'3vw' }}>      
                <div>Courbe des cycles de vie de l'entreprise</div>
                <Curve width={width} height={height} margin={margin} />
                <Button style={{position:'relative',top:10,width:40,height:40,textAlign:'center'}}
                    onClick={() => this.parallax.scrollTo(1)}>
                    <Icon type="arrow-down" themed="twoTone" 
                        style={{ position:'absolute', top:0, left:0, color: "#52c41a", fontSize: 40 }} />
                </Button>
            </Parallax.Layer>

            <Parallax.Layer
            offset={1}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(2)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={url('bash')} style={{ width: '40%' }} />
            </Parallax.Layer>

            <Parallax.Layer
            offset={2}
            speed={-0}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.parallax.scrollTo(0)}>
            <img src={url('clients-main')} style={{ width: '40%' }} />
            </Parallax.Layer>
            </Parallax>
        )
    }
}