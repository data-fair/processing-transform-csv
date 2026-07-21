// Schéma curé du jeu de données ICPE, envoyé uniquement à la création (voir
// lib/upload.ts). Il porte les libellés, les groupes (x-group) et l'ordre
// d'affichage des colonnes. L'ordre du tableau = ordre des colonnes dans data-fair.
const IDENTIFICATION = 'Identification'
const ACTIVITE = 'Activité et classement'
const RUBRIQUES = 'Rubriques ICPE'
const LOCALISATION = 'Localisation'
const COORDS_SOURCE = 'Coordonnées source (technique)'
const SUIVI = 'Suivi'

export default [
  // — Identification —
  {
    key: 'code_aiot',
    'x-originalName': 'code_aiot',
    type: 'integer',
    'x-refersTo': 'code-aiot',
    title: 'Code AIOT',
    'x-group': IDENTIFICATION
  },
  {
    key: 'nom_ets',
    'x-originalName': 'nom_ets',
    type: 'string',
    'x-refersTo': 'http://www.w3.org/2000/01/rdf-schema#label',
    'x-capabilities': { textAgg: true },
    title: 'Nom de l\'établissement',
    'x-group': IDENTIFICATION
  },
  {
    key: 'num_siret',
    'x-originalName': 'num_siret',
    type: 'string',
    'x-refersTo': 'http://www.datatourisme.fr/ontology/core/1.0/#siret',
    title: 'N° SIRET',
    'x-group': IDENTIFICATION
  },
  {
    key: 'url_fiche',
    'x-originalName': 'url_fiche',
    type: 'string',
    'x-refersTo': 'https://schema.org/WebPage',
    'x-capabilities': { textAgg: true },
    title: 'Fiche Géorisques',
    'x-group': IDENTIFICATION
  },

  // — Activité et classement —
  {
    key: 'code_naf',
    'x-originalName': 'code_naf',
    type: 'integer',
    title: 'Code NAF',
    'x-group': ACTIVITE
  },
  {
    key: 'lib_naf',
    'x-originalName': 'lib_naf',
    type: 'string',
    'x-capabilities': { textAgg: true },
    title: 'Libellé NAF',
    'x-group': ACTIVITE
  },
  {
    key: 'famille_ic',
    'x-originalName': 'famille_ic',
    type: 'string',
    separator: '; ',
    'x-capabilities': { textAgg: true },
    'x-labels': {
      bovins: 'Bovins',
      porcs: 'Porcs',
      volailles: 'Volailles',
      carriere: 'Carrières',
      eolienne: 'Eoliennes',
      industrie: 'Industries'
    },
    title: 'Famille d\'installations',
    'x-group': ACTIVITE
  },
  {
    key: 'regime',
    'x-originalName': 'regime',
    type: 'string',
    'x-capabilities': { textAgg: true },
    'x-labels': {
      A: 'Autorisation',
      E: 'Enregistrement',
      AUTRE: 'Autres régimes',
      NEANT: 'Non ICPE'
    },
    title: 'Régime',
    'x-group': ACTIVITE
  },
  {
    key: 'seveso',
    'x-originalName': 'seveso',
    type: 'integer',
    'x-capabilities': { textAgg: true },
    'x-labels': {
      1: 'Seveso seuil haut',
      2: 'Seveso seuil bas',
      3: 'Non Seveso'
    },
    title: 'Statut Seveso',
    'x-group': ACTIVITE
  },
  {
    key: 'ied',
    'x-originalName': 'ied',
    type: 'boolean',
    'x-labels': { false: 'non', true: 'oui' },
    title: 'Directive IED (émissions industrielles)',
    'x-group': ACTIVITE
  },
  {
    key: 'priorite_nationale',
    'x-originalName': 'priorite_nationale',
    type: 'boolean',
    'x-labels': { false: 'non', true: 'oui' },
    title: 'Priorité nationale',
    'x-group': ACTIVITE
  },

  // — Rubriques ICPE —
  {
    key: 'rubriques_autorisation',
    'x-originalName': 'rubriques_autorisation',
    type: 'string',
    title: 'Rubriques en autorisation',
    'x-group': RUBRIQUES
  },
  {
    key: 'rubriques_enregistrement',
    'x-originalName': 'rubriques_enregistrement',
    type: 'string',
    title: 'Rubriques en enregistrement',
    'x-group': RUBRIQUES
  },
  {
    key: 'rubriques_declaration',
    'x-originalName': 'rubriques_declaration',
    type: 'string',
    title: 'Rubriques en déclaration',
    'x-group': RUBRIQUES
  },

  // — Localisation —
  {
    key: 'adresse',
    'x-originalName': 'adresse',
    type: 'string',
    'x-capabilities': { textAgg: true },
    title: 'Adresse',
    'x-group': LOCALISATION
  },
  {
    key: 'cd_postal',
    'x-originalName': 'cd_postal',
    type: 'string',
    'x-refersTo': 'http://schema.org/postalCode',
    title: 'Code postal',
    'x-group': LOCALISATION
  },
  {
    key: 'commune',
    'x-originalName': 'commune',
    type: 'string',
    'x-refersTo': 'http://schema.org/City',
    'x-capabilities': { textAgg: true },
    title: 'Commune',
    'x-group': LOCALISATION
  },
  {
    key: 'cd_insee',
    'x-originalName': 'cd_insee',
    type: 'string',
    'x-refersTo': 'http://rdf.insee.fr/def/geo#codeCommune',
    title: 'Code Insee',
    'x-group': LOCALISATION
  },
  {
    key: 'num_dep',
    'x-originalName': 'num_dep',
    type: 'string',
    'x-refersTo': 'http://rdf.insee.fr/def/geo#codeDepartement',
    'x-capabilities': { textAgg: true },
    title: 'Département',
    'x-group': LOCALISATION
  },
  {
    key: 'longitude',
    'x-originalName': 'longitude',
    type: 'number',
    'x-refersTo': 'http://schema.org/longitude',
    title: 'Longitude',
    'x-group': LOCALISATION
  },
  {
    key: 'latitude',
    'x-originalName': 'latitude',
    type: 'number',
    'x-refersTo': 'http://schema.org/latitude',
    title: 'Latitude',
    'x-group': LOCALISATION
  },

  // — Coordonnées source (technique) —
  {
    key: 'x',
    'x-originalName': 'x',
    type: 'integer',
    title: 'X (coordonnée projetée)',
    'x-group': COORDS_SOURCE
  },
  {
    key: 'y',
    'x-originalName': 'y',
    type: 'integer',
    title: 'Y (coordonnée projetée)',
    'x-group': COORDS_SOURCE
  },
  {
    key: 'code_epsg',
    'x-originalName': 'code_epsg',
    type: 'integer',
    title: 'Code EPSG',
    'x-group': COORDS_SOURCE
  },

  // — Suivi —
  {
    key: 'date_modification',
    'x-originalName': 'date_modification',
    type: 'string',
    title: 'Date de modification',
    'x-group': SUIVI
  },
  {
    key: 'derniere_inspection',
    'x-originalName': 'derniere_inspection',
    type: 'string',
    title: 'Dernière inspection',
    'x-group': SUIVI
  }
]
