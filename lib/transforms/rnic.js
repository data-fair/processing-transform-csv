module.exports = function (item) {
  const ignoreIfNonConnu = (value) => value.trim() !== 'non connu' ? value : ''

  const parcelles = []
  const adresses_complementaires = []
  for (const i of [1, 2, 3]) {
    const codeCommune = ignoreIfNonConnu(item['code_insee_commune_' + i])
    if (codeCommune) {
      parcelles.push(codeCommune + ignoreIfNonConnu(item['prefixe_' + i]) + ignoreIfNonConnu(item['section_' + i].toUpperCase()) + ignoreIfNonConnu(item['numero_parcelle_' + i]))
    }
    const adresseComp = ignoreIfNonConnu(item['adresse_complementaire_' + i])
    if (adresseComp) adresses_complementaires.push(adresseComp)
  }
  return {
    nom_copropriete: ignoreIfNonConnu(item.nom_d_usage_de_la_copropriete),
    adresse: item.numero_et_voie_adresse_de_reference,
    adresse_complete: ignoreIfNonConnu(item.adresse_de_reference),
    code_commune: ignoreIfNonConnu(item.commune),
    commune: item.commune_adresse_de_reference,
    code_postal: item.code_postal_adresse_de_reference,
    code_epci: item.epci,
    latitude: item.lat,
    longitude: item.long,
    immatriculation: item.numero_d_immatriculation,
    parcelles: parcelles.join('/'),
    adresses_complementaires: adresses_complementaires.join('/'),
    code_ape: ignoreIfNonConnu(item.code_ape),
    commune_representant: ignoreIfNonConnu(item.commune_du_representant_legal),
    type_syndic: ignoreIfNonConnu(item.type_de_syndic_benevole_professionnel_non_connu),
    identification_representant: ignoreIfNonConnu(item.identification_du_representant_legal_raison_sociale_et_le_numer),
    siret_representant: ignoreIfNonConnu(item.siret_du_representant_legal),
    date_reglement: item.date_du_reglement_de_copropriete,
    mandat_en_cours: item.mandat_en_cours_dans_la_copropriete,
    periode_construction: ignoreIfNonConnu(item.periode_de_construction),
    code_qp: item.code_qp,
    nom_qp: item.nom_qp,
    copro_acv: item.copro_dans_acv,
    copro_pvd: item.copro_dans_pvd,
    residence_service: ignoreIfNonConnu(item.residence_service),
    syndicat_cooperatif: ignoreIfNonConnu(item.syndicat_cooperatif),
    syndicat_principal: ignoreIfNonConnu(item.syndicat_principal_ou_syndicat_secondaire),
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
