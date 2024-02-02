module.exports = function (item) {
  let latitude, longitude
  if (item.coordonnees_au_format_wgs84) {
    latitude = item.coordonnees_au_format_wgs84.split(',')[0]
    longitude = item.coordonnees_au_format_wgs84.split(',')[1]
  }

  const filteredItem = {
    reference: item.reference,
    appellation: item.autre_appellation_de_l_edifice,
    adresse: item.adresse_forme_editoriale,
    commune: item.commune_forme_index,
    lieudit: item.lieudit,
    departement: item.departement_format_numerique,
    datation_de_l_edifice: item.datation_de_l_edifice,
    denomination_de_l_edifice: item.denomination_de_l_edifice,
    description: item.description_de_l_edifice,
    domaine: item.domaine,
    auteur_de_l_edifice: item.auteur_de_l_edifice,
    etat_de_conservation: item.etat_de_conservation,
    historique: item.historique,
    identifiant_agregee: item.identifiant_agregee,
    liens_externes: item.liens_externes,
    lien_base_mh: item.lien_vers_la_base_archiv_mh,
    observations: item.observations,
    titre_editorial_notice: item.titre_editorial_de_la_notice,
    date_de_creation_notice: item.date_de_creation_de_la_notice,
    nature_de_la_protection: item.nature_de_la_protection,
    precision_de_la_protection: item.precision_de_la_protection,
    typologie_de_la_protection: item.typologie_de_la_protection,
    precision_sur_le_statut_de_l_edifice: item.precision_sur_le_statut_de_l_edifice,
    lien_vers_la_base_palissy: item.lien_vers_la_base_palissy,
    siecle_de_la_campagne_principale_de_construction: item.siecle_de_la_campagne_principale_de_construction,
    format_abrege_du_siecle_de_construction: item.format_abrege_du_siecle_de_construction,
    typologie_de_la_zone_de_protection: item.typologie_de_la_zone_de_protection,
    statut_juridique_de_l_edifice: item.statut_juridique_de_l_edifice,
    technique_du_decor_porte_de_l_edifice: item.technique_du_decor_porte_de_l_edifice,
    latitude: latitude,
    longitude: longitude
  }

  return filteredItem
}
