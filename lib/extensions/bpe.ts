// Extensions data-fair appliquées au jeu de données à sa création.
// Enrichissement master-data : à partir du code commune (DEPCOM, concept
// codeCommune), on récupère le nom du département et le nom de l'EPCI.
export default [
  {
    active: true,
    type: 'remoteService',
    remoteService: 'dataset:communes-de-france',
    action: 'masterData_bulkSearch_infos-commune',
    select: ['nom_departement', 'nom_epci'],
    overwrite: {},
    propertyPrefix: '_infos_commune'
  }
]
