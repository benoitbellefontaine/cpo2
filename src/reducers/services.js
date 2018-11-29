
const initialstate = {
    services : [
        // DEMARRAGE
        { id:1,     text: "structure d'entreprise",                     type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:2,     text: "incorporation",                              type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:3,     text: "plan d'affaire",                             type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:4,     text: "plan comptable",                             type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:5,    text: "prévisions budgétaires",                     type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:6,    text: "recherche subventions",                      type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:7,    text: "financement",                                type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:8,    text: "plan de commercialisation",                  type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        // COURT TERME
        { id:9,    text: "procédures de fin de mois",                  type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        { id:10,    text: "gestion des RH",                             type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        { id:11,    text: "comparables budget vs réel",                 type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        { id:12,    text: "analyse des ratios financiers",              type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        { id:13,    text: "préparation des budgets annuels",            type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        // MOYEN TERME
        { id:14,   text: "révision structure financière",            type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:15,   text: "analyse stratégique",                      type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:16,   text: "programme réduction des coûts",            type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:17,   text: "analyse rentabilité & efficacité",         type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:18,   text: "révision de la structure d'entreprise",    type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:19,   text: "amélioration des processus continues",     type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:20,   text: "contrôles internes",                       type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:21,   text: "prix de revient",                          type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        // EXCELLENCE
        { id:22,    text: "planification stratégique",                  type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:23,    text: "plan de relève",                             type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:24,    text: "tableau de bord (scorecard)",                type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:25,    text: "analyse de la chaine des valeurs",           type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:26,    text: "rigueur & discipline",                       type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:27,    text: "plans quinquennaux",                         type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        // REDRESSEMENT
        { id:28,    text: "respirateur artificiel",                     type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:29,    text: "consolidation de dettes",                    type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:30,    text: "recherche de nouveaux investisseurs",        type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:31,    text: "réingénierie",                               type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:32,    text: "plan de revitalisation",                     type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:33,    text: "refinancement",                              type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
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
                    text: action.text,
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