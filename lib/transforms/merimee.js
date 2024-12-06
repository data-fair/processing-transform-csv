module.exports = function (item) {
  let latitude, longitude
  if (item.coordonnees_au_format_WGS84) {
    latitude = item.coordonnees_au_format_WGS84.split(',')[0]
    longitude = item.coordonnees_au_format_WGS84.split(',')[1]
  }

  const filteredItem = {
    reference: item.Reference,
    appellation: item.Autre_appellation_de_l_edifice,
    adresse: item.Adresse_forme_editoriale,
    commune: item.Commune_forme_index,
    lieudit: item.Lieudit,
    departement: item.Departement_format_numerique,
    datation_de_l_edifice: item.Datation_de_l_edifice,
    denomination_de_l_edifice: item.Denomination_de_l_edifice,
    description: item.Description_de_l_edifice,
    domaine: item.Domaine,
    auteur_de_l_edifice: item.Auteur_de_l_edifice,
    etat_de_conservation: item.etat_de_conservation,
    historique: item.Historique,
    identifiant_agregee: item.Identifiant_Agregee,
    liens_externes: item.Liens_externes,
    lien_base_mh: item.Lien_vers_la_base_Archiv_MH,
    observations: item.Observations,
    titre_editorial_notice: item.Titre_editorial_de_la_notice,
    date_de_creation_notice: item.Date_de_creation_de_la_notice,
    nature_de_la_protection: item.Nature_de_la_protection,
    precision_de_la_protection: item.Precision_de_la_protection,
    typologie_de_la_protection: item.Typologie_de_la_protection,
    precision_sur_le_statut_de_l_edifice: item.Precision_sur_le_statut_de_l_edifice,
    lien_vers_la_base_palissy: item.Lien_vers_la_base_Palissy,
    siecle_de_la_campagne_principale_de_construction: item.Siecle_de_la_campagne_principale_de_construction,
    format_abrege_du_siecle_de_construction: item.Format_abrege_du_siecle_de_construction,
    typologie_de_la_zone_de_protection: item.Typologie_de_la_zone_de_protection,
    statut_juridique_de_l_edifice: item.Statut_juridique_de_l_edifice,
    technique_du_decor_porte_de_l_edifice: item.Technique_du_decor_porte_de_l_edifice,
    latitude: latitude,
    longitude: longitude
  }

  return filteredItem
}

// Not used :
//
// Destination_actuelle_de_l_edifice
// Adresse_forme_index
// Etablissement_affectataire_de_l_edifice
// Cadastre
// Copyright
// Type_de_couverture
// Lieu_de_conservation_d_un_element_architectural_deplace
// Dimensions_normalisees_des_edicules_uniquement
// Date_de_Label
// Date_de_la_derniere_mise_a_jour
// Typologie_du_dossier
// Date_et_typologie_de_la_protection
// Partie_d_elevation_exterieure
// Source_de_l_energie_utilisee_par_l_edifice
// Emplacement__forme_et_structure_de_l_escalier
// Description_de_l_elevation_interieure
// Cadre_de_l_etude
// Genre_du_destinataire
// Nom_du_cours_d_eau_traversant_ou_bordant_l_edifice
// COG_Insee_lors_de_la_protection
// Justification_attribution
// Justification_de_la_datation
// Materiaux_du_gros_oeuvre
// Precision_affectataire
// Partie_constituante_non_etudiee
// Partie_constituante
// Precision_sur_la_denomination
// Personnes_liees_a_l_edifice
// Typologie_de_plan
// Precision_de_la_localisation
// Description_de_l_iconographie
// Reference_a_un_ensemble
// Lien_vers_la_base_Joconde
// References_des_parties_constituantes_etudiees
// Région
// Département
// Elements_remarquables_dans_l_edifice
// Remploi
// Renvoi_vers_une_notice_de_la_base_Merimee_ou_Palissy
// Indexation_iconographique_normalisee
// Siecle_de_campagne_secondaire_de_construction
// Materiaux_de_la_couverture
// Couverts_ou_decouverts_du_jardin_de_l_edifice
// Vocable___pour_les_edifices_cultuels
// Typologie_du_couvrement
// Commune_forme_editoriale
