export const validateQrCode = data => {
  const DEFAULT_KEY = ['id', 'table']
  const keys = Object.keys(data)
  return DEFAULT_KEY.every(e => keys.includes(e))
}
