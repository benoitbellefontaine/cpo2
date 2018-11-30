
const initialstate = {
    objet : {
        data : [
            // DEMARRAGE
            { id:1,     text: "structure d'entreprise (D)",                     type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14' },
            { id:2,     text: "incorporation (D)",                              type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14' },
            { id:3,     text: "plan d'affaire (D)",                             type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14' },
            { id:4,     text: "plan comptable (D)",                             type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14' },
            { id:5,    text: "prévisions budgétaires (D)",                     type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14' },
            { id:6,    text: "recherche subventions (D)",                      type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14' },
            { id:7,    text: "financement (D)",                                type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14' },
            { id:8,    text: "plan de commercialisation (D)",                  type: "demarrage",      selected:false, color:'rgb(255,127,14)', r:'255', g:'127', b:'14' },
            // COURT TERME
            { id:9,    text: "procédures de fin de mois (C)",                  type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44' },
            { id:10,    text: "gestion des RH (C)",                             type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44' },
            { id:11,    text: "comparables budget vs réel (C)",                 type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44' },
            { id:12,    text: "analyse des ratios financiers (C)",              type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44' },
            { id:13,    text: "préparation des budgets annuels (C)",            type: "court terme",    selected:false, color:'rgb(44,160,44)', r:'44', g:'160', b:'44' },
            // MOYEN TERME
            { id:14,   text: "révision structure financière (M)",            type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40' },
            { id:15,   text: "analyse stratégique (M)",                      type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40' },
            { id:16,   text: "programme réduction des coûts (M)",            type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40' },
            { id:17,   text: "analyse rentabilité & efficacité (M)",         type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40' },
            { id:18,   text: "révision de la structure d'entreprise (M)",    type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40' },
            { id:19,   text: "amélioration des processus continus (M)",      type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40' },
            { id:20,   text: "contrôles internes (M)",                       type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40' },
            { id:21,   text: "prix de revient (M)",                          type: "moyen terme",    selected:false, color:'rgb(214,39,40)', r:'214', g:'39', b:'40' },
            // EXCELLENCE
            { id:22,    text: "planification stratégique (E)",                  type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189' },
            { id:23,    text: "plan de relève  (E)",                             type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189' },
            { id:24,    text: "tableau de bord (scorecard) (E)",                type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189' },
            { id:25,    text: "analyse de la chaine des valeurs (E)",           type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189' },
            { id:26,    text: "rigueur & discipline (E)",                       type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189' },
            { id:27,    text: "plans quinquennaux (E)",                         type: "excellence",     selected:false, color:'rgb(148,103,189)', r:'148', g:'103', b:'189' },
            // REDRESSEMENT
            { id:28,    text: "respirateur artificiel (R)",                     type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75' },
            { id:29,    text: "consolidation de dettes (R)",                    type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75' },
            { id:30,    text: "recherche de nouveaux investisseurs (R)",        type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75' },
            { id:31,    text: "réingénierie (R)",                               type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75' },
            { id:32,    text: "plan de revitalisation (R)",                     type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75' },
            { id:33,    text: "refinancement (R)",                              type: "redressement",   selected:false, color:'rgb(140,86,75)', r:'140', g:'86', b:'75' },
        ],
        selected : ''
    }
}

const selection = (state = initialstate.objet, action) => {
    switch (action.type) {
        case 'SELECT_SERVICE':
            state.selected = action.payload;
            console.log('action.payload', state);
            return state;
        default:
            return state
    }
}

export default selection