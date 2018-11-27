
situations: [
    { id:1, texte: "Démarrage",    text: "Startup",        selected: false },
    { id:2, texte: "Court terme",  text: "Short Term",     selected: false },
    { id:3, texte: "Moyen terme",  text: "Middle Term",    selected: false },
    { id:4, texte: "Excellence",   text: "Excellence",     selected: false },
    { id:5, texte: "Redressement", text: "Re-engineering", selected: false },
]

const situations = ( state = situations, action ) => {
    switch (action.type) {
        case 'SITUATION_SELECT':
        return state.map(s =>
            (
                s.id === action.id)
                    ? {...s, selected: !s.selected}
                    : {...s, selected: false} //situation
            )
        default:
        return state
    }
}