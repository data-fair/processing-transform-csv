module.exports = [
  {
    key: 'reference',
    type: 'string',
    title: 'Référence'
  },
  {
    key: 'appellation',
    type: 'string',
    title: 'Appellation'
  },
  {
    key: 'adresse',
    type: 'string',
    title: 'Adresse'
  },
  {
    key: 'commune',
    type: 'string',
    title: 'Commune'
  },
  {
    key: 'lieudit',
    type: 'string',
    title: 'Lieu-dit'
  },
  {
    key: 'departement',
    type: 'string',
    title: 'Département',
    'x-refersTo': 'http://rdf.insee.fr/def/geo#codeDepartement'
  },
  {
    key: 'datation_de_l_edifice',
    type: 'string',
    separator: '; ',
    title: 'Datation de l\'édifice'
  },
  {
    key: 'denomination_de_l_edifice',
    type: 'string',
    separator: '; ',
    title: 'Dénomination de l\'édifice'
  },
  {
    key: 'description',
    type: 'string',
    title: 'Description'
  },
  {
    key: 'domaine',
    type: 'string',
    title: 'Domaine'
  },
  {
    key: 'auteur_de_l_edifice',
    type: 'string',
    title: 'Auteur de l\'édifice'
  },
  {
    key: 'etat_de_conservation',
    type: 'string',
    title: 'État de conservation'
  },
  {
    key: 'historique',
    type: 'string',
    title: 'Historique'
  },
  {
    key: 'identifiant_agregee',
    type: 'string',
    title: 'Identifiant agrégée'
  },
  {
    key: 'liens_externes',
    type: 'string',
    title: 'Liens externes'
  },
  {
    key: 'lien_base_mh',
    type: 'string',
    title: 'Lien base MH'
  },
  {
    key: 'observations',
    type: 'string',
    title: 'Observations'
  },
  {
    key: 'titre_editorial_notice',
    type: 'string',
    title: 'Titre éditorial notice'
  },
  {
    key: 'date_de_creation_notice',
    type: 'string',
    format: 'date',
    title: 'Date de création notice',
    description: 'Date de création de la notice',
    'x-refersTo': 'http://schema.org/Date'
  },
  {
    key: 'nature_de_la_protection',
    type: 'string',
    title: 'Nature de la protection'
  },
  {
    key: 'precision_de_la_protection',
    type: 'string',
    title: 'Précision de la protection'
  },
  {
    key: 'typologie_de_la_protection',
    type: 'string',
    title: 'Typologie de la protection'
  },
  {
    key: 'typologie_de_la_zone_de_protection',
    type: 'string',
    title: 'Typologie de la zone de protection'
  },
  {
    key: 'precision_sur_le_statut_de_l_edifice',
    type: 'string',
    title: 'Précision sur le statut de l\'édifice'
  },
  {
    key: 'lien_vers_la_base_palissy',
    type: 'string',
    title: 'Lien vers la base Palissy'
  },
  {
    key: 'siecle_de_la_campagne_principale_de_construction',
    type: 'string',
    title: 'Siècle de construction',
    description: 'Siècle de la campagne principale de construction'
  },
  {
    key: 'format_abrege_du_siecle_de_construction',
    type: 'string',
    title: 'Siècle de construction (abrégé)',
    description: 'Format abrégé du siècle de construction'
  },
  {
    key: 'statut_juridique_de_l_edifice',
    type: 'string',
    title: 'Statut juridique',
    description: 'Le statut juridique de l\'édifice'
  },
  {
    key: 'technique_du_decor_porte_de_l_edifice',
    type: 'string',
    title: 'Technique du décor',
    description: 'La technique du décor porté par l\'édifice'
  },
  {
    key: 'latitude',
    type: 'number',
    title: 'Latitude',
    'x-refersTo': 'http://schema.org/latitude'
  },
  {
    key: 'longitude',
    type: 'number',
    title: 'Longitude',
    'x-refersTo': 'http://schema.org/longitude'
  }
]
