
const data = [
    { id:1, texte: "Démarrage",    text: "Startup",
        fdesc:"description francais",       
        edesc:"description anglais",       
        selected: false },
    { id:2, texte: "Court terme",  text: "Short Term",
        fdesc:"description francais",       
        edesc:"description anglais",       
        selected: false },
    { id:3, texte: "Moyen terme",  text: "Middle Term",    
        fdesc:"description francais",       
        edesc:"description anglais",       
        selected: false },
    { id:4, texte: "Excellence",   text: "Excellence",     
        fdesc:"description francais",       
        edesc:"description anglais",       
        selected: false },
    { id:5, texte: "Redressement", text: "Reengineering", 
        fdesc:"description francais",       
        edesc:"description anglais",       
        selected: false },
]

const situations = ( state = data, action ) => {
    switch (action.type) {
        case 'SELECT_SITUATION':
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

export default situations