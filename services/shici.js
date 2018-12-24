import { schema, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'

const API_ROOT = 'https://api.gushi.ci/'
const API_ROOT_JSON = 'https://api.gushi.ci/all.json'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(endpoint, schema) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      const camelizedJson = camelizeKeys(json)
      const nextPageUrl = getNextPageUrl(response)

      return Object.assign({},
        normalize(camelizedJson, schema),
        { nextPageUrl }
      )
    })
    .then(
      response => ({ response }),
      error => ({ error: error.message || 'Something bad happened' })
    )

}

// api services
export const fetchUser = login => callApi(`users/${login}`, userSchema)
// export const changeShici = url => callApi(url)
export const changeShici = () => callApi('all.json')
