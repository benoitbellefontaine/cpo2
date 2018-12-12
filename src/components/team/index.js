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

const datacpo = [
    {texte:"Recherche de CPO...",                           text:"Search CPO...",                   extra_delay:false},
    {texte:"Date de création: 6 janvier 2020.",             text:"Creation Date: Jan 6 2020.",      extra_delay:true},
    {texte:"Clients satisfaits: 100+",                      text:"Satisfied Customers: 100+",       extra_delay:false},
    {texte:"Stratégie d'offre de services: cycles de vie",  text:"Strategic services offering based on: Enterprise Lifecycle",extra_delay:false},
    {texte:"Spécialisé dans: Redressement",                 text:"Specialized in: Reengineering",   extra_delay:false},
    {texte:"Autres domaines d'expertise:",                   text:"Other Domains of Expertise:",     extra_delay:false},
    {texte:"*** démarrage",                                 text:"*** Startup",                     extra_delay:false},  
    {texte:"*** court terme",                               text:"*** Short Term",                  extra_delay:false},  
    {texte:"*** moyen terme",                               text:"*** Medium Term",                 extra_delay:false},  
    {texte:"*** excellence",                                text:"*** Excellence",                  extra_delay:false},  
];

const datapierre = [
    {texte:"Recherche de Pierre Richer ...",                        text:"Search Pierre Picher...",             extra_delay:false},
    {texte:"Expérience:",                                           text:"Experience:",                         extra_delay:true},
    {texte:"*** administrateur secteur bancaire 25 ans",            text:"*** 25 years as a bank manager",      extra_delay:false},
    {texte:"*** administrateur IQ 10 ans",                          text:"*** 10 years as a investment manager at IQ",           extra_delay:false},
    {texte:"Forces: ",                                              text:"Strengths",                           extra_delay:false},
    {texte:"*** démarrage (financement, plan de d'affaire, commercialisation)",     text:"Startup (financing, business plan, marketing)",extra_delay:false},
    {texte:"*** excellence (planification stratégique, rèleve)",     text:"Excellence (strategic, succession planning)",extra_delay:false},
];

const dataguy = [
    {texte:"Recherche de Guy Boucher...",                       text:"Search Guy Boucher...",                   extra_delay:false},
    {texte:"Expérience:",                                       text:"Experience",      extra_delay:true},
    {texte:"*** analyse",                                       text:"Analysis",        extra_delay:true},
    {texte:"*** comptabilité",                                  text:"Accounting",      extra_delay:true},
    {texte:"*** fondateur",                                     text:"Business Founder",       extra_delay:false},
    {texte:"Forces: ",                                          text:"Strengths",       extra_delay:false},
    {texte:"*** toutes les étapes de croissance de l'entreprise",     text:"All Growth Stages in a Business",extra_delay:false},
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

        const mappedCPO = datacpo.map((_,i) => {

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

        const mapped = datapierre.map((_,i) => {

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

        const mapped = dataguy.map((_,i) => {

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
            height: '90vh',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundImage: 'linear-gradient(#247BA0, black)'
            }}>

            <div style={{margin:0,padding:0,width:'100%',height:'20%',textAlign:'center'}}>
                <h6 style={{lineHeight:'120px'}}>{language ?<div>Équipe</div>:<div>Team</div>}</h6>
            </div>

            <div style={{display:'flex',width:'100%',height:'100%',justifyContent:'space-between'}}>
            
                <div>
                    <div className="glitch1" data-text="CPO" onClick={()=>this.handleSelect(1)}>CPO</div>
                    <div className="glitch2" data-text="PIERRE_RICHER" onClick={()=>this.handleSelect(2)}>PIERRE_RICHER</div>
                    <div className="glitch3" data-text="GUY_BOUCHER" onClick={()=>this.handleSelect(3)}>GUY_BOUCHER</div>
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