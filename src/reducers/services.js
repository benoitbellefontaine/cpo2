
const initialstate = {
    services : [
        // DEMARRAGE
        { id:6,     nom: "structure d'entreprise",  "name": "enterprise structure" ,                  type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:7,     nom: "incorporation",           "name": "incorporation",                   type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:8,     nom: "plan d'affaire",          "name": "business plan",                   type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:9,     nom: "plan comptable",          "name": "accounting strategy",                   type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:10,    nom: "prévisions budgétaires",   "name": "budget forecasts",                  type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:11,    nom: "recherche subventions",   "name": "subsidies search",                   type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:12,    nom: "financement",              "name": "financing",                  type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:13,    nom: "plan de commercialisation", "name": "marketing plan",                 type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        // COURT TERME
        { id:14,    nom: "procédures de fin de mois",  "name": "month end procedures",                type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        { id:15,    nom: "gestion des RH",             "name": "human resource management",                type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        { id:16,    nom: "comparables budget vs réel",  "name": "actual vs. budget comparatives",               type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        { id:17,    nom: "analyse des ratios financiers",  "name": "financial ratio analysis",            type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        { id:18,    nom: "préparation des budgets annuels",  "name": "preparation of annual budgets",          type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        // MOYEN TERME
        { id:19,   nom: "révision structure financière",   "name": "financial structure revision",         type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:20,   nom: "analyse stratégique",             "name": "strategic analysis",         type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:21,   nom: "programme réduction des coûts",    "name": "cost reduction program",        type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:22,   nom: "analyse rentabilité & efficacité",  "name": "efficiency and ROI analysis",       type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:23,   nom: "révision de la structure d'entreprise", "name": "entreprise structure revision",   type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:24,   nom: "amélioration des processus continues",  "name": "continuous improvement process",   type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:25,   nom: "contrôles internes",     "name": "internal controls",                  type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:26,   nom: "prix de revient",        "name": "costing",                  type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        // EXCELLENCE
        { id:27,    nom: "planification stratégique",           "name": "strategic planning",       type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:28,    nom: "plan de relève",                      "name": "succession planning",       type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:29,    nom: "tableau de bord (scorecard)",         "name": "scorecard",       type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:30,    nom: "analyse de la chaine des valeurs",    "name": "value chain optimisation",       type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:31,    nom: "rigueur & discipline",                "name": "rigor & discipline",       type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:32,    nom: "plans quinquennaux",                  "name": "five-year plans",       type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        // REDRESSEMENT
        { id:33,    nom: "respirateur artificiel",              "name": "life support",       type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:34,    nom: "consolidation de dettes",             "name": "debt consolidation",      type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:35,    nom: "recherche de nouveaux investisseurs", "name": "search for new investors",       type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:36,    nom: "réingénierie",                        "name": "reengineering",       type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:37,    nom: "plan de revitalisation",              "name": "revitalization plan",       type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:38,    nom: "refinancement",                       "name": "refinancing",       type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
    ],
    selected: ''
}

const services = (state = initialstate.services, action) => {
    switch (action.type) {
        /*
        case 'ADD_SERVICE':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.text,
                    selected: false
                }
            ]
        */
        case 'SELECT_SERVICE':
            console.log('action.type',action.type);
            // find action text
            var svc =  state.find(function(service) {
                return service.id === action.id;
            })
            console.log(svc.text);
            state.selected = svc.text;
            return svc.text;
        case 'TOGGLE_SERVICE':
            // find action text
            return state.map(
                service => service.id === action.id ? { ...service, selected: !service.selected, selectOnly: true } : { ...service, selectOnly: false }
            )
        default:
            return state
    }
}

export default services