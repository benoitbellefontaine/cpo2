import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
//import { Motion, StaggeredMotion, spring } from 'react-motion';
//import styled from 'styled-components';

import * as d3 from 'd3';

import { combineReducers }  from 'redux';
import { createStore }      from 'redux';
import { connect }          from 'react-redux';
import reducers             from '../../reducers';
import store                from '../../index';

import './tree.css';

/* ------------ SPRING ------------ */
const startY = 25;
const startOpacity = 0;

// Lower damping and stiffness here will exaggerate the 
// Start of the sequence of animations
const initialStiffness = 400;
const initialDamping = 60;

// Lower damping and stiffness here will exaggerate the 
// End of the sequence of animations
const finalStiffness = 400; 
const finalDamping = 60;
/* -------------------------------- */

const springConfig = {stiffness: 400, damping: 60};

const innerWrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
}

var treeData =
  {
    "name": "CPO",
    "id": 0, 
    "selected":true,
    "desc": "Cliquer sur les carrés pleins pour découvrir l'arborescence. Cliquer sur les carrés vides pour découvrir les services et les inclure dans la liste sur la droite.",
    "color":'rgb(31, 119, 180)',
    "children": [
        { "name": "Démarrage",
            "id": 1, "color":'rgb(255,127,14)',
            "desc": "Votre entreprise est sur le point d'éclore et vous être maintenant prêt à l'introduire au monde entier. Mais avez-vous ou maîtrisez-vous les outils essentiels à un bon démarrage? Voici quelques outils et services mis à votre disposition pour assurer un démarrage réussi : incorporation, plan d'affaire, plan comptable, etc...", 
            "selected":false,
            "children": [
                {   "id": 6,
                    "name": "structure d'entreprise", "color":'rgb(255,127,14)', "selected":false,
                    "desc": "Ensemble des règles de répartition de l'autorité, des tâches, de contrôle et de coordination. Une bonne structure est un gage de succès assuré."
                },
                {   "id": 7,
                    "name": "incorporation", "color":'rgb(255,127,14)',"selected":false,
                    "desc": "Une des étapes les plus importantes lors de la création de l'entreprise afin d'être conforme à la loi et de vous protéger en cas de litige."
                },
                {   "id": 8,
                    "name": "plan d'affaire", "color":'rgb(255,127,14)',"selected":false,
                    "desc": "La meilleure façon pour rassembler vos idées sur votre projet et de le communiquer aux autres. Nous savons comment les rédiger."
                },
                {   "id": 9,
                    "name": "plan comptable", "color":'rgb(255,127,14)',"selected":false,
                    "desc": "Ou comment implanter une méthode rigoureuse de cueillette des données financiêres de l'entreprise et de maintenir cette même méthode tout au long des cycles de vie de l'entreprise."
                },
                {   "id": 10,
                    "name": "prévisions budgétaires", "color":'rgb(255,127,14)', "color":'rgb(255,127,14)',"selected":false,
                    "desc": "C'est l'outil par excellence pour établir les objectifs financiers de votre entreprise."
                },
                {   "id": 11,
                    "name": "recherche subventions", "color":'rgb(255,127,14)',"selected":false,
                    "desc": "Pour mieux vous aider à obtenir de que vous méritez en termes d'aide gouvernementale aux entreprises."
                },
                {   "id": 12,
                    "name": "financement", "color":'rgb(255,127,14)',"selected":false,
                    "desc": "Pour mieux vous aider à obtenir de que vous méritez en termes d'aide financière aux entreprises."
                },
                {   "id": 13,
                    "name": "plan de commercialisation", "color":'rgb(255,127,14)',"selected":false,
                    "desc": "Un outil efficace pour mieux connaître ce que le marché recherche dans votre créneau."
                },
            ]
        },
        { "name": "Court terme",
            "id": 2,"selected":false,"color":'rgb(44,160,44)',
            "desc": "Votre entreprise a le vent dans les voiles mais sa vitesse de croisière n'est pas au niveau de vos espérances (les problèmes sont difficilement identifiables et une consultation externe est requise). Les services que nous offront pour ce cycle pourront faire la différence entre la vitesse actuelle et une meilleure vitesse de croisiêre.",
            "children": [
                { "id": 14,"name": "procédures de fin de mois", "desc": "Implantation systématique de vérification des transactions répartie en tâches et arrimage avec les prévisions budgétaire ci-haut mentionnés.","color":'rgb(44,160,44)',"selected":false},
                { "id": 15,"name": "gestion des ressources humaines", "desc": "Pour les forces de chacun de cahcun de vos collaborateurs et maximiser leur potentiel. Connaître les forces de chacun pour mieux les répartir.","color":'rgb(44,160,44)',"selected":false},
                { "id": 16,"name": "comparables budget vs réel", "desc": "Outil de mesure des écarts entre les prévisions antérieures et la réalité du moment afin d'apporter les corrections nécessaires.","color":'rgb(44,160,44)',"selected":false},
                { "id": 17,"name": "analyse des ratios financiers", "desc": "Outil de gestion pour comprendre et analyser vos états financiers en plus d'évaluer la performance de vos opérations.","color":'rgb(44,160,44)',"selected":false},
                { "id": 18,"name": "préparation des budgets annuels", "desc": "Après un an d'existence, cette étape est l'extension des prévisions budgétaires du cycle démarrage. Étape essentielle à réaliser chaque année.","color":'rgb(44,160,44)',"selected":false}
            ]
        },
        { "name": "Moyen terme" ,
            "id": 3,"selected":false,"color":'rgb(214,39,40)',
            "desc": "Une vision à long terme est maintenant nécessaire pour votre entreprise pour emprunter la voie de la pérennité. Que ce soit pour parer à un changement de garde soudain (plan de relève), vérifier l'état actuel de la situation (analyse des états financiers) ou améliorer les méthodes actuelles (analyse du prix de revient), nous proposons maintenant des outils spécialisés pour assurer la pérennité de votre entreprise.",
            "children": [
                { "id": 19,"name": "révision structure financière","desc":"Outil pour analyser en profondeur les cycles d'exploitation, d'investissement et de financement de votre entreprise.","color":'rgb(214,39,40)',"selected":false },
                { "id": 20,"name": "analyse stratégique","desc":"Processus d'analyse de la situation de votre entreprise ou d'un de vos domaines d'activité stratégique par rapport à votre environnement, votre marché, vos concurrents et leurs stratégies actuelles et potentielles dans le futur et ses capacités actuelles et futures.","color":'rgb(214,39,40)',"selected":false },
                { "id": 21,"name": "programme de réduction des coûts","desc":"Implantation d'une méthode pour réduire sinon restreindre les coûts pour assurer un contrôle accru de vos opérations.","color":'rgb(214,39,40)',"selected":false },
                { "id": 22,"name": "analyse rentabilité & efficacité","desc":"La rentabilité par l'efficacité: mise en place de jalons pour assurer le succès de votre entreprise.","color":'rgb(214,39,40)',"selected":false },
                { "id": 23,"name": "révision de la structure d'entreprise","desc":"Revoir la structure d'entreprise mise en place lors du démarrage et corriger s'il y a lieu.","color":'rgb(214,39,40)',"selected":false },
                { "id": 24,"name": "amélioration des processus continues","desc":"Comparer les processus actuels de votre entreprise avec des processus idéaux et les améliorer, le but étant de les améliorer continuellement.","color":'rgb(214,39,40)',"selected":false },
                { "id": 25,"name": "contrôles internes","desc":"L'application ponctuelle des contrôles internes assure la maîtrise des opérations. Dans le cas extrême du redressement, on remplace les contrôles internes par les outils de redressement pour restructurer en profondeur.","color":'rgb(214,39,40)',"selected":false },
                { "id": 26,"name": "prix de revient","desc":"Outil pour déterminer si votre entreprise est rentable et le niveau de rentabilité des chacun de vos produit et services","color":'rgb(214,39,40)',"selected":false }
            ]
        },
        { "name": "Excellence" ,
            "id": 4, "selected":false,"color":'rgb(148,103,189)',
            "desc": "Pas de temps pour la complaisance et inutile de s'asseoir sur ses lauriers. Même si tout semble bien aller, en est-il vraiment ainsi? Un survol rapide par notre équipe sur les modus operandi de votre entreprise nous permettront de trouver les failles existentes et optimer votre rendement. Une simple analyse des états financiers ou l'aplication d'un contrôle interne peut parfois révéler d'importantes lacunes au niveaux des méthodes et des opérations.",
            "children": [
                { "id": 27,"name": "planification stratégique","desc":"","color":'rgb(148,103,189)',"selected":false },
                { "id": 28,"name": "plan de relève","color":'rgb(148,103,189)',"selected":false },
                { "id": 29,"name": "tableau de bord (scorecard)","color":'rgb(148,103,189)',"selected":false },
                { "id": 30,"name": "analyse de la chaine des valeurs","color":'rgb(148,103,189)',"selected":false },
                { "id": 31,"name": "rigueur & discipline","color":'rgb(148,103,189)',"selected":false },
                { "id": 32,"name": "plans quinquennaux","color":'rgb(148,103,189)',"selected":false },
            ]
        },
        { "name": "Redressement" ,
            "id": 5, "selected":false,"color":'rgb(140,86,75)',
            "desc": "Votre entreprise est en déclin et doit subir un redressement (problèmes fondamentaux liés à la structure de l'entreprise et les méthodes employées). Une application des services ci-dessous nous permettront de vous aider à redresser et remettre votre entreprise rapidement sur la voie du succès.",
            "children": [
                { "id": 33,"name": "respirateur artificiel", "color":'rgb(140,86,75)',"selected":false },
                { "id": 34,"name": "consolidation de dettes", "color":'rgb(140,86,75)',"selected":false },
                { "id": 35,"name": "recherche de nouveaux investisseurs", "color":'rgb(140,86,75)',"selected":false },
                { "id": 36,"name": "réingénierie", "color":'rgb(140,86,75)',"selected":false },
                { "id": 37,"name": "plan de revitalisation", "color":'rgb(140,86,75)',"selected":false },
                { "id": 38,"name": "refinancement", "color":'rgb(140,86,75)',"selected":false },
            ]
        },
    ]
};

