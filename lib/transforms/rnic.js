module.exports = function (item) {
  const parcelles = []
  const adresses_complementaires = []
  for (const i of [1, 2, 3]) {
    if (item['code_insee_commune_' + i]) {
      parcelles.push(item['code_insee_commune_' + i] + item['prefixe_' + i] + item['section_' + i].toUpperCase() + item['numero_parcelle_' + i])
    }
    if (item['adresse_complementaire_' + i]) adresses_complementaires.push(item['adresse_complementaire_' + i])
  }
  return {
    nom_copropriete: item.nom_d_usage_de_la_copropriete,
    adresse: item.numero_et_voie_adresse_de_reference,
    adresse_complete: item.adresse_de_reference,
    code_commune: item.commune,
    commune: item.commune_adresse_de_reference,
    code_postal: item.code_postal_adresse_de_reference,
    code_epci: item.epci,
    latitude: item.lat,
    longitude: item.long,
    immatriculation: item.numero_d_immatriculation,
    parcelles: parcelles.join('/'),
    adresses_complementaires: adresses_complementaires.join('/'),
    code_ape: item.code_ape !== 'non connu' ? item.code_ape : '',
    commune_representant: item.commune_du_representant_legal !== 'non connu' ? item.commune_du_representant_legal : '',
    type_syndic: item.type_de_syndic_benevole_professionnel_non_connu !== 'non connu' ? item.type_de_syndic_benevole_professionnel_non_connu : '',
    identification_representant: item.identification_du_representant_legal_raison_sociale_et_le_numer !== 'non connu' ? item.identification_du_representant_legal_raison_sociale_et_le_numer : '',
    siret_representant: item.siret_du_representant_legal,
    date_reglement: item.date_du_reglement_de_copropriete,
    mandat_en_cours: item.mandat_en_cours_dans_la_copropriete,
    periode_construction: item.periode_de_construction,
    code_qp: item.code_qp,
    nom_qp: item.nom_qp,
    copro_acv: item.copro_dans_acv,
    copro_pvd: item.copro_dans_pvd,
    residence_service: item.residence_service,
    syndicat_cooperatif: item.syndicat_cooperatif,
    syndicat_principal: item.syndicat_principal_ou_syndicat_secondaire,
    immatriculation_syndicat_principal: item.si_secondaire_n_d_immatriculation_du_principal,
    nb_adresses_complementaires: item.nombre_d_adresses_complementaires,

    // DEPRECATED FIELDS
    // nb_arretes_peril: item["Nombre d'arrêtés de péril sur les parties communes en cours"],
    // nb_arretes_code_sante_publique: item["Nombre d'arrêtés relevant du code de la santé publique en cours"],
    // nb_arretes_equipements: item["Nombre d'arrêtés sur les équipements communs en cours"],

    nb_lots_stationnement: item.nombre_de_lots_de_stationnement,
    nb_lots_habitation: item.nombre_de_lots_a_usage_d_habitation,
    nb_parcelles: item.nombre_de_parcelles_cadastrales,
    nb_aful: item.nombre_d_aful_auxquelles_est_rattache_le_syndicat_de_copropriet,
    nb_asl: item.nombre_d_asl_auxquelles_est_rattache_le_syndicat_de_coproprieta,
    nb_unions_syndicats: item.nombre_d_unions_de_syndicats_auxquelles_est_rattache_le_syndica,
    nb_total_lots: item.nombre_total_de_lots,
    nb_total_lots_usage: item.nombre_total_de_lots_a_usage_d_habitation_de_bureaux_ou_de_comm
  }
}
