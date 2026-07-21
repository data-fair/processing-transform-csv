import proj4 from 'proj4'

// Depuis juillet 2025, la source BRGM Georisques ne fournit plus la colonne WKT
// (géométrie WGS84). Les coordonnées ne sont plus disponibles que projetées, via
// les colonnes x/y exprimées dans le système désigné par code_epsg. On reprojette
// donc x/y vers longitude/latitude (WGS84) pour conserver la colonne géo du jeu
// de données (concepts latitude/longitude → _geopoint / carte).
const WGS84 = '+proj=longlat +datum=WGS84 +no_defs'
const projections: Record<string, string> = {
  2154: '+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs', // RGF93 / Lambert-93 (métropole)
  2975: '+proj=utm +zone=40 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs', // RGR92 / UTM 40S (La Réunion)
  4559: '+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs', // RRAF 1991 / UTM 20N (Antilles)
  2972: '+proj=utm +zone=22 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs', // RGFG95 / UTM 22N (Guyane)
  4471: '+proj=utm +zone=38 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs', // RGM04 / UTM 38S (Mayotte)
  2987: '+proj=utm +zone=21 +ellps=clrk66 +towgs84=30,430,368,0,0,0,0 +units=m +no_defs' // St-Pierre-et-Miquelon 1950 / UTM 21N
}

const keysToMerge = ['bovins', 'porcs', 'volailles', 'carriere', 'eolienne', 'industrie']

export default function (item: Record<string, any>): Record<string, any> {
  const values = []
  for (const key of keysToMerge) {
    if (item[key] === '1') values.push(key)
    delete item[key]
  }
  item.famille_ic = values.join(';')

  const projection = projections[item.code_epsg]
  if (!projection) throw new Error(`Système de projection non géré (code_epsg=${item.code_epsg}) pour l'établissement ${item.code_aiot}.`)
  const [longitude, latitude] = proj4(projection, WGS84, [parseFloat(item.x), parseFloat(item.y)])
  item.longitude = Number(longitude.toFixed(5))
  item.latitude = Number(latitude.toFixed(5))

  if (item.num_dep.length) item.num_dep = item.num_dep.padStart(2, '0')
  if (item.cd_insee.length) item.cd_insee = item.cd_insee.padStart(5, '0')
  if (item.cd_postal.length) item.cd_postal = item.cd_postal.padStart(5, '0')
  if (item.num_siret.length) item.num_siret = item.num_siret.padStart(14, '0')

  item.regime = item.cd_regime
  delete item.cd_regime
  delete item.lib_regime
  delete item.lib_seveso

  if (item.adresse && item.adresse.startsWith(' - ')) item.adresse = item.adresse.slice(3)
  return item
}