//var color = d3.scaleOrdinal(d3.schemeCategory10);
var i = 0, duration = 750;

// action
function toggleService(id) {
    console.log("toggleService",id);
    return {
        type: 'TOGGLE_SERVICE',
        id
    }
}

// initialstate
/*const initialstate = [
    { id:1,     name: "structure d'entreprise",         type: "demarrage",       selected:false },
    { id:2,     name: "incorporation",                  type: "demarrage",       selected:false },
    { id:3,     name: "procédures de fin de mois",      type: "court terme",     selected:false },
    { id:4,     name: "gestion des RH",                 type: "court terme",     selected:false },
    { id:5,     name: "révision structure financière",  type: "moyen terme",     selected:false },
    { id:6,     name: "analyse stratégique",            type: "moyen terme",     selected:false },
    { id:7,     name: "planification stratégique",      type: "excellence",      selected:false },
    { id:8,     name: "plan de relève",                 type: "excellence",      selected:false },
    { id:9,     name: "tableau de bord (scorecard)",    type: "excellence",      selected:false },
    { id:10,    name: "respirateur artificiel",         type: "redressement",    selected:false },
    { id:11,    name: "consolidation de dettes",        type: "redressement",    selected:false },
];*/

// reducer
/*function serviceApp( state = [], action ) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
        })
        case TOGGLE_SERVICE:
            return state.map((service, index) => {
                if (index === action.index) {
                    return Object.assign({}, service, {
                        selected: !service.selected
                    })
                }
            return service
        })
        default:
            return state
    }
}*/

