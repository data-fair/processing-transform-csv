export default function (item: Record<string, any>): Record<string, any> {
  const ignoreIfNonConnu = (value: string) => (value || '').trim() !== 'non connu' ? (value || '') : ''

  const parcelles = []
  const adressesComplementaires = []
  for (const i of [1, 2, 3]) {
    const codeCommune = ignoreIfNonConnu(item['code_insee_parcelle_' + i])
    if (codeCommune) {
      parcelles.push(codeCommune + ignoreIfNonConnu(item['prefixe_parcelle_' + i]) + ignoreIfNonConnu(item['section_parcelle_' + i]).toUpperCase() + ignoreIfNonConnu(item['numero_parcelle_' + i]))
    }
    const adresseComp = ignoreIfNonConnu(item['adresse_complementaire_' + i])
    if (adresseComp) adressesComplementaires.push(adresseComp)
  }
  return {
    nom_copropriete: ignoreIfNonConnu(item.nom_usage_copropriete),
    adresse: item.numero_voie_adresse,
    adresse_complete: ignoreIfNonConnu(item.adresse_reference),
    code_commune: ignoreIfNonConnu(item.commune),
    commune: item.commune_adresse,
    code_postal: item.code_postal_adresse,
    code_epci: item.epci,
    code_departement: item.code_officiel_departement,
    nom_departement: item.nom_officiel_departement,
    code_region: item.code_officiel_region,
    nom_region: item.nom_officiel_region,
    latitude: item.latitude,
    longitude: item.longitude,
    immatriculation: item.numero_immatriculation,
    date_immatriculation: item.date_immatriculation,
    date_derniere_maj: item.date_derniere_maj,
    parcelles: parcelles.join('/'),
    adresses_complementaires: adressesComplementaires.join('/'),
    code_ape: ignoreIfNonConnu(item.code_ape),
    commune_representant: ignoreIfNonConnu(item.commune_representant_legal),
    type_syndic: ignoreIfNonConnu(item.type_syndic),
    identification_representant: ignoreIfNonConnu(item.identification_representant_legal),
    raison_sociale_representant: ignoreIfNonConnu(item.raison_sociale_representant_legal),
    siret_representant: ignoreIfNonConnu(item.siret_representant_legal),
    date_reglement: item.date_reglement_copropriete,
    mandat_en_cours: item.mandat_en_cours,
    date_fin_dernier_mandat: item.date_fin_dernier_mandat,
    periode_construction: ignoreIfNonConnu(item.periode_construction),
    code_qp: item.code_qp_2024,
    nom_qp: item.nom_qp_2024,
    copro_acv: item.copro_dans_acv,
    copro_pvd: item.copro_dans_pvd,
    residence_service: ignoreIfNonConnu(item.residence_service),
    syndicat_cooperatif: ignoreIfNonConnu(item.syndicat_cooperatif),
    syndicat_principal: ignoreIfNonConnu(item.syndicat_principal_ou_secondaire),
    immatriculation_syndicat_principal: item.numero_immatriculation_syndicat_principal,
    nb_adresses_complementaires: item.nombre_adresses_complementaires,
    nb_lots_stationnement: item.nombre_lots_stationnement,
    nb_lots_habitation: item.nombre_lots_habitation,
    nb_parcelles: item.nombre_parcelles,
    nb_aful: item.nombre_aful,
    nb_asl: item.nombre_asl,
    nb_unions_syndicats: item.nombre_unions_syndicats,
    nb_total_lots: item.nombre_total_lots,
    nb_total_lots_usage: item.nombre_lots_habitation_bureaux_commerces
  }
}
