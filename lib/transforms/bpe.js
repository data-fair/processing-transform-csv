const proj4 = require('proj4')

const getProjection = (zone, hemisphere, coordinates) => {
  const firstProjection = '+proj=longlat +datum=WGS84 +no_defs'
  let secondProjection
  if (zone !== -1) {
    secondProjection = '+proj=utm +zone=' + zone + ' +' + hemisphere + ' +datum=WGS84 +units=m +no_defs'
  } else {
    secondProjection = '+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
  }
  return proj4(secondProjection, firstProjection, coordinates)
}

module.exports = function (item) {
  const dep = item.DEP
  const [zone, hemisphere] = {
    974: ['40', 'south'],
    972: ['20', 'north'],
    971: ['20', 'north'],
    973: ['22', 'north']
  }[dep] || [-1, '']
  const coordinates = [Number(item.LAMBERT_X), Number(item.LAMBERT_Y)]
  const projection = getProjection(zone, hemisphere, coordinates)
  item.DEPCOM.padStart(5, '0')
  item.LATITUDE = projection[1]
  item.LONGITUDE = projection[0]
  return item
}
