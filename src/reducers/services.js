
const initialstate = {
    services : [
        // DEMARRAGE
        { id:6,     texte: "structure d'entreprise",                     type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:7,     texte: "incorporation",                              type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:8,     texte: "plan d'affaire",                             type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:9,     texte: "plan comptable",                             type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:10,    texte: "prévisions budgétaires",                     type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:11,    texte: "recherche subventions",                      type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:12,    texte: "financement",                                type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        { id:13,    texte: "plan de commercialisation",                  type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14', selectOnly:"false", def:"description"},
        // COURT TERME
        { id:14,    texte: "procédures de fin de mois",                  type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        { id:15,    texte: "gestion des RH",                             type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        { id:16,    texte: "comparables budget vs réel",                 type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        { id:17,    texte: "analyse des ratios financiers",              type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        { id:18,    texte: "préparation des budgets annuels",            type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44', selectOnly:"false", def:"description"},
        // MOYEN TERME
        { id:19,   texte: "révision structure financière",            type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:20,   texte: "analyse stratégique",                      type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:21,   texte: "programme réduction des coûts",            type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:22,   texte: "analyse rentabilité & efficacité",         type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:23,   texte: "révision de la structure d'entreprise",    type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:24,   texte: "amélioration des processus continues",     type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:25,   texte: "contrôles internes",                       type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        { id:26,   texte: "prix de revient",                          type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40', selectOnly:"false", def:"description"},
        // EXCELLENCE
        { id:27,    texte: "planification stratégique",                  type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:28,    texte: "plan de relève",                             type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:29,    texte: "tableau de bord (scorecard)",                type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:30,    texte: "analyse de la chaine des valeurs",           type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:31,    texte: "rigueur & discipline",                       type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        { id:32,    texte: "plans quinquennaux",                         type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189', selectOnly:"false", def:"description"},
        // REDRESSEMENT
        { id:33,    texte: "respirateur artificiel",                     type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:34,    texte: "consolidation de dettes",                    type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:35,    texte: "recherche de nouveaux investisseurs",        type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:36,    texte: "réingénierie",                               type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:37,    texte: "plan de revitalisation",                     type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
        { id:38,    texte: "refinancement",                              type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75', selectOnly:"false", def:"description"},
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
                    texte: action.text,
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