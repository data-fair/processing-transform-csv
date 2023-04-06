module.exports = function (item) {
  const parcelles = []
  const adresses_complementaires = []
  for (const i of [1, 2, 3]) {
    if (item['Code INSEE commune ' + i]) {
      parcelles.push(item['Code INSEE commune ' + i] + item['Préfixe ' + i] + item['Section ' + i].toUpperCase() + item['Numéro parcelle ' + i])
    }
    if (item['Adresse complémentaire ' + i]) adresses_complementaires.push(item['Adresse complémentaire ' + i])
  }
  return {
    nom_copropriete: item['Nom d’usage de la copropriété'],
    adresse: item['Numéro et Voie (adresse de référence)'],
    adresse_complete: item['Adresse de référence'],
    code_commune: item.Commune,
    commune: item['Commune (adresse de référence)'],
    code_postal: item['Code postal (adresse de référence)'],
    code_epci: item.EPCI,
    latitude: item.lat,
    longitude: item.long,
    immatriculation: item["Numéro d'immatriculation"],
    parcelles: parcelles.join('/'),
    adresses_complementaires: adresses_complementaires.join('/'),
    code_ape: item['Code APE'] !== 'non connu' ? item['Code APE'] : '',
    commune_representant: item['Commune du représentant légal'] !== 'non connu' ? item['Commune du représentant légal'] : '',
    type_syndic: item['Type de syndic : bénévole / professionnel / non connu'] !== 'non connu' ? item['Type de syndic : bénévole / professionnel / non connu'] : '',
    identification_representant: item['Identification du représentant légal  (raison sociale et le numéro SIRET du syndic professionnel ou Civilité/prénom/ nom du syndic bénévole ou coopératif)'] !== 'non connu' ? item['Identification du représentant légal  (raison sociale et le numéro SIRET du syndic professionnel ou Civilité/prénom/ nom du syndic bénévole ou coopératif)'] : '',
    siret_representant: item['Siret représentant légal (si existe)'],
    date_reglement: item['Date du règlement de copropriété'],
    mandat_en_cours: item['Mandat en cours dans la copropriété'],
    periode_construction: item['Période de construction'],
    code_qp: item.code_qp,
    nom_qp: item.nom_qp,
    copro_acv: item['Copro dans ACV'],
    copro_pvd: item['Copro dans PVD'],
    residence_service: item['Résidence service'],
    syndicat_cooperatif: item['Syndicat coopératif'],
    syndicat_principal: item['Syndicat principal ou syndicat secondaire'],
    immatriculation_syndicat_principal: item['Si secondaire, n° d’immatriculation du principal'],
    nb_adresses_complementaires: item["Nombre d'adresses complémentaires"],
    nb_arretes_peril: item["Nombre d'arrêtés de péril sur les parties communes en cours"],
    nb_arretes_code_sante_publique: item["Nombre d'arrêtés relevant du code de la santé publique en cours"],
    nb_arretes_equipements: item["Nombre d'arrêtés sur les équipements communs en cours"],
    nb_lots_stationnement: item['Nombre de lots de stationnement'],
    nb_lots_habitation: item['Nombre de lots à usage d’habitation'],
    nb_parcelles: item['Nombre de parcelles cadastrales'],
    nb_aful: item['Nombre d’AFUL auxquelles est rattaché le syndicat de copropriétaires'],
    nb_asl: item['Nombre d’ASL auxquelles est rattaché le syndicat de copropriétaires'],
    nb_unions_syndicats: item['Nombre d’Unions de syndicats auxquelles est rattaché le syndicat de copropriétaires'],
    nb_total_lots: item['Nombre total de lots'],
    nb_total_lots_usage: item['Nombre total de lots à usage d’habitation, de bureaux ou de commerces']
  }
}
