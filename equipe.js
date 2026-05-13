// Variable globale pour tracker l'ID de la fiche actuellement affichée
let currentFicheId = null;

// Données des fiches de poste
const fichesPosts = {
    'louca': {
        name: 'Louca STERPIONE',
        title: 'Directeur Général - Responsable Produit',
        department: 'Direction Générale',
        info: {
            'Type de contrat': 'CDI',
            'Salaire': '55 000 - 75 000 EUR/an',
            'Statut': 'Co-Fondateur',
            'Depuis': '2020'
        },
        sections: {
            'Description du Poste': 'Louca STERPIONE est co-fondateur et Directeur Général de RegenUp. Il dirige la vision stratégique centrée sur l\'association du naturel et de la performance, en assurant que tous les produits respectent les principes de qualité, de durabilité et d\'innovation.',
            'Responsabilités Principales': [
                'Définition et pilotage de la vision globale de RegenUp',
                'Gestion complète de la ligne produit (textiles et nutrition)',
                'Supervision du développement et de l\'innovation produits',
                'Gestion des relations avec les fournisseurs stratégiques',
                'Prise de décisions majeures en collaboration avec Thibaut DELAPART',
                'Leadership et management de l\'équipe de direction',
                'Assurance de la conformité aux normes écologiques et bio'
            ],
            'Compétences Requises': [
                'Leadership visionnaire et management stratégique',
                'Expertise en textiles et nutrition sportive',
                'Connaissance approfondie des matières premières naturelles',
                'Gestion de projet et innovation produit',
                'Certifications et normes bio (AB, ECOCERT)',
                'Capacité de décision et de négociation'
            ],
            'Formations & Expérience': [
                'Formation en Entrepreneuriat et Management',
                'Expérience entrepreneuriale depuis 2020',
                'Connaissances secteur fitness et wellness',
                'Expertise en développement produit'
            ]
        }
    },
    'thibaut': {
        name: 'Thibaut DELAPART',
        title: 'Directeur Général - Responsable Stratégie',
        department: 'Direction Générale',
        info: {
            'Type de contrat': 'CDI',
            'Salaire': '55 000 - 75 000 EUR/an',
            'Statut': 'Co-Fondateur',
            'Depuis': '2020'
        },
        sections: {
            'Description du Poste': 'Thibaut DELAPART est co-fondateur et Directeur Général de RegenUp. Il pilote la stratégie commerciale, le développement des marchés, les partenariats stratégiques et la viabilité financière de l\'entreprise.',
            'Responsabilités Principales': [
                'Planification stratégique long terme et roadmap d\'entreprise',
                'Stratégie commerciale, marketing et développement marché',
                'Gestion financière, administrative et budgétaire',
                'Développement des partenariats stratégiques et distributeurs',
                'Expansion internationale et exploration de nouveaux marchés',
                'Prise de décisions majeures et leadership exécutif',
                'Suivi des KPIs et performance globale'
            ],
            'Compétences Requises': [
                'Stratégie commerciale et business development',
                'Gestion financière et management d\'entreprise',
                'Capacités de négociation et relations clients',
                'Vision entrepreneuriale et innovation',
                'Compréhension du marché global et de la concurrence',
                'Gestion du changement et transformation'
            ],
            'Formations & Expérience': [
                'Formation en Management d\'entreprise et Stratégie',
                'Expérience entrepreneuriale depuis 2020',
                'Connaissances secteur textile et nutrition',
                'Expertise en développement commercial'
            ]
        }
    },
    'guillaume': {
        name: 'Guillaume ROUSSEAU',
        title: 'Responsable Production',
        department: 'Production',
        info: {
            'Type de contrat': 'CDI',
            'Salaire': '38 000 - 48 000 EUR/an',
            'Encadrement': '2 collaborateurs',
            'Reporting': 'Direction Générale'
        },
        sections: {
            'Description du Poste': 'Guillaume ROUSSEAU supervise l\'ensemble de la production des vêtements RegenUp (t-shirts, shorts, hoodies, leggings). Il garantit la qualité, le respect des normes écologiques, les délais et optimise les processus de fabrication.',
            'Responsabilités Principales': [
                'Supervision et gestion de l\'équipe production (2 personnes)',
                'Planification, ordonnancement et optimisation de la production',
                'Respect des normes écologiques et certifications bio',
                'Contrôle qualité des matières premières et produits finis',
                'Gestion et sélection des fournisseurs de textiles',
                'Amélioration continue des processus',
                'Respect des délais de livraison et budgets'
            ],
            'Compétences Requises': [
                'Management d\'équipe et leadership opérationnel',
                'Connaissances approfondies textiles bio et certifiés',
                'Techniques de confection et de production textile',
                'Gestion de production, logistique et planification',
                'Certifications écologiques (AB, ECOCERT)',
                'Contrôle qualité avancé et amélioration continue'
            ],
            'Formations & Expérience': [
                'Ingénierie textile ou BTS Textile',
                'Formation en Management de production',
                'Minimum 5 ans industrie textile',
                'Expérience avec matières biologiques'
            ],
            'Objectifs & Indicateurs': [
                'Taux qualité >98%',
                'Respect délais 100%',
                'Réduction coûts 5% annuel',
                'Zéro accident de travail'
            ]
        }
    },
    'sophie': {
        name: 'Sophie MARTIN',
        title: 'Responsable Ventes et Commerce',
        department: 'Ventes',
        info: {
            'Type de contrat': 'CDI',
            'Salaire': '40 000 - 52 000 EUR/an',
            'Encadrement': '2 collaborateurs',
            'Reporting': 'Direction Générale'
        },
        sections: {
            'Description du Poste': 'Sophie MARTIN pilote la stratégie commerciale complète de RegenUp, gère les relations clients B2B et B2C, supervise l\'équipe commerciale et développe les partenariats distributeurs.',
            'Responsabilités Principales': [
                'Définition et pilotage de la stratégie commerciale',
                'Gestion des relations clients B2B, B2C et distributeurs',
                'Supervision de l\'équipe commerciale (2 collaborateurs)',
                'Développement partenariats avec distributeurs spécialisés',
                'Négociations commerciales et gestion contrats',
                'Supervision de la plateforme e-commerce',
                'Suivi des objectifs de vente et KPIs'
            ],
            'Compétences Requises': [
                'Management d\'équipe commerciale',
                'Prospection et techniques de vente avancées',
                'Négociation et gestion relation clients',
                'Analyse marché, concurrence et stratégie',
                'Connaissance produits RegenUp',
                'CRM et outils commerciaux'
            ],
            'Formations & Expérience': [
                'BTS Commerce ou Licence Ventes/Marketing',
                'Minimum 5 ans Ventes B2B',
                'Connaissances secteur fitness/wellness',
                'Expérience prospection et développement'
            ],
            'Objectifs & Indicateurs': [
                'Croissance CA +20% annuel',
                'Augmentation nouveaux partenaires +15%',
                'Taux rétention clients >90%',
                'Développement marchés nationaux'
            ]
        }
    },
    'emma': {
        name: 'Emma BERNARD',
        title: 'Responsable Communication Marketing',
        department: 'Communication & Marketing',
        info: {
            'Type de contrat': 'CDI',
            'Salaire': '38 000 - 50 000 EUR/an',
            'Encadrement': '1 collaborateur',
            'Reporting': 'Direction Générale'
        },
        sections: {
            'Description du Poste': 'Emma BERNARD pilote toute la stratégie de communication et de marketing de RegenUp. Elle supervise la création de contenu, gère la présence digitale et anime les campagnes de promotion.',
            'Responsabilités Principales': [
                'Définition stratégie marketing et communication globale',
                'Gestion réseaux sociaux (Instagram, Facebook, TikTok, LinkedIn)',
                'Création et planification calendrier contenu',
                'Campagnes publicitaires digitales et print',
                'Partenariats avec influenceurs et ambassadeurs',
                'Organisation événements et activations marque',
                'Relations presse et gestion réputation en ligne'
            ],
            'Compétences Requises': [
                'Stratégie marketing et branding',
                'Gestion réseaux sociaux avancée',
                'Marketing digital et publicité en ligne',
                'Créativité et storytelling',
                'SEO/SEM et analyse données',
                'Gestion projet et relations publiques'
            ],
            'Formations & Expérience': [
                'Master Marketing/Communication',
                'Minimum 5 ans Marketing digital',
                'Portfolio campagnes réussies',
                'Connaissances secteur fitness/wellness'
            ],
            'Objectifs & Indicateurs': [
                'Croissance followers +30% annuel',
                'Taux engagement >5%',
                'Augmentation brand awareness',
                'Partenaires influenceurs +10'
            ]
        }
    },
    'marc': {
        name: 'Marc LECLERC',
        title: 'Technicien Production',
        department: 'Production',
        info: {
            'Type de contrat': 'CDI',
            'Salaire': '24 000 - 28 000 EUR/an',
            'Reporting': 'Guillaume ROUSSEAU',
            'Depuis': '2021'
        },
        sections: {
            'Description du Poste': 'Marc LECLERC est responsable de la fabrication et de l\'assemblage des vêtements RegenUp. Il effectue le contrôle qualité des produits finis et participe à l\'amélioration continue des processus.',
            'Responsabilités Principales': [
                'Fabrication des vêtements (confection, couture)',
                'Assemblage et finitions des produits',
                'Contrôle qualité des produits finis',
                'Respect des normes écologiques et certifications',
                'Utilisation correcte des matières biologiques',
                'Maintenance basique des équipements',
                'Respect des délais et des standards qualité',
                'Participation à l\'amélioration continue'
            ],
            'Compétences Requises': [
                'Expertise textile et techniques de confection',
                'Contrôle qualité et assurance qualité',
                'Lecture dessins techniques',
                'Respect normes écologiques',
                'Rigueur et précision',
                'Travail en équipe et communication'
            ],
            'Formations & Expérience': [
                'CAP Confection ou BTS Textile',
                'Minimum 3 ans Production textile',
                'Formation matières biologiques',
                'Connaissances machines textiles'
            ],
            'Objectifs & Indicateurs': [
                'Taux qualité >98%',
                'Respect délais 100%',
                'Zéro accident',
                'Participation améliorations produit'
            ]
        }
    },
    'alice': {
        name: 'Alice DUPONT',
        title: 'Technicienne Production - Formulation R&D',
        department: 'Production (R&D)',
        info: {
            'Type de contrat': 'CDI',
            'Salaire': '28 000 - 34 000 EUR/an',
            'Reporting': 'Guillaume ROUSSEAU',
            'Depuis': '2021'
        },
        sections: {
            'Description du Poste': 'Alice DUPONT est responsable de la formulation et du développement des boissons énergisantes sportives et compléments alimentaires RegenUp. Elle assure la conformité aux normes alimentaires et teste les innovations produit.',
            'Responsabilités Principales': [
                'Formulation et amélioration boissons énergisantes',
                'Formulation compléments alimentaires naturels',
                'Développement et innovation produits',
                'Tests nutritionnels et organoleptiques',
                'Respect normes alimentaires et certifications bio',
                'Documentation techniques et recettes',
                'Gestion fournisseurs matières premières',
                'Contrôle qualité formulations'
            ],
            'Compétences Requises': [
                'Chimie alimentaire et formulation',
                'Connaissances nutrition sportive',
                'Certifications bio (AB, ECOCERT)',
                'Tests analytiques et sensoriels',
                'Rigueur scientifique',
                'Réglementations alimentaires'
            ],
            'Formations & Expérience': [
                'BTS Chimie appliquée ou Licence Biotechnologie',
                'Minimum 3-5 ans formulation alimentaire',
                'Master Chimie Fine souhaité',
                'Connaissances nutrition sportive'
            ],
            'Certifications': [
                'Certification Bio (AB)',
                'Formation HACCP',
                'Formation Chimie alimentaire'
            ]
        }
    },
    'pierre': {
        name: 'Pierre GARNIER',
        title: 'Commercial B2B',
        department: 'Ventes',
        info: {
            'Type de contrat': 'CDI',
            'Salaire': '26 000 - 35 000 EUR/an',
            'Reporting': 'Sophie MARTIN',
            'Depuis': '2022'
        },
        sections: {
            'Description du Poste': 'Pierre GARNIER est responsable de la prospection et du développement commercial B2B pour RegenUp. Il cible les entreprises du secteur fitness, nutrition et distribution spécialisée.',
            'Responsabilités Principales': [
                'Prospection de nouveaux clients B2B',
                'Présentation et démonstration produits',
                'Gestion et suivi de comptes clients',
                'Négociation tarifs et conditions commerciales',
                'Accueil clients et visites showroom',
                'Développement portefeuille clients',
                'Réalisation objectifs de vente',
                'Rédaction propositions et devis'
            ],
            'Compétences Requises': [
                'Prospection commerciale active',
                'Techniques de vente et closing',
                'Négociation commerciale',
                'Communication efficace et relationnel',
                'Connaissances produits RegenUp',
                'Gestion relation clients',
                'Autonomie et proactivité'
            ],
            'Formations & Expérience': [
                'BTS Commerce ou Vente',
                'Minimum 2 ans Vente B2B',
                'Connaissances secteur fitness/nutrition',
                'Permis B obligatoire'
            ],
            'Objectifs & Indicateurs': [
                'Atteinte budget CA B2B',
                'Nouveaux clients +20 par an',
                'Taux transformation >15%',
                'Rétention clients >85%'
            ]
        }
    },
    'helene': {
        name: 'Hélène BONNET',
        title: 'Gestionnaire E-commerce',
        department: 'Ventes (E-commerce)',
        info: {
            'Type de contrat': 'CDI',
            'Salaire': '22 000 - 27 000 EUR/an',
            'Reporting': 'Sophie MARTIN',
            'Depuis': '2023'
        },
        sections: {
            'Description du Poste': 'Hélène BONNET gère complètement la boutique en ligne RegenUp. Elle traite les commandes, assure le suivi des livraisons et fournit un excellent service client à distance.',
            'Responsabilités Principales': [
                'Gestion complète boutique en ligne',
                'Traitement commandes clients',
                'Préparation et suivi livraisons',
                'Service client (email, chat, téléphone)',
                'Gestion retours et remboursements',
                'Optimisation site e-commerce',
                'Mise à jour contenu et tarifs produits',
                'Participation aux campaigns marketing'
            ],
            'Compétences Requises': [
                'Expertise gestion e-commerce',
                'Connaissances plateforme e-commerce',
                'Service client excellent',
                'Gestion logistique basique',
                'Connaissances produits',
                'Organisation et rigueur',
                'Résolution problèmes'
            ],
            'Formations & Expérience': [
                'BTS Commerce E-commerce',
                'Minimum 2 ans E-commerce',
                'Connaissances plateformes e-commerce',
                'Notions marketing digital'
            ],
            'Objectifs & Indicateurs': [
                'CA e-commerce assigné',
                'Taux satisfaction clients >95%',
                'Taux conversion >3%',
                'Délai traitement <24h'
            ]
        }
    },
    'thomas': {
        name: 'Thomas REMY',
        title: 'Responsable Digital Communication',
        department: 'Communication',
        info: {
            'Type de contrat': 'CDI',
            'Salaire': '24 000 - 30 000 EUR/an',
            'Reporting': 'Emma BERNARD',
            'Depuis': '2023'
        },
        sections: {
            'Description du Poste': 'Thomas REMY gère la stratégie de communication digitale et les réseaux sociaux de RegenUp. Il crée du contenu engageant et optimise les campagnes publicitaires digitales.',
            'Responsabilités Principales': [
                'Community management réseaux sociaux',
                'Création et planification contenu',
                'Réponse commentaires et messages',
                'Analyse analytics et reporting',
                'Stratégie SEO et optimisation contenu',
                'Campagnes publicitaires digitales',
                'Suivi et optimisation budget publicité',
                'Partenariats avec micro-influenceurs'
            ],
            'Compétences Requises': [
                'Social media management avancé',
                'Analytics et data-driven marketing',
                'Stratégie SEO/SEM',
                'Google Analytics et outils digitaux',
                'Gestion publicités digitales (Meta, Google)',
                'Création contenu créatif',
                'Trend scouting et innovation'
            ],
            'Formations & Expérience': [
                'Master Marketing Digital',
                'Minimum 2-3 ans Social media',
                'Portfolio campagnes réussies',
                'Connaissances secteur fitness/wellness'
            ],
            'Objectifs & Indicateurs': [
                'Croissance followers +30-40%',
                'Taux engagement >5%',
                'ROAS publicités >3:1',
                'Reach organique augmentée'
            ]
        }
    }
};

