
const initialstate = {
    services : [
        // DEMARRAGE
        { id:6,     name: "structure d'entreprise",                     type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:7,     name: "incorporation",                              type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:8,     name: "plan d'affaire",                             type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:9,     name: "plan comptable",                             type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:10,    name: "prévisions budgétaires",                     type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:11,    name: "recherche subventions",                      type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:12,    name: "financement",                                type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:13,    name: "plan de commercialisation",                  type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        // COURT TERME
        { id:14,    name: "procédures de fin de mois",                  type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        { id:15,    name: "gestion des RH",                             type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        { id:16,    name: "comparables budget vs réel",                 type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        { id:17,    name: "analyse des ratios financiers",              type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        { id:18,    name: "préparation des budgets annuels",            type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        // MOYEN TERME
        { id:19,   name: "révision structure financière",            type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:20,   name: "analyse stratégique",                      type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:21,   name: "programme réduction des coûts",            type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:22,   name: "analyse rentabilité & efficacité",         type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:23,   name: "révision de la structure d'entreprise",    type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:24,   name: "amélioration des processus continues",     type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:25,   name: "contrôles internes",                       type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:26,   name: "prix de revient",                          type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        // EXCELLENCE
        { id:27,    name: "planification stratégique",                  type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:28,    name: "plan de relève",                             type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:29,    name: "tableau de bord (scorecard)",                type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:30,    name: "analyse de la chaine des valeurs",           type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:31,    name: "rigueur & discipline",                       type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:32,    name: "plans quinquennaux",                         type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        // REDRESSEMENT
        { id:33,    name: "respirateur artificiel",                     type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:34,    name: "consolidation de dettes",                    type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:35,    name: "recherche de nouveaux investisseurs",        type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:36,    name: "réingénierie",                               type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:37,    name: "plan de revitalisation",                     type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:38,    name: "refinancement",                              type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
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