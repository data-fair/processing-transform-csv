// Petits utilitaires partagés.

/** Formate une taille en octets de façon lisible : « 142,9 Mo ». */
export const displayBytes = (size: number): string => {
  const units = [[1, 'octets'], [1e3, 'ko'], [1e6, 'Mo'], [1e9, 'Go'], [1e12, 'To']] as const
  const abs = Math.abs(size)
  if (abs === 0) return '0 octets'
  for (let i = units.length - 1; i >= 0; i--) {
    if (abs >= units[i][0]) return (abs / units[i][0]).toLocaleString('fr-FR', { maximumFractionDigits: 1 }) + ' ' + units[i][1]
  }
  return `${abs} octets`
}
