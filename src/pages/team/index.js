import React from 'react'
import { Keyframes, animated, Spring, config } from 'react-spring'
import { ParentSize } from '@vx/responsive'

import './equipe.css';
import './glitch.css';

const Content = Keyframes.Trail({
  peek: [{ delay: 500, y:0, opacity: 1 }, { delay: 500, y:0, opacity: 1 }],
  open: { delay: 750, from: { y: -50, opacity:0 }, to: { y: 0, opacity:1 }, config: config.stiff },
  close: { delay: 500, from: { y: 0, opacity:1 }, to: { y: -50, opacity:0 }, config: config.stiff }
});

const topLeftColor = '#3460cf'
const topRightColor = '#ffffff'
const bottomColor = '#305870'

const DELAYCHARACTER = 0.05;
const EXTRADELAYSTRING = 2;

const pedigree_cpo = [
    {texte:"Recherche de CPO ...",                          text:"Search CPO ...",                          extra_delay:false},
    {texte:"Date de création: 6 janvier 2014",              text:"Creation Date: Jan 6 2014",               extra_delay:true},
    {texte:"Stratégie d'offre de services",                 text:"Strategic services offering",             extra_delay:false},
    {texte:"basée sur cycles de vie de l'entreprise",       text:"based on Enterprise Lifecycle",           extra_delay:false},
    {texte:"Spécialisation:",                               text:"Expertise in:",                           extra_delay:false},
    {texte:" + démarrage",                                  text:" + Startup",                              extra_delay:false},
    {texte:" + activités court terme",                      text:" + Short Term Operations",                extra_delay:false},
    {texte:" + activités moyen terme",                      text:" + Middle Term Operations",               extra_delay:false},
    {texte:" + excellence opérationnelle",                  text:" + Operational Excellence",               extra_delay:false},
    {texte:"Principal domaine d'expertise:",                text:"Main Domain of Expertise:",              extra_delay:false},
    {texte:" + redressement",                               text:" + Reengineering",                        extra_delay:false},
];

const pedigree_pierre = [
    {texte:"Recherche de Pierre Richer ...",             text:"Search Pierre Richer ...",       extra_delay:false},
    {texte:"a oeuvré dans les secteurs:",                text:"Provided excellent work in ",    extra_delay:true},
    {texte:" - bancaire:",                               text:" - investment banking",          extra_delay:false},
    {texte:" - financier",                               text:" - financial services",          extra_delay:false},
    {texte:"en tant que",                                text:"As a",                           extra_delay:false},
    {texte:"*** conseiller financier",                   text:"+++ Financial Consultant",       extra_delay:false},
    {texte:"*** directeur",                              text:"+++ Director",                   extra_delay:false},
    {texte:"*** gestionnaire",                           text:"+++ Manager",                    extra_delay:false},
    {texte:"Objectif: aider ses clients ",               text:"Goal: help his clients",         extra_delay:false},
    {texte:"à réaliser leur potentiel",                  text:"attain their full potential",    extra_delay:false},
];

const pedigree_guy = [
    {texte:"Recherche de Guy Boucher ...",               text:"Search Guy Boucher ...",         extra_delay:false},
    {texte:"a oeuvré dans les secteurs:",                text:"Provided excellent work in ",    extra_delay:true},
    {texte:" - manufacturier:",                          text:" - manufacturing sector",        extra_delay:false},
    {texte:" - des services",                            text:" - service sector",              extra_delay:false},
    {texte:"en tant que",                                text:"As an expert in",                extra_delay:false},
    {texte:"*** analyste",                               text:"+++ Business Analysis",          extra_delay:false},
    {texte:"*** gestionnaire",                           text:"+++ Management",                 extra_delay:false},
    {texte:"*** spécialiste redressement",               text:"+++ reengineering",              extra_delay:false},
    {texte:"Objectif: aider ses clients ",               text:"Goal: help his clients",         extra_delay:false},
    {texte:"à réaliser leur potentiel",                  text:"attain their full potential",    extra_delay:false},
];

