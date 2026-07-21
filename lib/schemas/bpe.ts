export default [
  {
    key: 'an',
    'x-originalName': 'AN',
    type: 'integer',
    title: 'Millésime de la base',
    'x-group': 'Identification de l\'équipement'
  },
  {
    key: 'nomrs',
    'x-originalName': 'NOMRS',
    type: 'string',
    title: 'Nom ou raison sociale',
    description: 'Nom ou raison sociale de l\'équipement',
    'x-refersTo': 'http://www.w3.org/2000/01/rdf-schema#label',
    'x-group': 'Identification de l\'équipement'
  },
  {
    key: 'cnomrs',
    'x-originalName': 'CNOMRS',
    type: 'string',
    title: 'Complément du nom',
    description: 'Complément du nom ou de la raison sociale de l\'équipement',
    'x-group': 'Identification de l\'équipement'
  },
  {
    key: 'siret',
    'x-originalName': 'SIRET',
    type: 'string',
    title: 'Numéro SIRET',
    description: 'Numéro SIRET de l\'équipement',
    'x-refersTo': 'http://www.datatourisme.fr/ontology/core/1.0/#siret',
    'x-group': 'Identification de l\'équipement'
  },
  {
    key: 'apet',
    'x-originalName': 'APET',
    type: 'string',
    title: 'Code d\'activité principale exercée (APET)',
    'x-group': 'Identification de l\'équipement'
  },
  {
    key: 'statut_diffusion',
    'x-originalName': 'STATUT_DIFFUSION',
    type: 'string',
    title: 'Statut de diffusion Sirene',
    'x-labels': {
      O: 'Diffusion totale',
      P: 'Diffusion partielle',
      _Z: 'Sans objet'
    },
    'x-group': 'Identification de l\'équipement'
  },
  {
    key: 'categorie',
    'x-originalName': 'CATEGORIE',
    type: 'string',
    title: 'Catégorie d\'équipement culturel',
    description: 'Catégorie d\'équipement',
    'x-group': 'Identification de l\'équipement'
  },
  {
    key: 'accueil',
    'x-originalName': 'ACCUEIL',
    type: 'string',
    title: 'Type d\'accueil',
    description: 'Type d\'accueil de l\'infrastructure',
    'x-group': 'Identification de l\'équipement'
  },
  {
    key: 'specialite',
    'x-originalName': 'SPECIALITE',
    type: 'string',
    title: 'Spécialité du professionnel',
    'x-group': 'Identification de l\'équipement'
  },
  {
    key: 'structure_exercice',
    'x-originalName': 'STRUCTURE_EXERCICE',
    type: 'string',
    title: 'Structure d\'exercice de l\'activité',
    'x-labels': {
      AM: 'Appareillage médical',
      CG: 'Cabinet de groupe',
      CI: 'Cabinet individuel',
      ES: 'Exercice en société',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Identification de l\'équipement'
  },
  {
    key: 'numvoie',
    'x-originalName': 'NUMVOIE',
    type: 'string',
    title: 'Numéro de voie',
    description: 'Numéro de voie de l\'adresse d\'implantation de l\'équipement',
    'x-refersTo': 'http://www.ontotext.com/proton/protonext#StreetNumber',
    'x-group': 'Adresse'
  },
  {
    key: 'indrep',
    'x-originalName': 'INDREP',
    type: 'string',
    title: 'Indice de répétition du numéro de voie',
    description: 'Indice de répétition du numéro de voie de l\'adresse d\'implantation de l\'équipement',
    'x-group': 'Adresse'
  },
  {
    key: 'typvoie',
    'x-originalName': 'TYPVOIE',
    type: 'string',
    title: 'Type de voie',
    description: 'Type de voie de l\'adresse d\'implantation de l\'équipement',
    'x-group': 'Adresse'
  },
  {
    key: 'libvoie',
    'x-originalName': 'LIBVOIE',
    type: 'string',
    title: 'Libellé de la voie',
    description: 'Libellé de la voie d\'implantation de l\'équipement',
    'x-refersTo': 'http://schema.org/streetAddress',
    'x-group': 'Adresse'
  },
  {
    key: 'cadr',
    'x-originalName': 'CADR',
    type: 'string',
    title: 'Complément d\'adresse',
    'x-group': 'Adresse'
  },
  {
    key: 'libcom',
    'x-originalName': 'LIBCOM',
    type: 'string',
    title: 'Commune',
    description: 'Libellé de la commune d\'implantation de l\'équipement',
    'x-refersTo': 'http://schema.org/City',
    'x-group': 'Adresse'
  },
  {
    key: 'codpos',
    'x-originalName': 'CODPOS',
    type: 'string',
    title: 'Code postal',
    description: 'Code postal de l\'adresse d\'implantation de l\'équipement',
    'x-refersTo': 'http://schema.org/postalCode',
    'x-group': 'Adresse'
  },
  {
    key: 'depcom',
    'x-originalName': 'DEPCOM',
    type: 'string',
    title: 'Code commune',
    description: 'Code département et commune d\'implantation de l\'équipement',
    'x-refersTo': 'http://rdf.insee.fr/def/geo#codeCommune',
    'x-capabilities': {
      textAgg: true
    },
    'x-group': 'Découpage administratif'
  },
  {
    key: 'dep',
    'x-originalName': 'DEP',
    type: 'string',
    title: 'Code département',
    description: 'Département d\'implantation de l\'équipement',
    'x-refersTo': 'http://rdf.insee.fr/def/geo#codeDepartement',
    'x-group': 'Découpage administratif'
  },
  {
    key: 'reg',
    'x-originalName': 'REG',
    type: 'string',
    title: 'Région',
    description: 'Région d\'implantation de l\'équipement',
    'x-refersTo': 'http://rdf.insee.fr/def/geo#codeRegion',
    'x-labels': {
      11: 'Ile-de-France',
      24: 'Centre-Val de Loire',
      27: 'Bourgogne-Franche-Comté',
      28: 'Normandie',
      32: 'Hauts-de-France',
      44: 'Grand Est',
      52: 'Pays de la Loire',
      53: 'Bretagne',
      75: 'Nouvelle-Aquitaine',
      76: 'Occitanie',
      84: 'Auvergne-Rhône-Alpes',
      93: 'Provence-Alpes-Côte d\'Azur',
      94: 'Corse',
      '01': 'Guadeloupe',
      '02': 'Martinique',
      '03': 'Guyane',
      '04': 'La Réunion',
      '06': 'Mayotte'
    },
    'x-group': 'Découpage administratif'
  },
  {
    key: 'epci',
    'x-originalName': 'EPCI',
    type: 'string',
    title: 'Etablissement public de coopération intercommunal',
    description: 'Etablissement public de coopération intercommunal d\'implantation de l\'équipement',
    'x-refersTo': 'http://rdf.insee.fr/def/geo#EtablissementPublicDeCooperationIntercommunale',
    'x-group': 'Découpage administratif'
  },
  {
    key: 'uu2020',
    'x-originalName': 'UU2020',
    type: 'string',
    title: 'Unité urbaine 2020',
    description: 'Unité urbaine 2020 d\'implantation de l\'équipement',
    'x-refersTo': 'http://rdf.insee.fr/def/geo#UniteUrbaine2020',
    'x-group': 'Découpage administratif'
  },
  {
    key: 'bv2022',
    'x-originalName': 'BV2022',
    type: 'integer',
    title: 'Bassin de vie 2022',
    description: 'Zonage en bassins de vie 2022 d’implantation de l’équipement',
    'x-group': 'Découpage administratif'
  },
  {
    key: 'aav2020',
    'x-originalName': 'AAV2020',
    type: 'string',
    title: 'Zonage en aire d\'attraction des villes 2020',
    description: 'Zonage en aire d\'attraction des villes 2020 d\'implantation de l\'équipement',
    'x-group': 'Découpage administratif'
  },
  {
    key: 'dciris',
    'x-originalName': 'DCIRIS',
    type: 'string',
    title: 'Code IRIS d\'implantation',
    description: 'Code IRIS d\'implantation de l\'équipement',
    'x-refersTo': 'http://rdf.insee.fr/def/geo#codeIRIS',
    'x-group': 'Découpage administratif'
  },
  {
    key: 'irisee',
    'x-originalName': 'IRISEE',
    type: 'boolean',
    title: 'Irisation de la commune',
    description: 'Indicatrice d\'irisation de la commune',
    'x-group': 'Découpage administratif'
  },
  {
    key: 'dens3',
    'x-originalName': 'DENS3',
    type: 'integer',
    title: 'Grille communale de densité à 3 niveaux',
    'x-labels': {
      1: 'Communes densément peuplées',
      2: 'Communes de densité intermédiaire',
      3: 'Communes rurales'
    },
    'x-group': 'Découpage administratif'
  },
  {
    key: 'dens7',
    'x-originalName': 'DENS7',
    type: 'integer',
    title: 'Grille communale de densité à 7 niveaux',
    'x-labels': {
      1: 'Grands centres urbains',
      2: 'Centres urbains intermédiaires',
      3: 'Petites villes',
      4: 'Ceintures urbaines',
      5: 'Bourgs ruraux',
      6: 'Rural à habitat dispersé',
      7: 'Rural à habitat très dispersé'
    },
    'x-group': 'Découpage administratif'
  },
  {
    key: 'qp2015',
    'x-originalName': 'QP2015',
    type: 'string',
    title: 'Quartier prioritaire de la politique de la ville 2015',
    description: 'Quartier prioritaire de la politique de la ville 2015 d\'appartenance de l\'équipement',
    'x-group': 'Zonages politique de la ville'
  },
  {
    key: 'qp2024',
    'x-originalName': 'QP2024',
    type: 'string',
    title: 'Quartier prioritaire de la politique de la ville 2024 d\'appartenance de l\'équipement',
    'x-group': 'Zonages politique de la ville'
  },
  {
    key: 'quali_qp2015',
    'x-originalName': 'QUALI_QP2015',
    type: 'string',
    title: 'Qualité du géoréférencement dans le quartier prioritaire 2015',
    description: 'Indicateur de qualité du géoréférencement dans le quartier prioritaire de la politique de la ville 2015',
    'x-labels': {
      1: 'Appartenance sûre au zonage',
      2: 'Appartenance probable au zonage',
      3: 'Appartenance aléatoire ou indéterminée au zonage',
      _Z: 'Sans objet'
    },
    'x-group': 'Zonages politique de la ville'
  },
  {
    key: 'quali_qp2024',
    'x-originalName': 'QUALI_QP2024',
    type: 'string',
    title: 'Indicateur de qualité du géoréférencement dans le quartier prioritaire de la politique de la ville 2024',
    'x-labels': {
      1: 'Appartenance sûre au zonage',
      2: 'Appartenance probable au zonage',
      3: 'Appartenance aléatoire ou indéterminée au zonage',
      _Z: 'Sans objet'
    },
    'x-group': 'Zonages politique de la ville'
  },
  {
    key: 'qva',
    'x-originalName': 'QVA',
    type: 'string',
    title: 'Quartier de veille active',
    description: 'Quartier de veille active d\'appartenance de l\'équipement',
    'x-group': 'Zonages politique de la ville'
  },
  {
    key: 'quali_qva',
    'x-originalName': 'QUALI_QVA',
    type: 'string',
    title: 'Qualité du géoréférencement dans le quartier de veille active',
    description: 'Indicateur de qualité du géoréférencement dans le quartier de veille active',
    'x-labels': {
      1: 'Appartenance sûre au zonage',
      2: 'Appartenance probable au zonage',
      3: 'Appartenance aléatoire ou indéterminée au zonage',
      _Z: 'Sans objet'
    },
    'x-group': 'Zonages politique de la ville'
  },
  {
    key: 'zus',
    'x-originalName': 'ZUS',
    type: 'string',
    title: 'Zone urbaine sensible',
    description: 'Zone urbaine sensible d\'appartenance de l\'équipement',
    'x-group': 'Zonages politique de la ville'
  },
  {
    key: 'quali_zus',
    'x-originalName': 'QUALI_ZUS',
    type: 'string',
    title: 'Qualité du géoréférencement dans la zone urbaine sensible',
    description: 'Indicateur de qualité du géoréférencement dans la zone urbaine sensible',
    'x-labels': {
      1: 'Appartenance sûre au zonage',
      2: 'Appartenance probable au zonage',
      3: 'Appartenance aléatoire ou indéterminée au zonage',
      _Z: 'Sans objet'
    },
    'x-group': 'Zonages politique de la ville'
  },
  {
    key: 'lambert_x',
    'x-originalName': 'LAMBERT_X',
    type: 'number',
    title: 'Coordonnée X de l\'équipement',
    'x-refersTo': 'http://data.ign.fr/def/geometrie#coordX',
    'x-group': 'Coordonnées géographiques'
  },
  {
    key: 'lambert_y',
    'x-originalName': 'LAMBERT_Y',
    type: 'number',
    title: 'Coordonnée Y de l\'équipement',
    'x-refersTo': 'http://data.ign.fr/def/geometrie#coordY',
    'x-group': 'Coordonnées géographiques'
  },
  {
    key: 'longitude',
    'x-originalName': 'LONGITUDE',
    type: 'number',
    title: 'Longitude',
    description: 'Longitude en coordonnées GPS de l’équipement (degrés décimaux)',
    'x-refersTo': 'http://schema.org/longitude',
    'x-group': 'Coordonnées géographiques'
  },
  {
    key: 'latitude',
    'x-originalName': 'LATITUDE',
    type: 'number',
    title: 'Latitude',
    description: 'Latitude en coordonnées GPS de l’équipement (degrés décimaux)',
    'x-refersTo': 'http://schema.org/latitude',
    'x-group': 'Coordonnées géographiques'
  },
  {
    key: 'epsg',
    'x-originalName': 'EPSG',
    type: 'integer',
    title: 'Code EPSG du système de coordonnées',
    'x-labels': {
      2154: 'Lambert 93',
      2972: 'UTM 22 Nord',
      2975: 'UTM 40 Sud',
      4471: 'UTM 38 Sud',
      5490: 'UTM 20 Nord'
    },
    'x-group': 'Coordonnées géographiques'
  },
  {
    key: 'qualite_xy',
    'x-originalName': 'QUALITE_XY',
    type: 'string',
    title: 'Qualité de géolocalisation',
    description: 'Indicateur de qualité de géolocalisation',
    'x-labels': {
      B: 'Bonne',
      A: 'Acceptable',
      M: 'Mauvaise',
      _Z: 'Non-géolocalisé',
      _U: 'Indéterminée'
    },
    'x-group': 'Coordonnées géographiques'
  },
  {
    key: 'qualite_geoloc',
    'x-originalName': 'QUALITE_GEOLOC',
    type: 'string',
    title: 'Précision du repérage par l’adresse',
    description: 'Indicateur de précision du repérage par l’adresse',
    'x-labels': {
      11: 'Voie sûre, Numéro trouvé',
      12: 'Voie sûre, Position aléatoire dans la voie',
      21: 'Voie probable, Numéro trouvé',
      22: 'Voie probable, Position aléatoire dans la voie',
      33: 'Voie inconnue, Position aléatoire dans la commune',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Coordonnées géographiques'
  },
  {
    key: 'tr_dist_precision',
    'x-originalName': 'TR_DIST_PRECISION',
    type: 'string',
    title: 'Erreur maximum de positionnement dans la voie ou le lieu-dit',
    'x-labels': {
      '< 100': 'Moins de 100 mètres',
      '>= 500': '500 mètres ou plus',
      '[100 - 500[': 'De 100 à moins de 500 mètres',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Coordonnées géographiques'
  },
  {
    key: 'quali_iris',
    'x-originalName': 'QUALI_IRIS',
    type: 'string',
    title: 'Indicateur de qualité du géoréférencement dans l\'iris',
    'x-labels': {
      1: 'Appartenance sûre au zonage',
      2: 'Appartenance probable au zonage',
      3: 'Appartenance aléatoire ou indéterminée au zonage',
      X: 'Non concerné par le zonage'
    },
    'x-group': 'Coordonnées géographiques'
  },
  {
    key: 'dom',
    'x-originalName': 'DOM',
    type: 'string',
    title: 'Domaine d\'appartenance',
    description: 'Domaine d\'appartenance de l\'équipement',
    'x-labels': {
      A: 'Services aux particuliers',
      B: 'Commerces',
      C: 'Enseignement',
      D: 'Santé et action sociale',
      E: 'Transports et déplacements',
      F: 'Sports, loisirs et culture',
      G: 'Tourisme'
    },
    'x-group': 'Classification de l\'équipement'
  },
  {
    key: 'sdom',
    'x-originalName': 'SDOM',
    type: 'string',
    title: 'Sous-domaine d\'appartenance',
    description: 'Sous-domaine d\'appartenance de l\'équipement',
    'x-labels': {
      A1: 'Services publics',
      A2: 'Services généraux',
      A3: 'Services automobiles',
      A4: 'Artisanat du bâtiment',
      A5: 'Autres services à la population',
      B1: 'Grandes surfaces',
      B2: 'Commerces alimentaires',
      B3: 'Commerces spécialisés non-alimentaires',
      C1: 'Enseignement du premier degré',
      C2: 'Enseignement du second degré - premier cycle',
      C3: 'Enseignement du second degré - second cycle',
      C4: 'Enseignement supérieur non-universitaire',
      C5: 'Enseignement supérieur universitaire',
      C6: 'Formation continue',
      C7: 'Autres services de l\'éducation',
      D1: 'Etablissements et services de santé',
      D2: 'Fonctions médicales et paramédicales (à titre libéral)',
      D3: 'Autres établissements et services à caractère sanitaire',
      D4: 'Action sociale pour personnes âgées',
      D5: 'Action sociale pour enfants en bas-âge',
      D6: 'Action sociale pour handicapés',
      D7: 'Autres services d\'action sociale',
      E1: 'Infrastructures de transports',
      F1: 'Equipements sportifs',
      F2: 'Equipements de loisirs',
      F3: 'Equipements culturels et socioculturels',
      G1: 'Tourisme'
    },
    'x-group': 'Classification de l\'équipement'
  },
  {
    key: 'typequ',
    'x-originalName': 'TYPEQU',
    type: 'string',
    title: 'Type d\'équipement',
    'x-labels': {
      A101: 'POLICE-',
      A104: 'GENDARMERIE',
      A105: 'COUR D\'APPEL (CA)',
      A108: 'CONSEIL DE PRUD\'HOMMES (CPH)',
      A109: 'TRIBUNAL DE COMMERCE (TCO)',
      A120: 'DRFIP (DIRECTION RÉGIONALE DES FINANCES PUBLIQUES)',
      A121: 'DDFIP (DIRECTION DÉPARTEMENTALE DES FINANCES PUBLIQUES)',
      A122: 'RÉSEAU DE PROXIMITÉ PÔLE EMPLOI',
      A124: 'MAISON DE JUSTICE ET DU DROIT',
      A125: 'ANTENNE DE JUSTICE',
      A126: 'CONSEIL DÉPARTEMENTAL D\'ACCÈS AU DROIT (CDAD)',
      A128: 'IMPLANTATIONS FRANCE SERVICES (IFS)',
      A129: 'MAIRIE',
      A130: 'BUREAU D\'AIDE JURIDICTIONNELLE (BAJ)',
      A131: 'TRIBUNAL JUDICIAIRE (TJ)',
      A132: 'TRIBUNAL DE PROXIMITÉ (TPRX)',
      A133: 'DÉCHÈTERIE',
      A203: 'BANQUE, CAISSE D\'ÉPARGNE',
      A205: 'SERVICES FUNÉRAIRES',
      A206: 'BUREAU DE POSTE',
      A207: 'RELAIS POSTE',
      A208: 'AGENCE POSTALE',
      A301: 'RÉPARATION AUTOMOBILE ET DE MATÉRIEL AGRICOLE',
      A302: 'CONTRÔLE TECHNIQUE AUTOMOBILE',
      A303: 'LOCATION AUTO-UTILITAIRES LÉGERS',
      A304: 'ÉCOLE DE CONDUITE',
      A401: 'MAÇON',
      A402: 'PLÂTRIER PEINTRE',
      A403: 'MENUISIER CHARPENTIER SERRURIER',
      A404: 'PLOMBIER COUVREUR CHAUFFAGISTE',
      A405: 'ÉLECTRICIEN',
      A406: 'ENTREPRISE GÉNÉRALE DU BÂTIMENT',
      A501: 'COIFFURE',
      A502: 'VÉTÉRINAIRE',
      A503: 'AGENCE DE TRAVAIL TEMPORAIRE',
      A504: 'RESTAURANT- RESTAURATION RAPIDE',
      A505: 'AGENCE IMMOBILIÈRE',
      A506: 'PRESSING-LAVERIE AUTOMATIQUE',
      A507: 'INSTITUT DE BEAUTÉ-ONGLERIE',
      B103: 'GRANDE SURFACE DE BRICOLAGE',
      B104: 'HYPERMARCHÉ ET GRAND MAGASIN',
      B105: 'SUPERMARCHÉ ET MAGASIN MULTI-COMMERCE',
      B201: 'SUPÉRETTE',
      B202: 'ÉPICERIE',
      B204: 'BOUCHERIE CHARCUTERIE',
      B205: 'PRODUITS SURGELÉS',
      B206: 'POISSONNERIE',
      B207: 'BOULANGERIE-PÂTISSERIE',
      B208: 'COMMERCE SPÉCIALISÉ EN FRUITS ET LÉGUMES',
      B209: 'COMMERCE DE BOISSONS',
      B210: 'AUTRES COMMERCES ALIMENTAIRES',
      B302: 'MAGASIN DE VÊTEMENTS',
      B303: 'MAGASIN D\'ÉQUIPEMENTS DU FOYER',
      B304: 'MAGASIN DE CHAUSSURES',
      B306: 'MAGASIN DE MEUBLES',
      B307: 'MAGASIN D\'ARTICLES DE SPORTS ET DE LOISIRS',
      B308: 'MAGASIN DE REVÊTEMENTS MURS ET SOLS',
      B309: 'DROGUERIE QUINCAILLERIE BRICOLAGE',
      B310: 'PARFUMERIE-COSMÉTIQUE',
      B311: 'HORLOGERIE-BIJOUTERIE',
      B312: 'FLEURISTE-JARDINERIE-ANIMALERIE',
      B313: 'MAGASIN D\'OPTIQUE',
      B315: 'MAGASIN DE MATÉRIEL MÉDICAL ET ORTHOPÉDIQUE',
      B316: 'STATION-SERVICE',
      B317: 'COMMERCE DE TISSUS ET MERCERIE',
      B318: 'COMMERCE DE JEUX ET JOUETS',
      B319: 'MAROQUINERIE ET ARTICLES DE VOYAGE',
      B320: 'COMMERCE DE COMBUSTIBLES DOMESTIQUES',
      B321: 'MAGASIN ÉLECTROMÉNAGER, MATÉRIEL AUDIO VIDÉO INFORMATIQUE',
      B322: 'MAGASIN DE MATÉRIELS DE TÉLÉCOMMUNICATION',
      B323: 'COMMERCE DE BIENS D’OCCASION',
      B324: 'LIBRAIRIE',
      B325: 'PAPETERIE ET PRESSE',
      C107: 'ÉCOLE MATERNELLE',
      C108: 'ÉCOLE PRIMAIRE',
      C109: 'ÉCOLE ÉLÉMENTAIRE',
      C201: 'COLLÈGE',
      C301: 'LYCÉE D\'ENSEIGNEMENT GÉNÉRAL ET/OU TECHNOLOGIQUE',
      C302: 'LYCÉE D\'ENSEIGNEMENT PROFESSIONNEl',
      C303: 'LYCÉE D\'ENSEIGNEMENT TECHNIQUE ET/OU PROFESSIONNEL AGRICOLE',
      C304: 'SGT SECTION D\'ENSEIGNEMENT GÉNÉRAL ET TECHNOLOGIQUE',
      C305: 'SEP SECTION D\'ENSEIGNEMENT PROFESSIONNEl',
      C401: 'STS SECTION TECHNICIEN SUPÉRIEUR, CPGE CLASSE PRÉPARATOIRE AUX GRANDES ÉCOLES',
      C402: 'FORMATION SANTÉ',
      C403: 'FORMATION COMMERCE',
      C409: 'AUTRE FORMATION POST BAC NON UNIVERSITAIRE',
      C501: 'UFR',
      C502: 'INSTITUT UNIVERSITAIRE',
      C503: 'ÉCOLE D\'INGÉNIEURS',
      C504: 'ENSEIGNEMENT GÉNÉRAL SUPÉRIEUR PRIVÉ',
      C505: 'ÉCOLE D\'ENSEIGNEMENT SUPÉRIEUR AGRICOLE',
      C509: 'AUTRE ENSEIGNEMENT SUPÉRIEUR',
      C601: 'CENTRE DE FORMATION D\'APPRENTIS HORS AGRICULTURE',
      C602: 'GRETA',
      C603: 'CENTRE DISPENSANT DE LA FORMATION CONTINUE AGRICOLE',
      C604: 'FORMATION AUX MÉTIERS DU SPORT',
      C605: 'CENTRE DISPENSANT DES FORMATIONS D\'APPRENTISSAGE AGRICOLE',
      C609: 'AUTRE FORMATION CONTINUE',
      C701: 'RÉSIDENCE UNIVERSITAIRE',
      C702: 'RESTAURANT UNIVERSITAIRE',
      D101: 'ÉTABLISSEMENT SANTÉ COURT SÉJOUR',
      D102: 'ÉTABLISSEMENT SANTÉ MOYEN SÉJOUR',
      D103: 'ÉTABLISSEMENT SANTÉ LONG SÉJOUR',
      D104: 'ÉTABLISSEMENT PSYCHIATRIQUE',
      D105: 'CENTRE LUTTE CANCER',
      D106: 'URGENCES',
      D107: 'MATERNITÉ',
      D108: 'CENTRE DE SANTÉ',
      D109: 'STRUCTURE PSYCHIATRIQUE EN AMBULATOIRE',
      D110: 'CENTRE MÉDECINE PRÉVENTIVE',
      D111: 'DIALYSE',
      D112: 'HOSPITALISATION À DOMICILE',
      D113: 'MAISON DE SANTÉ PLURIDISCIPLINAIRE',
      D201: 'MÉDECIN GÉNÉRALISTE',
      D202: 'SPÉCIALISTE EN CARDIOLOGIE',
      D203: 'SPÉCIALISTE EN DERMATOLOGIE VÉNÉRÉOLOGIE',
      D206: 'SPÉCIALISTE EN GASTRO-ENTÉROLOGIE HÉPATOLOGIE',
      D207: 'SPÉCIALISTE EN PSYCHIATRIE',
      D208: 'SPÉCIALISTE EN OPHTALMOLOGIE',
      D209: 'SPÉCIALISTE EN OTO-RHINO-LARYNGOLOGIE',
      D210: 'SPÉCIALISTE EN PÉDIATRIE',
      D211: 'SPÉCIALISTE EN PNEUMOLOGIE',
      D212: 'SPÉCIALISTE EN RADIODIAGNOSTIC ET IMAGERIE MÉDICALE',
      D213: 'SPÉCIALISTE EN STOMATOLOGIE',
      D214: 'SPÉCIALISTE EN GYNÉCOLOGIE (MÉDICALE ET/OU OBSTÉTRIQUE)',
      D221: 'CHIRURGIEN DENTISTE',
      D231: 'SAGE-FEMME',
      D233: 'MASSEUR KINÉSITHÉRAPEUTE',
      D235: 'ORTHOPHONISTE',
      D236: 'ORTHOPTISTE',
      D237: 'PÉDICURE-PODOLOGUE',
      D238: 'AUDIO PROTHÉSISTE',
      D239: 'ERGOTHÉRAPEUTE',
      D240: 'PSYCHOMOTRICIEN',
      D242: 'DIÉTÉTICIEN',
      D243: 'PSYCHOLOGUE',
      D244: 'INFIRMIER',
      D302: 'LABORATOIRE D ANALYSES ET DE BIOLOGIE MÉDICALE',
      D303: 'AMBULANCE',
      D304: 'TRANSFUSION SANGUINE',
      D305: 'ÉTABLISSEMENT THERMAl',
      D307: 'PHARMACIE',
      D401: 'PERSONNES ÂGÉES : HÉBERGEMENT',
      D402: 'PERSONNES ÂGÉES : SOINS À DOMICILE',
      D403: 'PERSONNES ÂGÉES : SERVICES D\'AIDE',
      D502: 'ÉTABLISSEMENT D\'ACCUEIL DU JEUNE ENFANT (EAJE)',
      D503: 'LIEUX D\'ACCUEIL ENFANT-PARENT (LAEP)',
      D504: 'RELAIS PETITE ENFANCE',
      D505: 'ACCUEIL DE LOISIR SANS HÉBERGEMENT (ALSH)',
      D506: 'CENTRES SOCIAUX',
      D507: 'MÉDIATION FAMILIALE',
      D601: 'ENFANTS HANDICAPÉS : HÉBERGEMENT',
      D602: 'ENFANTS HANDICAPÉS : SERVICES À DOMICILE OU AMBULATOIRES',
      D603: 'ADULTES HANDICAPÉS : ACCUEIL/HÉBERGEMENT',
      D604: 'ADULTES HANDICAPÉS : SERVICES D\'AIDE',
      D605: 'TRAVAIL PROTÉGÉ',
      D606: 'ADULTES HANDICAPÉS : SERVICES DE SOINS À DOMICILE',
      D701: 'PROTECTION DE L\'ENFANCE - HÉBERGEMENT',
      D702: 'PROTECTION DE L\'ENFANCE - ACTION ÉDUCATIVE',
      D703: 'CHRS : CENTRE D\'HÉBERGEMENT ET DE RÉINSERTION SOCIALE',
      D704: 'CENTRE PROVISOIRE D\'HÉBERGEMENT',
      D705: 'CENTRE ACCUEIL DEMANDEUR D\'ASILE',
      D709: 'AUTRES ÉTABLISSEMENTS POUR ADULTES ET FAMILLES EN DIFFICULTÉ',
      E101: 'TAXI-VTC',
      E102: 'AÉROPORT',
      E107: 'GARE DE VOYAGEURS D\'INTÉRÊT NATIONAl',
      E108: 'GARE DE VOYAGEURS D\'INTÉRÊT RÉGIONAl',
      E109: 'GARE DE VOYAGEURS D\'INTÉRÊT LOCAl',
      F101: 'BASSIN DE NATATION',
      F102: 'BOULODROME',
      F103: 'TENNIS',
      F104: 'ÉQUIPEMENT DE CYCLISME',
      F105: 'DOMAINE SKIABLE',
      F106: 'CENTRE ÉQUESTRE',
      F107: 'ATHLÉTISME',
      F108: 'TERRAIN DE GOLF',
      F109: 'PARCOURS SPORTIF/SANTÉ',
      F110: 'SPORTS DE GLACE',
      F111: 'PLATEAUX ET TERRAINS DE JEUX EXTÉRIEURS',
      F112: 'SALLES SPÉCIALISÉES',
      F113: 'TERRAINS DE GRANDS JEUX',
      F114: 'SALLES DE COMBAT',
      F116: 'SALLES NON SPÉCIALISÉES',
      F117: 'ROLLER-SKATE-VÉLO BICROSS OU FREESTYLE',
      F118: 'SPORTS NAUTIQUES',
      F119: 'BOWLING',
      F120: 'SALLES DE REMISE EN FORME',
      F121: 'SALLES MULTISPORTS (GYMNASES)',
      F122: 'CIRCUIT / PISTE DE SPORTS MÉCANIQUES',
      F123: 'MUR ET FRONTON',
      F124: 'PAS DE TIR',
      F125: 'SITE D\'ACTIVITÉS AÉRIENNES',
      F126: 'SITE DE MODÉLISME',
      F201: 'BAIGNADE AMENAGÉE',
      F202: 'PORT DE PLAISANCE – MOUILLAGE',
      F203: 'BOUCLE DE RANDONNÉE',
      F204: 'ÉQUIPEMENTS DE SPORTS DE NATURE',
      F303: 'CINÉMA',
      F305: 'CONSERVATOIRE',
      F307: 'BIBLIOTHÈQUE',
      F312: 'EXPOSITION ET MEDIATION CULTURELLE',
      F313: 'ESPACE REMARQUABLE ET PATRIMOINE',
      F314: 'ARCHIVES',
      F315: 'ARTS DU SPECTACLE',
      G101: 'AGENCE DE VOYAGE',
      G102: 'HÔTEl',
      G103: 'CAMPING',
      G104: 'INFORMATION TOURISTIQUE',
      G105: 'AUTRES HÉBERGEMENTS COLLECTIFS TOURISTIQUES (AHCT)'
    },
    'x-group': 'Classification de l\'équipement'
  },
  {
    key: 'type',
    'x-originalName': 'TYPE',
    type: 'string',
    title: 'Type de lieux',
    'x-labels': {
      ANT: 'Antenne',
      LF: 'Lieu fixe',
      MO: 'Mobile',
      MS: 'Multi-sites',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Classification de l\'équipement'
  },
  {
    key: 'secteur',
    'x-originalName': 'SECTEUR',
    type: 'string',
    title: 'Secteur public, privé hors contrat, privé sous contrat',
    'x-labels': {
      1: 'Public',
      2: 'Privé hors contrat',
      3: 'Privé sous contrat'
    },
    'x-group': 'Classification de l\'équipement'
  },
  {
    key: 'sect',
    'x-originalName': 'SECT',
    type: 'string',
    title: 'Appartenance au secteur public ou privé d\'enseignement',
    'x-labels': {
      PR: 'Secteur privé',
      PU: 'Secteur public',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Classification de l\'équipement'
  },
  {
    key: 'cantine',
    'x-originalName': 'CANTINE',
    type: 'string',
    title: 'Présence ou absence d\'une cantine',
    'x-labels': {
      0: 'Absence',
      1: 'Présence',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Enseignement'
  },
  {
    key: 'internat',
    'x-originalName': 'INTERNAT',
    type: 'string',
    title: 'Présence ou absence d\'un internat',
    description: 'Présence ou absence d’un internat',
    'x-labels': {
      0: 'Absence',
      1: 'Présence',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Enseignement'
  },
  {
    key: 'rpi',
    'x-originalName': 'RPI',
    type: 'string',
    title: 'Type de regroupement pédagogique intercommunal',
    'x-labels': {
      C: 'RPI concentré',
      D: 'RPI dispersé',
      _Z: 'Sans objet'
    },
    'x-group': 'Enseignement'
  },
  {
    key: 'ep',
    'x-originalName': 'EP',
    type: 'string',
    title: 'Présence ou absence d\'un dispositif d\'éducation prioritaire',
    'x-labels': {
      0: 'Absence',
      1: 'Présence',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Enseignement'
  },
  {
    key: 'cl_pge',
    'x-originalName': 'CL_PGE',
    type: 'string',
    title: 'Présence ou absence d\'une classe préparatoire aux grandes écoles en lycée',
    'x-labels': {
      0: 'Absence',
      1: 'Présence',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Enseignement'
  },
  {
    key: 'acces_aire_pratique',
    'x-originalName': 'ACCES_AIRE_PRATIQUE',
    type: 'string',
    title: 'Aménagement permettant l\'accessibilité',
    description: 'Présence d’un aménagement permettant l’accessibilité d’au moins une aire de pratique, au sein d’une même installation, aux personnes handicapées moteur ou à mobilité réduite',
    'x-labels': {
      0: 'Absence',
      1: 'Présence',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'acces_libre',
    'x-originalName': 'ACCES_LIBRE',
    type: 'string',
    title: 'Accès libre permanent',
    description: 'Présence d’un équipement en accès libre permanent',
    'x-labels': {
      0: 'Absence',
      1: 'Présence',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'acces_sanitaire',
    'x-originalName': 'ACCES_SANITAIRE',
    type: 'string',
    title: 'Accessibilité des sanitaires',
    description: 'Présence d’un aménagement permettant l’accessibilité d’au moins un sanitaire, au sein d’une même installation, aux personnes handicapées moteur ou à mobilité réduite',
    'x-labels': {
      0: 'Absence',
      1: 'Présence',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'acces_vestiaire',
    'x-originalName': 'ACCES_VESTIAIRE',
    type: 'string',
    title: 'Accessibilité des vestiaires',
    description: 'Présence d’un aménagement permettant l’accessibilité d’au moins un vestiaire et une douche, au sein d’une même installation, aux personnes handicapées moteur ou à mobilité réduite',
    'x-labels': {
      0: 'Absence',
      1: 'Présence',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'capacite_d_accueil',
    'x-originalName': 'CAPACITE_D_ACCUEIL',
    type: 'string',
    title: 'Catégorie d’ERP',
    description: 'Catégorie d’établissement recevant du public (ERP)',
    'x-labels': {
      1: 'Au-dessus de 1500 personnes',
      2: 'De 701 à 1500 personnes',
      3: 'De 301 à 700 Personnes',
      4: 'De 101 à 300 personnes',
      5: 'Inférieur ou égal à 100 personnes',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'pres_douche',
    'x-originalName': 'PRES_DOUCHE',
    type: 'string',
    title: 'Présence de douches',
    'x-labels': {
      0: 'Absence',
      1: 'Présence',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'pres_sanitaire',
    'x-originalName': 'PRES_SANITAIRE',
    type: 'string',
    title: 'Présence de sanitaires',
    'x-labels': {
      0: 'Absence',
      1: 'Présence',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'saisonnier',
    'x-originalName': 'SAISONNIER',
    type: 'string',
    title: 'Ouverture exclusivement saisonnière',
    description: 'Présence d’un équipement à l’ouverture exclusivement saisonnière',
    'x-labels': {
      0: 'Absence',
      1: 'Présence',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'couvert',
    'x-originalName': 'COUVERT',
    type: 'string',
    title: 'Partie couverte',
    description: 'Présence ou absence d’équipement(s) avec au moins une partie couverte',
    'x-labels': {
      0: 'Absence',
      1: 'Présence',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'eclaire',
    'x-originalName': 'ECLAIRE',
    type: 'string',
    title: 'Partie éclairée',
    description: 'Présence ou absence d\'équipement(s) avec au moins une partie éclairée',
    'x-labels': {
      0: 'Absence',
      1: 'Présence',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'multiplexe',
    'x-originalName': 'MULTIPLEXE',
    type: 'string',
    title: 'Présence d’un cinéma multiplexe',
    'x-labels': {
      0: 'Absence',
      1: 'Présence',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'itinerance',
    'x-originalName': 'ITINERANCE',
    type: 'string',
    title: 'Présence d’une structure itinérante',
    'x-labels': {
      0: 'Absence',
      1: 'Présence',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'mode_gestion',
    'x-originalName': 'MODE_GESTION',
    type: 'string',
    title: 'Mode de gestion',
    description: 'Mode de gestion de l\'infrastructure',
    'x-labels': {
      ENTRE: 'Marché de prestation de service',
      GESDE: 'Délégation de service public',
      PRIVE: 'Gestion privée',
      REGIE: 'Régie',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'sstypheb',
    'x-originalName': 'SSTYPHEB',
    type: 'string',
    title: 'Sous-type d\'hébergement',
    'x-labels': {
      AH: 'Autres hébergements',
      RT: 'Résidence de tourisme',
      VV: 'Village vacances',
      _Z: 'Sans objet'
    },
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'capacite',
    'x-originalName': 'CAPACITE',
    type: 'integer',
    title: 'Capacité',
    description: 'Capacité de l\'équipement',
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'indic_capa',
    'x-originalName': 'INDIC_CAPA',
    type: 'boolean',
    title: 'Concerné par la capacité',
    description: 'Indicateur de concernement : vaut 1 lorsque l\'équipement est concerné par cette information (valeur renseignée et pertinente), 0 sinon. Permet de distinguer une valeur absente d\'une valeur non applicable.',
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'nbequident',
    'x-originalName': 'NBEQUIDENT',
    type: 'integer',
    title: 'Nombre d\'équipements identiques',
    description: 'Nombre d\'aires de pratique identiques dans l\'équipement',
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'indic_nbequident',
    'x-originalName': 'INDIC_NBEQUIDENT',
    type: 'boolean',
    title: 'Concerné par le nombre d\'infrastructures',
    description: 'Indicateur de concernement : vaut 1 lorsque l\'équipement est concerné par cette information (valeur renseignée et pertinente), 0 sinon. Permet de distinguer une valeur absente d\'une valeur non applicable.',
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'nbsalles',
    'x-originalName': 'NBSALLES',
    type: 'integer',
    title: 'Nombre de salles',
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'indic_nbsalles',
    'x-originalName': 'INDIC_NBSALLES',
    type: 'boolean',
    title: 'Concerné par le nombre de salles',
    description: 'Indicateur de concernement : vaut 1 lorsque l\'équipement est concerné par cette information (valeur renseignée et pertinente), 0 sinon. Permet de distinguer une valeur absente d\'une valeur non applicable.',
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'nblieux',
    'x-originalName': 'NBLIEUX',
    type: 'integer',
    title: 'Nombre de lieux',
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'indic_nblieux',
    'x-originalName': 'INDIC_NBLIEUX',
    type: 'boolean',
    title: 'Concerné par le nombre de lieux',
    description: 'Indicateur de concernement : vaut 1 lorsque l\'équipement est concerné par cette information (valeur renseignée et pertinente), 0 sinon. Permet de distinguer une valeur absente d\'une valeur non applicable.',
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'typeresto',
    'x-originalName': 'TYPERESTO',
    type: 'string',
    title: 'Type de restauration',
    'x-labels': {
      '5610A': 'Restauration traditionnelle',
      '5610B': 'Cafétérias et autres libres-services',
      '5610C': 'Restauration de type rapide'
    },
    'x-group': 'Sport, loisirs & accessibilité'
  },
  {
    key: 'gpl',
    'x-originalName': 'GPL',
    type: 'string',
    title: 'Gaz de pétrole liquéfiés',
    'x-labels': {
      0: 'Absence',
      1: 'Présence',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Bornes de recharge'
  },
  {
    key: 'implantation_station',
    'x-originalName': 'IMPLANTATION_STATION',
    type: 'string',
    title: 'Implantation d’une station de recharge',
    'x-labels': {
      1: 'Voirie',
      2: 'Parking public',
      3: 'Parking privé à usage public',
      4: 'parking privé réservé à la clientèle',
      5: 'Station dédiée à la recharge rapide',
      _U: 'Indéterminé',
      _Z: 'Sans objet'
    },
    'x-group': 'Bornes de recharge'
  },
  {
    key: 'nb_pdc',
    'x-originalName': 'NB_PDC',
    type: 'integer',
    title: 'Nombre de points de charge dans une station de recharge',
    'x-group': 'Bornes de recharge'
  },
  {
    key: 'indic_nb_pdc',
    'x-originalName': 'INDIC_NB_PDC',
    type: 'boolean',
    title: 'Indicateur de concernement des valeurs du nombre de points de charge dans une station de recharge',
    description: 'Indicateur de concernement : vaut 1 lorsque l\'équipement est concerné par cette information (valeur renseignée et pertinente), 0 sinon. Permet de distinguer une valeur absente d\'une valeur non applicable.',
    'x-group': 'Bornes de recharge'
  },
  {
    key: 'nb_pdc_pa',
    'x-originalName': 'NB_PDC_PA',
    type: 'integer',
    title: 'Nombre de points de recharge à paiement à l’acte dans une station de recharge',
    'x-group': 'Bornes de recharge'
  },
  {
    key: 'indic_nb_pdc_pa',
    'x-originalName': 'INDIC_NB_PDC_PA',
    type: 'boolean',
    title: 'Indicateur de concernement des valeurs du nombre de points de recharge à paiement à l\'acte',
    description: 'Indicateur de concernement : vaut 1 lorsque l\'équipement est concerné par cette information (valeur renseignée et pertinente), 0 sinon. Permet de distinguer une valeur absente d\'une valeur non applicable.',
    'x-group': 'Bornes de recharge'
  },
  {
    key: 'nb_pdc_acceleree',
    'x-originalName': 'NB_PDC_ACCELEREE',
    type: 'integer',
    title: 'Nombre de points de recharge accélérée dans une station de recharge',
    'x-group': 'Bornes de recharge'
  },
  {
    key: 'indic_nb_pdc_acceleree',
    'x-originalName': 'INDIC_NB_PDC_ACCELEREE',
    type: 'boolean',
    title: 'Indicateur de concernement des valeurs du nombre de points de recharge accélérée',
    description: 'Indicateur de concernement : vaut 1 lorsque l\'équipement est concerné par cette information (valeur renseignée et pertinente), 0 sinon. Permet de distinguer une valeur absente d\'une valeur non applicable.',
    'x-group': 'Bornes de recharge'
  },
  {
    key: 'nb_pdc_lente',
    'x-originalName': 'NB_PDC_LENTE',
    type: 'integer',
    title: 'Nombre de points de recharge lente dans une station de recharge',
    'x-group': 'Bornes de recharge'
  },
  {
    key: 'indic_nb_pdc_lente',
    'x-originalName': 'INDIC_NB_PDC_LENTE',
    type: 'boolean',
    title: 'Indicateur de concernement des valeurs du nombre de points de recharge lente',
    description: 'Indicateur de concernement : vaut 1 lorsque l\'équipement est concerné par cette information (valeur renseignée et pertinente), 0 sinon. Permet de distinguer une valeur absente d\'une valeur non applicable.',
    'x-group': 'Bornes de recharge'
  },
  {
    key: 'nb_pdc_rapide',
    'x-originalName': 'NB_PDC_RAPIDE',
    type: 'integer',
    title: 'Nombre de points de recharge rapide dans une station de recharge',
    'x-group': 'Bornes de recharge'
  },
  {
    key: 'indic_nb_pdc_rapide',
    'x-originalName': 'INDIC_NB_PDC_RAPIDE',
    type: 'boolean',
    title: 'Indicateur de concernement des valeurs du nombre de points de recharge rapide',
    description: 'Indicateur de concernement : vaut 1 lorsque l\'équipement est concerné par cette information (valeur renseignée et pertinente), 0 sinon. Permet de distinguer une valeur absente d\'une valeur non applicable.',
    'x-group': 'Bornes de recharge'
  },
  {
    key: 'nb_pdc_ultrarapide',
    'x-originalName': 'NB_PDC_ULTRARAPIDE',
    type: 'integer',
    title: 'Nombre de points de recharge ultra-rapide dans une station de recharge',
    'x-group': 'Bornes de recharge'
  },
  {
    key: 'indic_nb_pdc_ultrarapide',
    'x-originalName': 'INDIC_NB_PDC_ULTRARAPIDE',
    type: 'boolean',
    title: 'Indicateur de concernement des valeurs du nombre de points de recharge ultra-rapide',
    description: 'Indicateur de concernement : vaut 1 lorsque l\'équipement est concerné par cette information (valeur renseignée et pertinente), 0 sinon. Permet de distinguer une valeur absente d\'une valeur non applicable.',
    'x-group': 'Bornes de recharge'
  },
  {
    key: 'nb_jours_ouvert',
    'x-originalName': 'NB_JOURS_OUVERT',
    type: 'integer',
    title: 'Nombre de jours d’ouverture hebdomadaire d’une station de recharge',
    'x-group': 'Bornes de recharge'
  },
  {
    key: 'indic_nb_jours_ouvert',
    'x-originalName': 'INDIC_NB_JOURS_OUVERT',
    type: 'boolean',
    title: 'Indicateur de concernement des valeurs du nombre de jours d’ouverture hebdomadaire d’une station de recharge',
    description: 'Indicateur de concernement : vaut 1 lorsque l\'équipement est concerné par cette information (valeur renseignée et pertinente), 0 sinon. Permet de distinguer une valeur absente d\'une valeur non applicable.',
    'x-group': 'Bornes de recharge'
  }
]