// combineReducers
//const reducer = combineReducers({ serviceApp })

//const store = createStore(reducer);

// presentation
const Item = ({ key, onClick, selected, name, color, opacity }) => (
    <div
        key={key}
        //className={selected ? "show" : "hide" }
        style={{
            listStyleType: 'none',
            padding: 10,
            margin: 2,
            borderRadius: 0,
            color: selected ? 'white' : 'black',
            backgroundColor: selected ? color : 'rgba(255,255,255,1)',
            border: selected ? '2px solid white' : '2px solid gray',
            fontSize: '16px',
            fontWeight: 600,
            flexGrow: 1,
            opacity: opacity
            //transform: 'translateY(100px)',
            //transition: 'transform 1000ms ease-in'
        }}
        >

        <div key={key} style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
            <div><i className={selected ? `fas fa-check-square fa-1x` : `far fa-square fa-1x`}></i></div>
            <span style={{width:'90%',margin:'0 auto',textAlign:'center'}}>{name}</span>
            <span> </span>
        </div>

    </div>
)

Item.propTypes = {
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    opacity: PropTypes.number.isRequired,
}

const List = ({ serviceApp }) => {//, onServiceClick }) => {
    if (serviceApp.length === 0)
        return (
            <div className="item-presentation-li">
                <div style={{margin:'0px',padding:'0px'}}>
                    <div><i className={`fas fa-times-circle fa-1x`}></i></div>
                    <span style={{width:'90%',margin:'0 auto',textAlign:'center'}}>
                        {(true) ? "Aucun service sélectionné" : "No services selected"}
                    </span>
                </div>
            </div>
        )
    return (
        <div>

            <div style={{display:'flex',flexWrap: 'wrap',width:'100%',margin:0,padding:'0px'}}>


                {serviceApp.map( (service,id) => (
                    <Item key={id} {...service} name={service.texte} opacity={1}  />
                ))}

                
            </div>
            
        </div>
    )
}
List.propTypes = {
    serviceApp: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        selected: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    //onServiceClick: PropTypes.func.isRequired
}

