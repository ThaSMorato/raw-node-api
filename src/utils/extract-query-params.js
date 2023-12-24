export function extractQueryParams(query) {
  return query.substr(1).split('&').reduce((acc, current) => {
    const [key, value] = current.split('=')
    acc[key] = value
    return acc
  }, {})
}