// ===========================
// DESSINER LES LIGNES DE HIÉRARCHIE
// ===========================

function drawHierarchyLines() {
    const svg = document.getElementById('orgLines');
    if (!svg) return;

    const container = document.querySelector('.org-chart-container');
    svg.setAttribute('width', container.offsetWidth);
    svg.setAttribute('height', container.offsetHeight);

    // Récupérer les positions des éléments
    const level1 = document.querySelectorAll('.org-level-1 .org-box-advanced');
    const level2 = document.querySelectorAll('.org-level-2 .org-box-advanced');
    const level3 = document.querySelectorAll('.org-level-3 .org-box-advanced');

    // Couleur des lignes
    const lineColor = '#66BB6A';
    const lineWidth = 2;

    // Fonction helper pour obtenir le centre d'un élément
    function getElementCenter(element) {
        const rect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        return {
            x: rect.left - containerRect.left + rect.width / 2,
            y: rect.top - containerRect.top + rect.height / 2
        };
    }

    // Fonction pour créer une ligne SVG droite
    function createLine(x1, y1, x2, y2) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', lineColor);
        line.setAttribute('stroke-width', lineWidth);
        return line;
    }

    // Lignes de level 1 à level 2
    const pos1Array = Array.from(level1).map(el => getElementCenter(el));
    const pos2Array = Array.from(level2).map(el => getElementCenter(el));
    const pos3Array = Array.from(level3).map(el => getElementCenter(el));

    // Calculer la position moyenne du niveau 1
    const avgPos1X = pos1Array.reduce((sum, pos) => sum + pos.x, 0) / pos1Array.length;
    const maxPos1Y = Math.max(...pos1Array.map(p => p.y));

    // Calculer la position moyenne du niveau 2
    const avgPos2X = pos2Array.reduce((sum, pos) => sum + pos.x, 0) / pos2Array.length;
    const minPos2Y = Math.min(...pos2Array.map(p => p.y));

    // Ligne verticale de niveau 1 à niveau 2
    svg.appendChild(createLine(avgPos1X, maxPos1Y, avgPos1X, minPos2Y));

    // Lignes horizontales et verticales pour chaque responsable
    pos2Array.forEach((pos2, index) => {
        // Ligne horizontale du centre vers chaque responsable
        svg.appendChild(createLine(avgPos1X, pos2.y, pos2.x, pos2.y));
    });

    // Lignes de level 2 à level 3
    const subordinateMappings = [
        { managerIndex: 0, subordinateIndices: [0, 1] },   // Guillaume → Marc, Alice
        { managerIndex: 1, subordinateIndices: [2, 3] },   // Sophie → Pierre, Hélène
        { managerIndex: 2, subordinateIndices: [4] }       // Emma → Thomas
    ];

    subordinateMappings.forEach(({ managerIndex, subordinateIndices }) => {
        if (managerIndex < pos2Array.length) {
            const managerPos = pos2Array[managerIndex];
            const subordinatePositions = subordinateIndices.map(i => pos3Array[i]);

            if (subordinatePositions.length > 0) {
                const maxPos3Y = Math.max(...subordinatePositions.map(p => p.y));
                const minPos3Y = Math.min(...subordinatePositions.map(p => p.y));

                // Ligne verticale du responsable vers le bas
                svg.appendChild(createLine(managerPos.x, managerPos.y, managerPos.x, minPos3Y));

                // Ligne horizontale reliant tous les collaborateurs
                const minX = Math.min(...subordinatePositions.map(p => p.x));
                const maxX = Math.max(...subordinatePositions.map(p => p.x));
                svg.appendChild(createLine(minX, minPos3Y, maxX, minPos3Y));

                // Lignes verticales vers chaque collaborateur
                subordinatePositions.forEach(subPos => {
                    svg.appendChild(createLine(subPos.x, minPos3Y, subPos.x, subPos.y));
                });
            }
        }
    });
}

// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Dessiner les lignes de hiérarchie
    drawHierarchyLines();
});

// ===========================
// GESTION PDF
// ===========================

function showPdfButton(element) {
    const button = element.querySelector('.pdf-button-container');
    if (button) {
        button.style.opacity = '1';
    }
}

function hidePdfButton(element) {
    const button = element.querySelector('.pdf-button-container');
    if (button) {
        button.style.opacity = '0';
    }
}

function downloadFichePdf(personId) {
    const fiche = fichesPosts[personId];
    if (!fiche) {
        alert('Fiche non trouvée');
        return;
    }

    // Créer le contenu HTML de la fiche
    let html = `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    color: #333;
                }
                h1 {
                    color: #1B5E20;
                    border-bottom: 3px solid #66BB6A;
                    padding-bottom: 10px;
                    margin-bottom: 5px;
                }
                .title {
                    color: #4CAF50;
                    font-size: 16px;
                    margin-bottom: 20px;
                    font-weight: bold;
                }
                .section {
                    margin-bottom: 20px;
                }
                .section h2 {
                    color: #1B5E20;
                    font-size: 14px;
                    margin-bottom: 10px;
                    border-bottom: 2px solid #66BB6A;
                    padding-bottom: 5px;
                }
                .grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                    margin-bottom: 15px;
                }
                .grid-item {
                    background: #ffffff;
                    padding: 10px;
                    border-left: 3px solid #66BB6A;
                    border-radius: 4px;
                }
                .grid-item strong {
                    color: #1B5E20;
                    display: block;
                    margin-bottom: 5px;
                }
                ul {
                    margin: 10px 0;
                    padding-left: 20px;
                }
                ul li {
                    margin-bottom: 8px;
                    line-height: 1.5;
                }
                .footer {
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #ddd;
                    font-size: 12px;
                    color: #666;
                }
            </style>
        </head>
        <body>
            <h1>${fiche.name}</h1>
            <p class="title">${fiche.title}</p>
    `;

    // Infos générales
    html += '<div class="section"><div class="grid">';
    for (const [key, value] of Object.entries(fiche.info)) {
        html += `
            <div class="grid-item">
                <strong>${key}</strong>
                <span>${value}</span>
            </div>
        `;
    }
    html += '</div></div>';

    // Sections
    for (const [sectionTitle, content] of Object.entries(fiche.sections)) {
        html += `<div class="section">
            <h2>${sectionTitle}</h2>`;
        
        if (Array.isArray(content)) {
            html += '<ul>';
            content.forEach(item => {
                html += `<li>${item}</li>`;
            });
            html += '</ul>';
        } else {
            html += `<p>${content}</p>`;
        }
        html += '</div>';
    }

    html += `
            <div class="footer">
                <p>Document généré par RegenUp - ${new Date().toLocaleDateString('fr-FR')}</p>
            </div>
        </body>
        </html>
    `;

    // Générer le PDF directement avec jsPDF + html2canvas
    const element = document.createElement('div');
    element.innerHTML = html;
    element.style.position = 'absolute';
    element.style.left = '-9999px';
    element.style.width = '210mm';
    element.style.background = 'white';
    document.body.appendChild(element);

    // Convertir le contenu HTML en image avec html2canvas
    html2canvas(element, { 
        scale: 2, 
        useCORS: true,
        backgroundColor: '#f3f2f2',
        logging: false 
    })
    .then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;
        
        // Créer le PDF
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const margin = 10;
        const imgWidth = pageWidth - (2 * margin);
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = margin;

        // Ajouter l'image au PDF avec pagination
        pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
        heightLeft -= (pageHeight - (2 * margin));

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight + margin;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
            heightLeft -= (pageHeight - (2 * margin));
        }

        // Télécharger le PDF
        pdf.save(`Fiche_${fiche.name.replace(/\s+/g, '_')}.pdf`);
        document.body.removeChild(element);
        showNotification(`Fiche de ${fiche.name} téléchargée avec succès !`);
    })
    .catch(error => {
        console.error('Erreur lors de la génération du PDF:', error);
        document.body.removeChild(element);
        showNotification(`Erreur lors du téléchargement de la fiche`);
    });
}

