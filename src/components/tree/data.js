export default
  {
    "nom": "Services",
    "name": "Services",
    "id": 0, 
    "selected":true,
    "desc": "Cliquer sur les carrés pleins pour découvrir l'arborescence. Cliquer sur les carrés vides pour découvrir les services et les inclure dans la liste sur la droite.",
    "color":'rgb(31, 119, 180)',
    "children": [
        { "nom": "Démarrage","name": "Startup",
            "id": 1, "color":'rgb(255,127,14)',
            "desc": "Votre entreprise est sur le point d'éclore et vous être maintenant prêt à l'introduire au monde entier. Mais avez-vous ou maîtrisez-vous les outils essentiels à un bon démarrage? Voici quelques outils et services mis à votre disposition pour assurer un démarrage réussi : incorporation, plan d'affaire, plan comptable, etc...", 
            "selected":false,
            "children": [
                {   "id": 6,
                    "nom": "structure d'entreprise", "name": "enterprise structure", "color":'rgb(255,127,14)', "selected":false,
                    "desc": "Ensemble des règles de répartition de l'autorité, des tâches, de contrôle et de coordination. Une bonne structure est un gage de succès assuré."
                },
                {   "id": 7,
                    "nom": "incorporation", "name": "incorporation", "color":'rgb(255,127,14)',"selected":false,
                    "desc": "Une des étapes les plus importantes lors de la création de l'entreprise afin d'être conforme à la loi et de vous protéger en cas de litige."
                },
                {   "id": 8,
                    "nom": "plan d'affaire", "name": "business plan", "color":'rgb(255,127,14)',"selected":false,
                    "desc": "La meilleure façon pour rassembler vos idées sur votre projet et de le communiquer aux autres. Nous savons comment les rédiger."
                },
                {   "id": 9,
                    "nom": "plan comptable", "name": "accounting strategy", "color":'rgb(255,127,14)',"selected":false,
                    "desc": "Ou comment implanter une méthode rigoureuse de cueillette des données financiêres de l'entreprise et de maintenir cette même méthode tout au long des cycles de vie de l'entreprise."
                },
                {   "id": 10,
                    "nom": "prévisions budgétaires", "name": "budget forecasts", "color":'rgb(255,127,14)', "color":'rgb(255,127,14)',"selected":false,
                    "desc": "C'est l'outil par excellence pour établir les objectifs financiers de votre entreprise."
                },
                {   "id": 11,
                    "nom": "recherche subventions", "name": "subsidies search", "color":'rgb(255,127,14)',"selected":false,
                    "desc": "Pour mieux vous aider à obtenir de que vous méritez en termes d'aide gouvernementale aux entreprises."
                },
                {   "id": 12,
                    "nom": "financement", "name": "financing", "color":'rgb(255,127,14)',"selected":false,
                    "desc": "Pour mieux vous aider à obtenir de que vous méritez en termes d'aide financière aux entreprises."
                },
                {   "id": 13,
                    "nom": "plan de commercialisation", "name": "marketing plan", "color":'rgb(255,127,14)',"selected":false,
                    "desc": "Un outil efficace pour mieux connaître ce que le marché recherche dans votre créneau."
                },
            ]
        },
        { "nom": "Court terme", "name": "Short term",
            "id": 2,"selected":false,"color":'rgb(44,160,44)',
            "desc": "Votre entreprise a le vent dans les voiles mais sa vitesse de croisière n'est pas au niveau de vos espérances (les problèmes sont difficilement identifiables et une consultation externe est requise). Les services que nous offront pour ce cycle pourront faire la différence entre la vitesse actuelle et une meilleure vitesse de croisiêre.",
            "children": [
                { "id": 14,"nom": "procédures de fin de mois","name": "month end procedures", "desc": "Implantation systématique de vérification des transactions répartie en tâches et arrimage avec les prévisions budgétaire ci-haut mentionnés.","color":'rgb(44,160,44)',"selected":false},
                { "id": 15,"nom": "gestion des ressources humaines","name": "human resource management", "desc": "Pour les forces de chacun de cahcun de vos collaborateurs et maximiser leur potentiel. Connaître les forces de chacun pour mieux les répartir.","color":'rgb(44,160,44)',"selected":false},
                { "id": 16,"nom": "comparables budget vs réel","name": "actual vs. budget comparatives", "desc": "Outil de mesure des écarts entre les prévisions antérieures et la réalité du moment afin d'apporter les corrections nécessaires.","color":'rgb(44,160,44)',"selected":false},
                { "id": 17,"nom": "analyse des ratios financiers","name": "financial ratio analysis", "desc": "Outil de gestion pour comprendre et analyser vos états financiers en plus d'évaluer la performance de vos opérations.","color":'rgb(44,160,44)',"selected":false},
                { "id": 18,"nom": "préparation des budgets annuels","name": "preparation of annual budgets", "desc": "Après un an d'existence, cette étape est l'extension des prévisions budgétaires du cycle démarrage. Étape essentielle à réaliser chaque année.","color":'rgb(44,160,44)',"selected":false}
            ]
        },
        { "nom": "Moyen terme" ,"name": "Middle term" ,
            "id": 3,"selected":false,"color":'rgb(214,39,40)',
            "desc": "Une vision à long terme est maintenant nécessaire pour votre entreprise pour emprunter la voie de la pérennité. Que ce soit pour parer à un changement de garde soudain (plan de relève), vérifier l'état actuel de la situation (analyse des états financiers) ou améliorer les méthodes actuelles (analyse du prix de revient), nous proposons maintenant des outils spécialisés pour assurer la pérennité de votre entreprise.",
            "children": [
                { "id": 19,"nom": "révision structure financière","name": "financial structure revision","desc":"Outil pour analyser en profondeur les cycles d'exploitation, d'investissement et de financement de votre entreprise.","color":'rgb(214,39,40)',"selected":false },
                { "id": 20,"nom": "analyse stratégique","name": "strategic analysis","desc":"Processus d'analyse de la situation de votre entreprise ou d'un de vos domaines d'activité stratégique par rapport à votre environnement, votre marché, vos concurrents et leurs stratégies actuelles et potentielles dans le futur et ses capacités actuelles et futures.","color":'rgb(214,39,40)',"selected":false },
                { "id": 21,"nom": "programme de réduction des coûts","name": "cost reduction program","desc":"Implantation d'une méthode pour réduire sinon restreindre les coûts pour assurer un contrôle accru de vos opérations.","color":'rgb(214,39,40)',"selected":false },
                { "id": 22,"nom": "analyse rentabilité & efficacité","name": "efficiency and ROI analysis","desc":"La rentabilité par l'efficacité: mise en place de jalons pour assurer le succès de votre entreprise.","color":'rgb(214,39,40)',"selected":false },
                { "id": 23,"nom": "révision de la structure d'entreprise","name": "entreprise structure revision","desc":"Revoir la structure d'entreprise mise en place lors du démarrage et corriger s'il y a lieu.","color":'rgb(214,39,40)',"selected":false },
                { "id": 24,"nom": "amélioration des processus continues","name": "continuous improvement process","desc":"Comparer les processus actuels de votre entreprise avec des processus idéaux et les améliorer, le but étant de les améliorer continuellement.","color":'rgb(214,39,40)',"selected":false },
                { "id": 25,"nom": "contrôles internes","name": "internal controls","desc":"L'application ponctuelle des contrôles internes assure la maîtrise des opérations. Dans le cas extrême du redressement, on remplace les contrôles internes par les outils de redressement pour restructurer en profondeur.","color":'rgb(214,39,40)',"selected":false },
                { "id": 26,"nom": "prix de revient","name": "costing","desc":"Outil pour déterminer si votre entreprise est rentable et le niveau de rentabilité des chacun de vos produit et services","color":'rgb(214,39,40)',"selected":false }
            ]
        },
        { "nom": "Excellence" ,"name": "Excellence" ,
            "id": 4, "selected":false,"color":'rgb(148,103,189)',
            "desc": "Pas de temps pour la complaisance et inutile de s'asseoir sur ses lauriers. Même si tout semble bien aller, en est-il vraiment ainsi? Un survol rapide par notre équipe sur les modus operandi de votre entreprise nous permettront de trouver les failles existentes et optimer votre rendement. Une simple analyse des états financiers ou l'aplication d'un contrôle interne peut parfois révéler d'importantes lacunes au niveaux des méthodes et des opérations.",
            "children": [
                { "id": 27,"nom": "planification stratégique","name": "strategic planning","desc":"","color":'rgb(148,103,189)',"selected":false },
                { "id": 28,"nom": "plan de relève","name": "succession planning","color":'rgb(148,103,189)',"selected":false },
                { "id": 29,"nom": "tableau de bord (scorecard)","name": "scorecard","color":'rgb(148,103,189)',"selected":false },
                { "id": 30,"nom": "analyse de la chaine des valeurs","name": "value chain optimisation","color":'rgb(148,103,189)',"selected":false },
                { "id": 31,"nom": "rigueur & discipline","name": "rigor & discipline","color":'rgb(148,103,189)',"selected":false },
                { "id": 32,"nom": "plans quinquennaux","name": "five-year plans","color":'rgb(148,103,189)',"selected":false },
            ]
        },
        { "nom": "Redressement" ,"name": "Reengineering" ,
            "id": 5, "selected":false,"color":'rgb(140,86,75)',
            "desc": "Votre entreprise est en déclin et doit subir un redressement (problèmes fondamentaux liés à la structure de l'entreprise et les méthodes employées). Une application des services ci-dessous nous permettront de vous aider à redresser et remettre votre entreprise rapidement sur la voie du succès.",
            "children": [
                { "id": 33,"nom": "respirateur artificiel", "name": "life support", "color":'rgb(140,86,75)',"selected":false },
                { "id": 34,"nom": "consolidation de dettes","name": "debt consolidation", "color":'rgb(140,86,75)',"selected":false },
                { "id": 35,"nom": "recherche de nouveaux investisseurs","name": "search for new investors", "color":'rgb(140,86,75)',"selected":false },
                { "id": 36,"nom": "réingénierie","name": "reengineering", "color":'rgb(140,86,75)',"selected":false },
                { "id": 37,"nom": "plan de revitalisation","name": "revitalization plan", "color":'rgb(140,86,75)',"selected":false },
                { "id": 38,"nom": "refinancement","name": "refinancing", "color":'rgb(140,86,75)',"selected":false },
            ]
        },
    ]
}
