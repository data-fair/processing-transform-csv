module.exports = [
  {
    key: 'code_aiot',
    'x-originalName': 'code_aiot',
    type: 'integer',
    'x-refersTo': 'code-aiot',
    title: 'Code AIOT'
  },
  {
    key: 'x',
    'x-originalName': 'x',
    type: 'integer'
  },
  {
    key: 'y',
    'x-originalName': 'y',
    type: 'integer'
  },
  {
    key: 'code_epsg',
    'x-originalName': 'code_epsg',
    type: 'integer',
    title: 'Code EPSG'
  },
  {
    key: 'nom_ets',
    'x-originalName': 'nom_ets',
    type: 'string',
    'x-refersTo': 'http://www.w3.org/2000/01/rdf-schema#label',
    'x-capabilities': {
      textAgg: true
    },
    title: 'Nom ETS'
  },
  {
    key: 'num_dep',
    'x-originalName': 'num_dep',
    type: 'string',
    'x-capabilities': {
      textAgg: true
    },
    title: 'Département',
    'x-refersTo': 'http://rdf.insee.fr/def/geo#codeDepartement'
  },
  {
    key: 'adresse',
    'x-originalName': 'adresse',
    type: 'string',
    'x-capabilities': {
      textAgg: true
    },
    title: 'Adresse'
  },
  {
    key: 'cd_insee',
    'x-originalName': 'cd_insee',
    type: 'string',
    title: 'Code Insee',
    'x-refersTo': 'http://rdf.insee.fr/def/geo#codeCommune'
  },
  {
    key: 'cd_postal',
    'x-originalName': 'cd_postal',
    type: 'string',
    title: 'Code postal',
    'x-refersTo': 'http://schema.org/postalCode'
  },
  {
    key: 'commune',
    'x-originalName': 'commune',
    type: 'string',
    'x-capabilities': {
      textAgg: true
    },
    title: 'Commune',
    'x-refersTo': 'http://schema.org/City'
  },
  {
    key: 'code_naf',
    'x-originalName': 'code_naf',
    type: 'integer',
    title: 'Code NAF'
  },
  {
    key: 'lib_naf',
    'x-originalName': 'lib_naf',
    type: 'string',
    title: 'Libellé NAF',
    'x-capabilities': {
      textAgg: true
    }
  },
  {
    key: 'num_siret',
    'x-originalName': 'num_siret',
    type: 'string',
    'x-refersTo': 'http://www.datatourisme.fr/ontology/core/1.0/#siret',
    title: 'N°Siret'
  },
  {
    key: 'seveso',
    'x-originalName': 'seveso',
    type: 'integer',
    'x-labels': {
      1: 'Seveso Haut',
      2: 'Seveso Bas',
      3: 'Non Seveso'
    },
    title: 'Seveso',
    'x-capabilities': {
      textAgg: true
    }
  },
  {
    key: 'ied',
    'x-originalName': 'ied',
    type: 'boolean',
    title: 'Directive sur les émissions industrielles',
    'x-labels': {
      false: 'non',
      true: 'oui'
    }
  },
  {
    key: 'priorite_nationale',
    'x-originalName': 'priorite_nationale',
    type: 'boolean',
    title: 'Priorite nationale',
    'x-labels': {
      false: 'non',
      true: 'oui'
    }
  },
  {
    key: 'rubriques_autorisation',
    'x-originalName': 'rubriques_autorisation',
    type: 'string'
  },
  {
    key: 'rubriques_enregistrement',
    'x-originalName': 'rubriques_enregistrement',
    type: 'string'
  },
  {
    key: 'rubriques_declaration',
    'x-originalName': 'rubriques_declaration',
    type: 'string'
  },
  {
    key: 'date_modification',
    'x-originalName': 'date_modification',
    type: 'string',
    title: 'Date de modification'
  },
  {
    key: 'url_fiche',
    'x-originalName': 'url_fiche',
    type: 'string',
    'x-refersTo': 'https://schema.org/WebPage',
    'x-capabilities': {
      textAgg: true
    }
  },
  {
    key: 'famille_ic',
    'x-originalName': 'famille_ic',
    type: 'string',
    title: 'Famille des installations',
    separator: '; ',
    'x-capabilities': {
      textAgg: true
    },
    'x-labels': {
      bovins: 'Bovins',
      porcs: 'Porcs',
      volailles: 'Volailles',
      carriere: 'Carrières',
      eolienne: 'Eoliennes',
      industrie: 'Industries'
    }
  },
  {
    key: 'longitude',
    'x-originalName': 'longitude',
    type: 'number',
    'x-refersTo': 'http://schema.org/longitude',
    title: 'Longitude'
  },
  {
    key: 'latitude',
    'x-originalName': 'latitude',
    type: 'number',
    'x-refersTo': 'http://schema.org/latitude',
    title: 'Latitude'
  },
  {
    key: 'regime',
    'x-originalName': 'regime',
    type: 'string',
    'x-capabilities': {
      textAgg: true
    },
    title: 'Régime'
  }
]