class CPO extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            mappedCPO:null, 
            langue:null
        };
    }

    componentDidMount() {
        
        const langue = (this.props.language);

        let total_duration = 0;
        let arrayTotalDuration = [];

        const mappedCPO = pedigree_cpo.map((_,i) => {

            let extra = 0;
            if (_.extra_delay) extra = EXTRADELAYSTRING;

            let animationDuration = (langue) 
                ? (_.texte.length + 5) * DELAYCHARACTER
                : (_.text.length + 5) * DELAYCHARACTER;

            arrayTotalDuration.push(total_duration + extra)
                
            total_duration += animationDuration  + extra;

            let length = (langue) 
                ? _.texte.length + 5
                : _.text.length + 5;

            return {
                text: (langue) ? _.texte  : _.text,
                length: length,
                animation: (i === 0) 
                    ? "typing "+ animationDuration +"s steps("+ length +", end), scaleUp 0.1s forwards"
                    : "typing "+ animationDuration +"s steps("+ length +", end), scaleUp 0.1s forwards",
                animationDuration: animationDuration + "s, 0.1s",
                animationDelay: arrayTotalDuration[i],
                //animationTimingFunction: (i === 0) ? "steps("+length+", end), forwards" : "steps("+length+", end), ease",
            }
        });

        total_duration = 0;
        arrayTotalDuration = [];

        this.setState({ mappedCPO: mappedCPO })
    
    }

    render() {

        const {mappedCPO} = this.state;
        if ( mappedCPO === null ) 
            return null;
        
        return (
            <div className='search search--open'>
                {
                    mappedCPO.map((_,i) => {
                        const style = {
                            width: `${_.length}ch`,
                            //color: 'white',
                            animation: `${_.animation}`,
                            animationDelay: `${_.animationDelay}s`,
                            animationDuration: `${_.animationDuration}s`,
                            //animationTimingTunction: `${_.animationTimingTunction}`,
                            //lineHeight: '1.25',
                            //overflow: 'hidden',
                            //whiteSpace: 'nowrap'
                        };
                        return (
                            <p key={i} className="terminal__line" style={style}>{_.text}</p>
                        )
                    })
                }
            </div>
        )

    }
}

class Pierre extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            mapped:null, 
        };
    }

    componentDidMount() {

        console.log("Pierre:componentDidMount()")

        const langue = (this.props.language);

        console.log("langue : ",this.props.langue)

        let total_duration = 0;
        let arrayTotalDuration = [];

        const mapped = pedigree_pierre.map((_,i) => {

            let extra = 0;
            if (_.extra_delay) extra = EXTRADELAYSTRING;

            let animationDuration = (langue) 
                ? (_.texte.length + 5) * DELAYCHARACTER
                : (_.text.length + 5) * DELAYCHARACTER;

            arrayTotalDuration.push(total_duration + extra)
                
            total_duration += animationDuration  + extra;

            let length = (langue) 
                ? _.texte.length + 5
                : _.text.length + 5;

            return {
                text: (langue) ? _.texte  : _.text,
                length: length,
                animation: (i === 0) 
                    ? "typing "+ animationDuration +"s steps("+ length +", end), scaleUp 0.1s forwards"
                    : "typing "+ animationDuration +"s steps("+ length +", end), scaleUp 0.1s forwards",
                animationDuration: animationDuration + "s, 0.1s",
                animationDelay: arrayTotalDuration[i],
                //animationTimingFunction: (i === 0) ? "steps("+length+", end), forwards" : "steps("+length+", end), ease",
            }

        });

        total_duration = 0;
        arrayTotalDuration = [];

        this.setState({ mapped: mapped })
    
    }

    render() {

        const {mapped} = this.state;
        if ( mapped === null ) 
            return null;
        
        return (
            <div className='search search--open'>
                {
                    mapped.map((_,i) => {
                        const style = {
                            width: `${_.length}ch`,
                            animation: `${_.animation}`,
                            animationDelay: `${_.animationDelay}s`,
                            animationDuration: `${_.animationDuration}s`,
                        };
                        return (
                            <p key={i} className="terminal__line" style={style}>{_.text}</p>
                        )
                    })
                }
            </div>
        )

    }
}

