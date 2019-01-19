
const data = [
    { id:1, texte: "Démarrage",    text: "Startup",
        fdesc:"Votre entreprise est sur le point d'éclore et vous être maintenant prêt à l'introduire au monde entier. Mais maîtrisez-vous les outils essentiels à un bon démarrage? Voici quelques outils et services mis à votre disposition pour assurer un démarrage réussi : incorporation, plan d'affaire, plan comptable, etc...",       
        edesc:"Your company is about to open up and you are now ready to introduce it to the world. But do you master the essential tools for a good start? Here are some tools and services at your disposal to ensure a successful start: incorporation, business plan, accounting plan, etc....",       
        selected: false },
    { id:2, texte: "Court terme",  text: "Short Term",
        fdesc:"Votre entreprise a le vent dans les voiles mais sa vitesse de croisière n'est pas au niveau de vos espérances (les problèmes sont difficilement identifiables et une consultation externe est requise). Les services que nous offront pour ce cycle pourront faire la différence entre la vitesse actuelle et une meilleure vitesse de croisiêre.",       
        edesc:"Your company is on the move but its cruising speed is not up to your expectations (problems are difficult to identify and an external consultation is required). The services we offer for this cycle can make the difference between the current speed and a better cruising speed.",       
        selected: false },
    { id:3, texte: "Moyen terme",  text: "Medium Term",    
        fdesc:"Une vision à long terme est maintenant nécessaire pour votre entreprise pour emprunter la voie de la pérennité. Que ce soit pour parer à un changement de garde soudain (plan de relève), vérifier l'état actuel de la situation (analyse des états financiers) ou améliorer les méthodes actuelles (analyse du prix de revient), nous proposons maintenant des outils spécialisés pour assurer la pérennité de votre entreprise.",       
        edesc:"A long-term vision is now required for your company to move towards sustainability. Whether it is to deal with a sudden change of guard (succession plan), check the current state of the situation (analysis of financial statements) or improve current methods (cost price analysis), we now offer specialized tools to ensure the sustainability of your company.",       
        selected: false },
    { id:4, texte: "Excellence",   text: "Excellence",     
        fdesc:"Pas de temps pour la complaisance et inutile de s'asseoir sur ses lauriers. Même si tout semble bien aller, en est-il vraiment ainsi? Un survol rapide par notre équipe sur les modus operandi de votre entreprise nous permettront de trouver les failles existentes et optimer votre rendement. Une simple analyse des états financiers ou l'aplication d'un contrôle interne peut parfois révéler d'importantes lacunes au niveaux des méthodes et des opérations.",       
        edesc:"No time for complacency and no need to rest on your laurels. Even if everything seems to be going well, is this really the case? A quick overview by our team on your company's modus operandi will allow us to find existing gaps and optimize your performance. A simple analysis of financial statements or the application of internal control may sometimes reveal significant deficiencies at the process and operational levels.",       
        selected: false },
    { id:5, texte: "Redressement", text: "Reengineering", 
        fdesc:"Votre entreprise est en déclin et doit subir un redressement (problèmes fondamentaux liés à la structure de l'entreprise et les méthodes employées). Une application des services ci-dessous nous permettront de vous aider à redresser et remettre votre entreprise rapidement sur la voie du succès.",       
        edesc:"Your company is in decline and in need of a turnaround (fundamental problems related to the company's structure and methods). An application of the services below will help us help you get your business back on track quickly and successfully.",       
        selected: false },
]

const cycles = ( state = data, action ) => {
    switch (action.type) {
        case 'SELECT_CYCLE':
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

export default cycles