
const initialstate = {
    services : [
        // DEMARRAGE
        { id:1,     text: "structure d'entreprise",                     type: "demarrage",      selected:false, color:'rgb(255,127,14)' },
        { id:2,     text: "incorporation",                              type: "demarrage",      selected:false, color:'rgb(255,127,14)' },
        { id:3,     text: "plan d'affaire",                             type: "demarrage",      selected:false, color:'rgb(255,127,14)' },
        { id:4,     text: "plan comptable",                             type: "demarrage",      selected:false, color:'rgb(255,127,14)' },
        { id:5,    text: "prévisions budgétaires",                     type: "demarrage",      selected:false, color:'rgb(255,127,14)' },
        { id:6,    text: "recherche subventions",                      type: "demarrage",      selected:false, color:'rgb(255,127,14)' },
        { id:7,    text: "financement",                                type: "demarrage",      selected:false, color:'rgb(255,127,14)' },
        { id:8,    text: "plan de commercialisation",                  type: "demarrage",      selected:false, color:'rgb(255,127,14)' },
        // COURT TERME
        { id:9,    text: "procédures de fin de mois",                  type: "court terme",    selected:false, color:'rgb(44,160,44)' },
        { id:10,    text: "gestion des RH",                             type: "court terme",    selected:false, color:'rgb(44,160,44)' },
        { id:11,    text: "comparables budget vs réel",                 type: "court terme",    selected:false, color:'rgb(44,160,44)' },
        { id:12,    text: "analyse des ratios financiers",              type: "court terme",    selected:false, color:'rgb(44,160,44)' },
        { id:13,    text: "préparation des budgets annuels",            type: "court terme",    selected:false, color:'rgb(44,160,44)' },
        // MOYEN TERME
        { id:14,   text: "révision structure financière",            type: "moyen terme",    selected:false, color:'rgb(214,39,40)' },
        { id:15,   text: "analyse stratégique",                      type: "moyen terme",    selected:false, color:'rgb(214,39,40)' },
        { id:16,   text: "programme réduction des coûts",            type: "moyen terme",    selected:false, color:'rgb(214,39,40)' },
        { id:17,   text: "analyse rentabilité & efficacité",         type: "moyen terme",    selected:false, color:'rgb(214,39,40)' },
        { id:18,   text: "révision de la structure d'entreprise",    type: "moyen terme",    selected:false, color:'rgb(214,39,40)' },
        { id:19,   text: "amélioration des processus continues",     type: "moyen terme",    selected:false, color:'rgb(214,39,40)' },
        { id:20,   text: "contrôles internes",                       type: "moyen terme",    selected:false, color:'rgb(214,39,40)' },
        { id:21,   text: "prix de revient",                          type: "moyen terme",    selected:false, color:'rgb(214,39,40)' },
        // EXCELLENCE
        { id:22,    text: "planification stratégique",                  type: "excellence",     selected:false, color:'rgb(148,103,189)' },
        { id:23,    text: "plan de relève",                             type: "excellence",     selected:false, color:'rgb(148,103,189)' },
        { id:24,    text: "tableau de bord (scorecard)",                type: "excellence",     selected:false, color:'rgb(148,103,189)' },
        { id:25,    text: "analyse de la chaine des valeurs",           type: "excellence",     selected:false, color:'rgb(148,103,189)' },
        { id:26,    text: "rigueur & discipline",                       type: "excellence",     selected:false, color:'rgb(148,103,189)' },
        { id:27,    text: "plans quinquennaux",                         type: "excellence",     selected:false, color:'rgb(148,103,189)' },
        // REDRESSEMENT
        { id:28,    text: "respirateur artificiel",                     type: "redressement",   selected:false, color:'rgb(140,86,75)' },
        { id:29,    text: "consolidation de dettes",                    type: "redressement",   selected:false, color:'rgb(140,86,75)' },
        { id:30,    text: "recherche de nouveaux investisseurs",        type: "redressement",   selected:false, color:'rgb(140,86,75)' },
        { id:31,    text: "réingénierie",                               type: "redressement",   selected:false, color:'rgb(140,86,75)' },
        { id:32,    text: "plan de revitalisation",                     type: "redressement",   selected:false, color:'rgb(140,86,75)' },
        { id:33,    text: "refinancement",                              type: "redressement",   selected:false, color:'rgb(140,86,75)' },
    ],
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
        case 'TOGGLE_SERVICE':
            return state.map(
                service =>
                    service.id === action.id ? { ...service, selected: !service.selected } : service
            )
        default:
            return state
    }
}

export default services