// ===========================
// NOTIFICATIONS
// ===========================

function showNotification(message) {
    // Créer notification temporaire
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #0f3d1a;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Ouvrir fiche
function openFiche(id) {
    const fiche = fichesPosts[id];
    if (!fiche) return;

    // Sauvegarder l'ID pour le bouton de téléchargement
    currentFicheId = id;

    let html = `<h2>${fiche.name}</h2>`;
    html += `<p style="color: var(--primary-light); font-size: 1.1rem; margin-bottom: 20px;"><strong>${fiche.title}</strong></p>`;

    // Infos générales
    html += '<div class="fiche-grid">';
    for (const [key, value] of Object.entries(fiche.info)) {
        html += `
            <div class="fiche-grid-item">
                <strong>${key}</strong>
                <span>${value}</span>
            </div>
        `;
    }
    html += '</div>';

    // Sections
    for (const [sectionTitle, content] of Object.entries(fiche.sections)) {
        html += `<div class="fiche-section">
            <h3>${sectionTitle}</h3>`;
        
        if (Array.isArray(content)) {
            html += '<ul>';
            content.forEach(item => {
                html += `<li>${item}</li>`;
            });
            html += '</ul>';
        } else {
            html += `<p>${content}</p>`;
        }
        html += '</div>';
    }

    document.getElementById('ficheContent').innerHTML = html;
    document.getElementById('ficheModal').style.display = 'block';
}

// Fermer fiche
function closeFiche() {
    document.getElementById('ficheModal').style.display = 'none';
}

// Fermer modal au clic dehors
window.addEventListener('click', function(event) {
    const modal = document.getElementById('ficheModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
