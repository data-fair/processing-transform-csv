module.exports = [
  {
    key: 'nom_copropriete',
    'x-originalName': 'nom_copropriete',
    type: 'string',
    title: 'Nom d’usage de la copropriété',
    'x-refersTo': 'http://www.w3.org/2000/01/rdf-schema#label'
  },
  {
    key: 'adresse',
    'x-originalName': 'adresse',
    type: 'string',
    title: 'Numéro et Voie (adresse de référence)'
  },
  {
    key: 'adresse_complete',
    'x-originalName': 'adresse_complete',
    type: 'string',
    title: 'Adresse de référence',
    'x-refersTo': 'http://schema.org/address'
  },
  {
    key: 'code_commune',
    'x-originalName': 'code_commune',
    type: 'string',
    'x-refersTo': 'http://rdf.insee.fr/def/geo#codeCommune',
    title: 'Code commune (adresse de référence)'
  },
  {
    key: 'commune',
    'x-originalName': 'commune',
    type: 'string',
    'x-refersTo': 'http://schema.org/City',
    title: 'Commune (adresse de référence)'
  },
  {
    key: 'code_postal',
    'x-originalName': 'code_postal',
    type: 'string',
    title: 'Code postal (adresse de référence)',
    'x-refersTo': 'http://schema.org/postalCode',
    'x-capabilities': {
      textAgg: true
    }
  },
  {
    key: 'code_epci',
    'x-originalName': 'code_epci',
    type: 'string',
    'x-refersTo': 'http://rdf.insee.fr/def/geo#EtablissementPublicDeCooperationIntercommunale',
    title: 'Code EPCI',
    'x-capabilities': {
      textAgg: true
    }
  },
  {
    key: 'latitude',
    'x-originalName': 'latitude',
    type: 'number',
    'x-refersTo': 'http://schema.org/latitude'
  },
  {
    key: 'longitude',
    'x-originalName': 'longitude',
    type: 'number',
    'x-refersTo': 'http://schema.org/longitude'
  },
  {
    key: 'immatriculation',
    'x-originalName': 'immatriculation',
    type: 'string',
    title: "Numéro d'immatriculation"
  },
  {
    key: 'parcelles',
    'x-originalName': 'parcelles',
    type: 'string',
    'x-refersTo': 'http://dbpedia.org/ontology/codeLandRegistry',
    separator: ' / ',
    title: 'Parcelles'
  },
  {
    key: 'adresses_complementaires',
    'x-originalName': 'adresses_complementaires',
    type: 'string',
    'x-display': 'textarea',
    separator: ' / ',
    title: 'Adresse complémentaires'
  },
  {
    key: 'code_ape',
    'x-originalName': 'code_ape',
    type: 'string',
    'x-refersTo': 'http://www.datatourisme.fr/ontology/core/1.0#apeNaf',
    title: 'Code APE'
  },
  {
    key: 'commune_representant',
    'x-originalName': 'commune_representant',
    type: 'string',
    title: 'Commune du représentant légal'
  },
  {
    key: 'type_syndic',
    'x-originalName': 'type_syndic',
    type: 'string',
    title: 'Type de syndic'
  },
  {
    key: 'identification_representant',
    'x-originalName': 'identification_representant',
    type: 'string',
    title: 'Identification du représentant légal'
  },
  {
    key: 'siret_representant',
    'x-originalName': 'siret_representant',
    type: 'string',
    title: 'Siret représentant légal (si existe)',
    'x-refersTo': 'http://www.datatourisme.fr/ontology/core/1.0/#siret',
    'x-capabilities': {
      textAgg: true
    }
  },
  {
    key: 'date_reglement',
    'x-originalName': 'date_reglement',
    type: 'string',
    format: 'date',
    title: 'Date du règlement de copropriété'
  },
  {
    key: 'mandat_en_cours',
    'x-originalName': 'mandat_en_cours',
    type: 'string',
    title: 'Mandat en cours dans la copropriété',
    enum: [
      'Mandat en cours',
      'Pas de mandat en cours',
      'Mandat expiré sans successeur déclaré',
      'Mandat expiré avec successeur déclaré'
    ]
  },
  {
    key: 'periode_construction',
    'x-originalName': 'periode_construction',
    type: 'string',
    title: 'Période de construction',
    'x-labels': {
      AVANT_1949: 'Avant 1949',
      DE_1975_A_1993: 'De 1975 à 1993',
      NON_CONNUE: 'Non connue',
      DE_1961_A_1974: 'De 1961 à 1974',
      DE_1949_A_1960: 'De 1949 à 1960',
      A_COMPTER_DE_2011: 'A compter de 2011',
      DE_2001_A_2010: 'De 2001 à 2010',
      DE_1994_A_2000: 'De 1994 à 2000',
      'non renseigné': 'Non renseigné'
    }
  },
  {
    key: 'code_qp',
    'x-originalName': 'code_qp',
    type: 'string',
    title: 'Code quartier prioritaire'
  },
  {
    key: 'nom_qp',
    'x-originalName': 'nom_qp',
    type: 'string',
    title: 'Nom quartier prioritaire'
  },
  {
    key: 'copro_acv',
    'x-originalName': 'copro_acv',
    type: 'boolean',
    title: 'Copro dans ACV'
  },
  {
    key: 'copro_pvd',
    'x-originalName': 'copro_pvd',
    type: 'boolean',
    title: 'Copro dans PVD'
  },
  {
    key: 'residence_service',
    'x-originalName': 'residence_service',
    type: 'string',
    title: 'Résidence service'
  },
  {
    key: 'syndicat_cooperatif',
    'x-originalName': 'syndicat_cooperatif',
    type: 'boolean',
    title: 'Syndicat coopératif'
  },
  {
    key: 'syndicat_principal',
    'x-originalName': 'syndicat_principal',
    type: 'boolean',
    title: 'Syndicat principal'
  },
  {
    key: 'immatriculation_syndicat_principal',
    'x-originalName': 'immatriculation_syndicat_principal',
    type: 'string',
    title: 'Si secondaire, n° d’immatriculation du principal'
  },
  {
    key: 'nb_adresses_complementaires',
    'x-originalName': 'nb_adresses_complementaires',
    type: 'string',
    title: "Nombre d'adresses complémentaires"
  },
  {
    key: 'nb_arretes_peril',
    'x-originalName': 'nb_arretes_peril',
    type: 'string',
    title: "Nombre d'arrêtés de péril sur les parties communes en cours"
  },
  {
    key: 'nb_arretes_code_sante_publique',
    'x-originalName': 'nb_arretes_code_sante_publique',
    type: 'string',
    title: "Nombre d'arrêtés relevant du code de la santé publique en cours"
  },
  {
    key: 'nb_arretes_equipements',
    'x-originalName': 'nb_arretes_equipements',
    type: 'string',
    title: "Nombre d'arrêtés sur les équipements communs en cours"
  },
  {
    key: 'nb_lots_stationnement',
    'x-originalName': 'nb_lots_stationnement',
    type: 'string',
    title: 'Nombre de lots de stationnement'
  },
  {
    key: 'nb_lots_habitation',
    'x-originalName': 'nb_lots_habitation',
    type: 'string',
    title: 'Nombre de lots à usage d’habitation'
  },
  {
    key: 'nb_parcelles',
    'x-originalName': 'nb_parcelles',
    type: 'string',
    title: 'Nombre de parcelles cadastrales'
  },
  {
    key: 'nb_aful',
    'x-originalName': 'nb_aful',
    type: 'string',
    title: 'Nombre d’AFUL auxquelles est rattaché le syndicat de copropriétaires'
  },
  {
    key: 'nb_asl',
    'x-originalName': 'nb_asl',
    type: 'string',
    title: 'Nombre d’ASL auxquelles est rattaché le syndicat de copropriétaires'
  },
  {
    key: 'nb_unions_syndicats',
    'x-originalName': 'nb_unions_syndicats',
    type: 'string',
    title: 'Nombre d’Unions de syndicats auxquelles est rattaché le syndicat de copropriétaires'
  },
  {
    key: 'nb_total_lots',
    'x-originalName': 'nb_total_lots',
    type: 'integer',
    title: 'Nombre total de lots'
  },
  {
    key: 'nb_total_lots_usage',
    'x-originalName': 'nb_total_lots_usage',
    type: 'string',
    title: 'Nombre total de lots à usage d’habitation, de bureaux ou de commerces'
  }
]
