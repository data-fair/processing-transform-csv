module.exports = [
  {
    key: 'reference',
    'x-originalName': 'reference',
    type: 'string',
    'x-cardinality': 46353,
    description: ''
  },
  {
    key: 'appellation',
    'x-originalName': 'appellation',
    type: 'string',
    'x-cardinality': 501,
    description: '',
    'x-refersTo': null
  },
  {
    key: 'adresse',
    'x-originalName': 'adresse',
    type: 'string',
    'x-cardinality': 15441,
    description: '',
    'x-refersTo': 'http://schema.org/address'
  },
  {
    key: 'commune',
    'x-originalName': 'commune',
    type: 'string',
    'x-cardinality': 16322,
    description: '',
    'x-refersTo': 'http://schema.org/City'
  },
  {
    key: 'lieudit',
    'x-originalName': 'lieudit',
    type: 'string',
    'x-cardinality': 4084,
    description: ''
  },
  {
    key: 'departement',
    'x-originalName': 'departement',
    type: 'string',
    'x-cardinality': 104,
    description: '',
    'x-refersTo': 'http://rdf.insee.fr/def/geo#codeDepartement'
  },
  {
    key: 'datation_de_l_edifice',
    'x-originalName': 'datation_de_l_edifice',
    type: 'string',
    'x-cardinality': 3640,
    description: ''
  },
  {
    key: 'denomination_de_l_edifice',
    'x-originalName': 'denomination_de_l_edifice',
    type: 'string',
    'x-cardinality': 1941,
    description: ''
  },
  {
    key: 'description',
    'x-originalName': 'description',
    type: 'string',
    'x-display': 'textarea',
    'x-capabilities': {
      index: false,
      values: false,
      insensitive: false
    },
    description: '',
    'x-refersTo': null
  },
  {
    key: 'domaine',
    'x-originalName': 'domaine',
    type: 'string',
    'x-cardinality': 108,
    description: ''
  },
  {
    key: 'auteur_de_l_edifice',
    'x-originalName': 'auteur_de_l_edifice',
    type: 'string',
    'x-display': 'textarea',
    'x-capabilities': {
      index: false,
      insensitive: false
    },
    description: '',
    title: 'Auteur',
    'x-cardinality': 7911,
    'x-separator': '; '
  },
  {
    key: 'etat_de_conservation',
    'x-originalName': 'etat_de_conservation',
    type: 'string',
    'x-display': 'textarea',
    'x-capabilities': {
      index: false,
      values: false,
      insensitive: false
    },
    description: ''
  },
  {
    key: 'historique',
    'x-originalName': 'historique',
    type: 'string',
    'x-display': 'textarea',
    'x-capabilities': {
      wildcard: true,
      textAgg: true
    },
    description: '',
    'x-refersTo': 'http://schema.org/description',
    'x-concept': {
      id: 'description',
      title: 'Description',
      primary: true
    },
    'x-cardinality': 3596
  },
  {
    key: 'identifiant_agregee',
    'x-originalName': 'identifiant_agregee',
    type: 'string',
    'x-cardinality': 44833,
    description: ''
  },
  {
    key: 'liens_externes',
    'x-originalName': 'liens_externes',
    type: 'string',
    'x-cardinality': 9185,
    description: ''
  },
  {
    key: 'lien_base_mh',
    'x-originalName': 'lien_base_mh',
    type: 'string',
    'x-cardinality': 47177,
    description: '',
    'x-refersTo': 'https://schema.org/WebPage'
  },
  {
    key: 'observations',
    'x-originalName': 'observations',
    type: 'string',
    'x-display': 'textarea',
    'x-capabilities': {
      index: false,
      values: false,
      insensitive: false
    },
    description: ''
  },
  {
    key: 'titre_editorial_notice',
    'x-originalName': 'titre_editorial_notice',
    type: 'string',
    'x-cardinality': 26514,
    description: '',
    'x-refersTo': 'http://www.w3.org/2000/01/rdf-schema#label'
  },
  {
    key: 'date_de_creation_notice',
    'x-originalName': 'date_de_creation_notice',
    type: 'string',
    format: 'date',
    'x-cardinality': 216,
    description: ''
  },
  {
    key: 'nature_de_la_protection',
    'x-originalName': 'nature_de_la_protection',
    type: 'string',
    'x-cardinality': 9,
    description: '',
    title: 'Nature de la protection',
    examples: [
      'arrêté',
      'Arrêté',
      'liste',
      'décret',
      'journal officiel',
      'avis de classement',
      'certificat',
      'I',
      'loi'
    ],
    'x-separator': '; '
  },
  {
    key: 'precision_de_la_protection',
    'x-originalName': 'precision_de_la_protection',
    type: 'string',
    'x-display': 'textarea',
    'x-capabilities': {
      index: false,
      values: false,
      insensitive: false
    },
    description: '',
    title: 'Précisions de la protection'
  },
  {
    key: 'typologie_de_la_protection',
    'x-originalName': 'typologie_de_la_protection',
    type: 'string',
    'x-cardinality': 61,
    description: ''
  },
  {
    key: 'precision_sur_le_statut_de_l_edifice',
    'x-originalName': 'precision_sur_le_statut_de_l_edifice',
    type: 'string',
    'x-display': 'textarea',
    'x-capabilities': {
      index: false,
      values: false,
      insensitive: false
    },
    description: '',
    title: ''
  },
  {
    key: 'lien_vers_la_base_palissy',
    'x-originalName': 'lien_vers_la_base_palissy',
    type: 'string',
    'x-display': 'textarea',
    'x-capabilities': {
      index: false,
      values: false,
      insensitive: false
    },
    description: ''
  },
  {
    key: 'siecle_de_la_campagne_principale_de_construction',
    'x-originalName': 'siecle_de_la_campagne_principale_de_construction',
    type: 'string',
    'x-cardinality': 3115,
    description: ''
  },
  {
    key: 'format_abrege_du_siecle_de_construction',
    'x-originalName': 'format_abrege_du_siecle_de_construction',
    type: 'string',
    'x-cardinality': 89,
    description: '',
    title: 'Siècle',
    'x-separator': '; '
  },
  {
    key: 'typologie_de_la_zone_de_protection',
    'x-originalName': 'typologie_de_la_zone_de_protection',
    type: 'string',
    'x-cardinality': 75,
    description: ''
  },
  {
    key: 'statut_juridique_de_l_edifice',
    'x-originalName': 'statut_juridique_de_l_edifice',
    type: 'string',
    'x-display': 'textarea',
    'x-capabilities': {
      index: false,
      values: false,
      insensitive: false
    },
    description: '',
    title: 'Statut',
    'x-separator': '; '
  },
  {
    key: 'technique_du_decor_porte_de_l_edifice',
    'x-originalName': 'technique_du_decor_porte_de_l_edifice',
    type: 'string',
    'x-display': 'textarea',
    'x-capabilities': {
      index: false,
      values: false,
      insensitive: false
    },
    description: ''
  },
  {
    key: 'latitude',
    'x-originalName': 'latitude',
    type: 'number',
    'x-cardinality': 43912,
    description: '',
    'x-refersTo': 'http://schema.org/latitude'
  },
  {
    key: 'longitude',
    'x-originalName': 'longitude',
    type: 'number',
    'x-cardinality': 43542,
    description: '',
    'x-refersTo': 'http://schema.org/longitude'
  }
]