//connect
const getVisibleServices = (services, filter) => {
    switch (filter) {
      case 'SHOW_SELECTED':
        return services.filter(t => t.selected)
      case 'SHOW_ALL':
      default:
        return services
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        serviceApp: getVisibleServices( state.services, ownProps.filter )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onServiceClick: id => {
            console.log("mapDispatchToProps");
            dispatch(toggleService(id))
        }
    }
}

const ServiceList = connect(
    mapStateToProps,
    mapDispatchToProps
)(List)


class Tree extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            treemap: null,
            root: null,
            svg: null
        };
    }

    componentDidMount() {

        const {width,height} = this.props;

        var root;

        // declares a tree layout and assigns the size
        var treemap = d3.tree().size([height, width]);

        // Assigns parent, children, height, depth
        root = d3.hierarchy(treeData, function(d) { return d.children; });
        //root = d3.hierarchy({"name":"CPO"});
        //services = d3.hierarchy(root, function(d) { return [{"name":"démarrage"},{"name":"court terme"}] } );
        root.x0 = height / 2;
        root.y0 = 0;

        /*var root_stratify = d3.stratify()
            .id(function(d) { return d.name; })
            .parentId(function(d) { return d.parent; })
            (table_stratify);*/

        /*root_stratify = d3.stratify()
            .id(function(d) { return d.name; })
            .parentId(function(d) { return d.parent; })
            (demarrage_stratify);*/

        this.setState({
            treemap:    treemap,
            root:       root
            //root_stratify:root_stratify
        });
        
    }

    componentDidUpdate() {

        console.log('tree:componentDidUpdate');

        var color = d3.scaleOrdinal(d3.schemeCategory10);

        const {treemap,root} = this.state;

        const {width,height} = this.props;

        var margin = {top: 0, right: 90, bottom: 30, left: 30};
            //width = 960 - margin.left - margin.right,
            //height = 500 - margin.top - margin.bottom;

        const svg = d3.select(this.refs.anchor)
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        /******************* text section *******************/
        /*
        svg.append("text")
            .text("****")
            .attr("y", 100)
            .attr("class", "text")
            .attr("x", 120)
            .style("font-size", 36)
            .style("font-family", "monospace")
        */

        // Collapse after the second level
        //root.children.forEach(collapse);
        collapse(root);

        update(root);

        function collapse(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
            }
        }

        function update(source) {

            // Assigns the x and y position for the nodes
            var treeData = treemap(root);

            // Compute the new tree layout.
            var nodes = treeData.descendants(),
                links = treeData.descendants().slice(1);

            // Normalize for fixed-depth.
            nodes.forEach(function(d){ d.y = d.depth * 180; });

            /******************* nodes section *******************/

                // Update the nodes...
                var node = svg.selectAll('g.node')
                    //.data(nodes, function(d) {return d.id || (d.id = ++i); });
                    .data(nodes, function(d) {
                        if (d.data.children) {
                            console.log('node id:'+d.data.id+' has children');
                        }
                        //else console.log('node id:'+d.data.id+' has no children');
                        return d.data.id;
                });

                // Enter any new nodes at the parent's previous position.
                var nodeEnter = node.enter().append('g')
                    .attr('class', 'node')
                    .attr("transform", function(d) {
                        return "translate(" + source.y0 + "," + source.x0 + ")";
                    })
                    .style('opacity',0)
                    .on('click', (d,i,nodes) => {
                            store.dispatch({ type: 'TOGGLE_SERVICE', id:d.data.id });
                            click(d,i,nodes);
                        }
                    );
                    //.on("mouseover", handleMouseOver);

                // Add Circle or Rect for the nodes
                nodeEnter.append('rect')
                    //.attr("class","noderect")
                    .attr('x',-15)
                    .attr('y',-15)
                    .attr('width',30)
                    .attr('height',30)
                    .attr('class', 'node')
                    .attr('r', '20px')
                    .style("fill", function(d,i) { 
                        return d._children ? color(i) :  d.data.color;
                    })
                    .style("stroke-width", function(d) {return d._children ? 0 : 5; })
                    .style("stroke", (d,i) => { 
                        return d._children ? color(i) : d.data.color;
                    });

                // Add labels for the nodes
                nodeEnter.append('text')
                    .attr("class","nodetext")
                    .attr("dy", "0em")
                    .attr("x", function(d) { return d.children || d._children ? 0 : "2em"; })
                    .attr("y", function(d) { return d.children || d._children ? "-1.5em" : 0; })
                    .attr("text-anchor", function(d) { return d.children || d._children ? "middle" : "start"; })
                    //.attr("text-anchor", "middle")
                .text(function(d) { return d.data.name; });

                // UPDATE NODES
                var nodeUpdate = nodeEnter.merge(node);

                // Transition to the proper position for the node
                nodeUpdate.transition()
                    .duration(duration)
                    .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
                    .style('opacity',1);

                // Update the node attributes and style
                nodeUpdate.select('rect.node')
                    .attr('x',-15)
                    .attr('y',-15)
                    .attr('width',30)
                    .attr('height',30)
                    .attr('r', 20)
                    /*.style("fill", function(d) {
                        return d._children ? "lightsteelblue" : "#fff";
                    })*/
                    .style("fill", function(d,i) { 
                        if (i>5)
                            return (d.data.selected) 
                                ? d.data.color
                                : '#fff' ;
                        else return d.data.color;
                    })
                    .attr('cursor', 'pointer');

                    /** 
                     * (d.data.selected) 
                        ? d3.select(nodes[i]).select("rect").style("fill",d.data.color) 
                        : d3.select(nodes[i]).select("rect").style("fill",'#fff') ;
                    */

                console.log('nodeUpdate',nodeUpdate);

                // Remove any exiting nodes
                var nodeExit = node.exit().transition()
                    .duration(duration)
                    .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
                    .style('opacity', 0)
                    .remove();

                // On exit reduce the node circles size to 0
                nodeExit.select('circle')
                    .attr('r', 1e-6);

                // On exit reduce the opacity of text labels
                nodeExit.select('text')
                    .style('fill-opacity', 1e-6);

            /******************* nodes section *******************/

            /******************* links section *******************/

                // Update the links...
                var link = svg.selectAll('path.link')
                    .data(links, function(d) { 
                        //console.log('link id:',d.data.id); 
                        return d.data.id; 
                });

                // Enter any new links at the parent's previous position.
                var linkEnter = link.enter().insert('path', "g")
                    .attr("class", "link")
                    .attr('d', function(d){
                        var o = {x: source.x0, y: source.y0}
                        return diagonal(o, o)
                    });

                // UPDATE LINKS
                var linkUpdate = linkEnter.merge(link);

                // Transition back to the parent element position
                linkUpdate.transition()
                    .duration(duration)
                    .attr('d', function(d){ return diagonal(d, d.parent) });

                // Remove any exiting links
                var linkExit = link.exit().transition()
                    .duration(duration)
                    .attr('d', function(d) {
                        var o = {x: source.x, y: source.y}
                        return diagonal(o, o)
                    })
                    .remove();

            /******************* links section *******************/

            // Store the old positions for transition.
            nodes.forEach(function(d){
                d.x0 = d.x;
                d.y0 = d.y;
            });

            // Creates a curved (diagonal) path from parent to the child nodes
            function diagonal(s, d) {
                var path = `M ${s.y} ${s.x}
                        C ${(s.y + d.y) / 2} ${s.x},
                        ${(s.y + d.y) / 2} ${d.x},
                        ${d.y} ${d.x}`

                return path;
            }

            // Toggle children on click.
            function click(d,i,nodes) {
                if (d.children) {
                    var val = d3.select(nodes[i]).select("text").text();
                    var servicebox = d3.select("#servicebox").text(val);
                    //var select = d3.select(nodes[i]).select("rect").style("fill",'#fff');
                    //console.log('has no children',d.data.desc);
                    d._children = d.children;
                    d.children = null;
                } else {
                    var val = d3.select(nodes[i]).select("text").text();
                    var servicebox = d3.select("#servicebox").html("<span><strong class='service-title'>"+d.data.name+"</strong> : "+d.data.desc+"</span>");
                    //var select = d3.select(nodes[i]).select("rect").style("fill",d.data.color);
                    d.data.selected = !d.data.selected;
                    (d.data.selected) 
                        ? d3.select(nodes[i]).select("rect").style("fill",d.data.color) 
                        : d3.select(nodes[i]).select("rect").style("fill",'#fff') ;
                    d.children = d._children;
                    d._children = null;
                }
                update(d);
            }

        }

    }

    /*componentWillUnmount() {
        function collapse(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
            }
        }
        collapse(this.state.root);
    }*/

    render() {

        const {language,width,height} = this.props;

        const viewbox = "0 0 " + width + " " + height;

        const { treemap,root,svg } = this.state;

        if ( !treemap || !root  ) { 
            console.log('!treemap || !root || !svg'); 
            return null; 
        }
        else {
            console.log('TREEMAP',treemap);
            console.log('ROOT',root);
            console.log('SVG',svg);
        }

        //const language = true;

        return (

            <animated.div className="mainRoute" style={{ backgroundColor: `#eeeefe`,height:'100%',boxSizing:'border-box',display:'flex',flexDirection:'column',justifyContent:'flex-start' }}>

                <h6 style={{margin:20,padding:0}}>Services</h6>

                <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}>

                    <div style={{display:"flex", flexDirection:"column",width:'80vw'}}>
                        <div style={{display:"flex", flexDirection:"row",borderBottom:'1px solid black',}}>
                            <svg style={{width:'50vw',height:'65vh',backgroundColor:'white',
                                //boxShadow: 'inset 5px 5px 10px rgba(0,0,0,.5),inset -5px -5px 10px rgba(0,0,0,.5)',
                                borderRadius: 0,
                                //boxShadow: '5px 5px 5px rgba(255,255,255,.8),-5px -5px 5px rgba(255,255,255,.8)'
                                }} viewBox={viewbox}>
                                <g ref="anchor" width={width} height={height} />
                            </svg>
                            <div style={{width:'30vw',height:'65vh',backgroundColor:'white',overflowY:'auto',
                                borderLeft:'1px solid darkgray',
                                //boxShadow: 'inset 5px 5px 10px rgba(0,0,0,.5),inset -5px -5px 10px rgba(0,0,0,.5)',
                                borderRadius: 0,
                                //boxShadow: '5px 5px 5px rgba(255,255,255,.8),-5px -5px 5px rgba(255,255,255,.8)'
                                }}>
                                <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:0,padding:'5px 4px 0px 4px'}}>
                                   <div style={{textAlign:'center',width:'100%',borderBottom:'1px solid red',backgroundColor:'red'}}>
                                       Sélection
                                   </div>
                                </div>
                                <ServiceList style={{width:'50%',margin:'100px auto'}} filter={'SHOW_SELECTED'}/>
                            </div>
                        </div>
                        <div id='servicebox' style={{
                            fontSize:'20px',height:'12vh',color:'black',backgroundColor:'white',overflowY:'auto',padding:10,textAlign:'left'}}>
                            Cliquer sur les carrés pleins pour découvrir l'arborescence. Cliquer sur les carrés vides pour découvrir les services et les inclure dans la liste sur la droite.
                        </div>
                    </div>

                </div>
            
            </animated.div>

        )
    }

}

export default Tree;
