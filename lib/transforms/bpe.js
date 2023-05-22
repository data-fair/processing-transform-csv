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
  let zone, hemisphere
  if (dep === '974') {
    zone = '40'
    hemisphere = 'south'
  } else if (dep === '972' || dep === '971') {
    zone = '20'
    hemisphere = 'north'
  } else if (dep === '973') {
    zone = '22'
    hemisphere = 'north'
  } else {
    zone = -1
    hemisphere = ''
  }
  const coordinates = [Number(item.LAMBERT_X), Number(item.LAMBERT_Y)]
  const projection = getProjection(zone, hemisphere, coordinates)
  item.DEPCOM.padStart(5, '0')
  item.LATITUDE = projection[1]
  item.LONGITUDE = projection[0]
  return item
}
