module.exports = function (item) {
  if (item.COM_AV !== item.COM_AP && item.COM_AV && item.COM_AP && item.TYPECOM_AV !== 'ARM' && item.TYPECOM_AP !== 'ARM' && item.TYPECOM_AV !== 'COMA' && item.TYPECOM_AP !== 'COMA') {
    return {
      COM_AV: item.COM_AV.padStart(5, '0'),
      COM_AP: item.COM_AP.padStart(5, '0'),
      DATE_EFF: item.DATE_EFF
    }
  } else {
    return null
  }
}
