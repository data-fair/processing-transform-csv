
const keysToMerge = ['bovins', 'porcs', 'volailles', 'carriere', 'eolienne', 'industrie']
// TODO set these labels in schema
// const changeFormat = {
//   bovins: 'Bovins',
//   porcs: 'Porcs',
//   volailles: 'Volailles',
//   carriere: 'Carrières',
//   eolienne: 'Eoliennes',
//   industrie: 'Industries'
// }

module.exports = function (item) {
  const values = []
  for (const key of keysToMerge) {
    if (item[key] === '1') values.push(key)
    delete item[key]
  }
  item.famille_ic = values.join(';')
  const match = item.WKT.match(/POINT \((.*) (.*)\)/)
  item.longitude = Number(parseFloat(match[1]).toFixed(5))
  item.latitude = Number(parseFloat(match[2]).toFixed(5))
  delete item.WKT
  if (item.num_dep.length) item.num_dep = item.num_dep.padStart(2, '0')
  if (item.cd_insee.length) item.cd_insee = item.cd_insee.padStart(5, '0')
  if (item.cd_postal.length) item.cd_postal = item.cd_postal.padStart(5, '0')
  if (item.num_siret.length) item.num_siret = item.num_siret.padStart(14, '0')

  item.regime = item.cd_regime
  delete item.cd_regime
  delete item.lib_regime
  delete item.lib_seveso
  // TODO set x-labels for regime and seveso in schema

  if (item.adresse && item.adresse.startsWith(' - ')) item.adresse = item.adresse.slice(3)
  return item
}