class Guy extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            mapped:null, 
        };
    }

    componentDidMount() {
        // calc delays

        let total_duration = 0;
        let arrayTotalDuration = [];

        const mapped = pedigree_guy.map((_,i) => {

            let extra = 0;
            if (_.extra_delay) extra = EXTRADELAYSTRING;

            let animationDuration = (this.props.language) 
                ? (_.texte.length + 5) * DELAYCHARACTER
                : (_.text.length + 5) * DELAYCHARACTER;

            arrayTotalDuration.push(total_duration + extra)
                
            total_duration += animationDuration  + extra;

            let length = (this.props.language) 
                ? _.texte.length + 5
                : _.text.length + 5;

            return {
                text: (this.props.language) ? _.texte  : _.text,
                length: length,
                animation: (i === 0) 
                    ? "typing "+ animationDuration +"s steps("+ length +", end), scaleUp 0.1s forwards"
                    : "typing "+ animationDuration +"s steps("+ length +", end), scaleUp 0.1s forwards",
                animationDuration: animationDuration + "s, 0.1s",
                animationDelay: arrayTotalDuration[i],
            }
        });

        total_duration = 0;
        arrayTotalDuration = [];

        this.setState({ mapped: mapped })
    
    }

    render() {

        const {mapped} = this.state;
        if ( mapped === null ) 
            return null;
        
        return (
            <div className='search search--open'>
                {
                    mapped.map((_,i) => {
                        const style = {
                            width: `${_.length}ch`,
                            animation: `${_.animation}`,
                            animationDelay: `${_.animationDelay}s`,
                            animationDuration: `${_.animationDuration}s`
                        };
                        return (
                            <div key={i} className="terminal__line" style={style}>{_.text}</div>
                        )
                    })
                }
            </div>
        )

    }
}

class Membres extends React.Component {

    render() {

        const { index, language } = this.props;

        if ( index === 1 ) 
            return <CPO language={language}/>;
        if ( index === 2 ) 
            return <Pierre language={language} />;
        if ( index === 3 ) 
            return <Guy language={language} />;

        return null;

    }
}

class Equipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            cpo:null, 
            pierre:null, 
            guy:null,
            index: 0,
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const {cpo,pierre,guy} = this.state;
        const ref = this.refs.cpo;
        this.setState({cpo:this.refs.cpo,pierre:this.refs.pierre,guy:this.refs.guy});
    }

    handleSelect = (i) => {
        console.log('index select',i)
        this.setState({index:i})
        const glitch = this.refs.glitch;
        const glitch_name = this.refs.glitch_name;
        if (i===1) {
            glitch.className = "glitch glitch--style-1";
            //glitch_name.innerHTML = "Consultants PME Outaouais";
        }
        if (i===2) {
            glitch.className = "glitch glitch--style-2";
            //glitch_name.innerHTML = "Pierre Richer";
        }
        if (i===3) {
            glitch.className = "glitch glitch--style-3";
            //glitch_name.innerHTML = "Guy Boucher";
        }
    }
    
  render () {
    const {language} = this.props
    return (
        <animated.div className="mainRoute" 
            style={{ ...this.props.style,
            background: `#247BA0`,
            width: '100vw',
            height: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundImage: 'linear-gradient(#3da300, black)'
            }}>

            <div style={{margin:0,padding:0,width:'100%',height:'20%',textAlign:'center'}}>
                <h1 style={{lineHeight:'120px',color:'white'}}>{language ?<div>Équipe</div>:<div>Team</div>}</h1>
            </div>

            <div style={{display:'flex',width:'100%',height:'auto',justifyContent:'space-around'}}>
            
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div className="glitch1" data-text="CPO"            onClick={()=>this.handleSelect(1)}>CPO</div>
                    <div className="glitch2" data-text="PIERRE_RICHER"  onClick={()=>this.handleSelect(2)}>PIERRE_RICHER</div>
                    <div className="glitch3" data-text="GUY_BOUCHER"    onClick={()=>this.handleSelect(3)}>GUY_BOUCHER</div>
                </div>

                <div ref="glitch" className="glitch glitch--style-1">
                    <div className="glitch__img"></div>
                    <div className="glitch__img"></div>
                    <div className="glitch__img"></div>
                    <div className="glitch__img"></div>
                    <div className="glitch__img"></div>
                </div>
                
            </div>

            <Membres index={this.state.index} language={this.props.language}/>
            
        </animated.div>
    )
  }
}

export default Equipe;