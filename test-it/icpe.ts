import { describe, it } from 'node:test'
import assert from 'assert'
import transform from '../lib/transforms/icpe.ts'

// La source BRGM Georisques ne fournit plus de colonne WKT (WGS84) depuis
// juillet 2025 : seules restent les coordonnées projetées x/y + code_epsg.
// Le transform doit donc reprojeter x/y vers longitude/latitude (WGS84).
// Valeurs attendues vérifiées contre le jeu de données de production.
describe('icpe transform', () => {
  it('reprojette x/y (Lambert-93, code_epsg 2154) en longitude/latitude WGS84', () => {
    const out = transform({
      x: '433044',
      y: '6444265',
      code_epsg: '2154',
      num_dep: '33',
      cd_insee: '33183',
      cd_postal: '33240',
      num_siret: '42298971500186',
      cd_regime: 'A',
      lib_regime: 'Autorisation',
      lib_seveso: 'Non Seveso',
      adresse: 'Secteur de la Marquette',
      bovins: '0',
      porcs: '0',
      volailles: '0',
      carriere: '0',
      eolienne: '0',
      industrie: '1'
    })
    assert.equal(out.longitude, -0.39162)
    assert.equal(out.latitude, 45.04603)
    assert.equal(out.famille_ic, 'industrie')
    assert.equal(out.regime, 'A')
    assert.equal(out.WKT, undefined)
    assert.equal(out.cd_regime, undefined)
    assert.equal(out.lib_seveso, undefined)
  })

  it('reprojette les DOM (Mayotte, code_epsg 4471)', () => {
    const out = transform({
      x: '518303',
      y: '8592509',
      code_epsg: '4471',
      num_dep: '976',
      cd_insee: '97611',
      cd_postal: '97600',
      num_siret: '',
      cd_regime: 'E',
      industrie: '1'
    })
    assert.equal(out.longitude, 45.1686)
    assert.equal(out.latitude, -12.73187)
  })

  it('échoue explicitement sur un code_epsg inconnu plutôt que de produire des coordonnées invalides', () => {
    assert.throws(() => transform({ x: '1', y: '2', code_epsg: '9999', industrie: '1' }), /code_epsg/)
  })
})
