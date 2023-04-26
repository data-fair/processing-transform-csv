
const keyFilter = new Set(['bovins', 'porcs', 'volailles', 'carriere', 'eolienne', 'industrie'])
const changeFormat = {
  bovins: 'Bovins',
  porcs: 'Porcs',
  volailles: 'Volailles',
  carriere: 'Carrières',
  eolienne: 'Eoliennes',
  industrie: 'Industries'
}
module.exports = function (item) {
  if (item.bovins === '0' && item.porcs === '0' && item.volailles === '0' && item.carriere === '0' && item.eolienne === '0' && item.industrie === '0') {
    item.famille_ic = 'NC'
  } else {
    for (const [key, value] of Object.entries(item)) {
      if (keyFilter.has(key) && value === '1') {
        item.famille_ic = changeFormat[key]
      }
    }
  }
  for (const key of Object.entries(changeFormat)) {
    delete item[key[0]]
  }

  const point = item.WKT
  const match = point.match(/POINT \((.*) (.*)\)/)
  const longitude = Number(parseFloat(match[1]).toFixed(5))
  const latitude = Number(parseFloat(match[2]).toFixed(5))
  item.WKT = { type: 'Point', coordinates: [longitude, latitude] }
  return item
}
