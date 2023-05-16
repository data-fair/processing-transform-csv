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
  return {
    AN: item.AN,
    DEPCOM: item.DEPCOM,
    DOM: item.DOM,
    DCIRIS: item.DCIRIS,
    LAMBERT_X: item.LAMBERT_X,
    LAMBERT_Y: item.LAMBERT_Y,
    LATITUDE: projection[1],
    LONGITUDE: projection[0],
    QP: item.QP,
    QUALI_IRIS: item.QUALI_IRIS,
    QUALI_QP: item.QUALI_QP,
    QUALI_QVA: item.QUALI_QVA,
    QUALI_ZFU: item.QUALI_ZFU,
    QUALI_ZUS: item.QUALI_ZUS,
    QUALITE_XY: item.QUALITE_XY,
    QVA: item.QVA,
    SDOM: item.SDOM,
    TYPEQU: item.TYPEQU,
    ZFU: item.ZFU,
    ZUS: item.ZUS
  }
}
