const crypto = require('crypto')

module.exports = function (item) {
  item.Identifiant = crypto.createHash('md5').update(item.civilité + '-' + item.nom + '-' + item.prénom + '-' + item.libellé + '-' + item.etablissement + '-' + item.profession).digest('hex')
  return item
}
