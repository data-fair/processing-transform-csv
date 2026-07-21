// Base Permanente des Équipements (BPE), millésime 2025 et suivants.
// La source INSEE fournit désormais des noms de colonnes propres et les
// coordonnées LATITUDE/LONGITUDE nativement : aucune transformation ligne à
// ligne n'est nécessaire (auparavant on recalculait lat/long depuis LAMBERT_X/Y
// avec proj4). Toute la curation (libellés, groupes, concepts, x-labels) est
// portée par ../schemas/bpe.js et envoyée à la création du jeu de données.
module.exports = function (item) {
  return item
}
