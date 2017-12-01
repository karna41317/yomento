/**
 * Created by Karan on 2017-10-25.
 */
const API_ENDPOINT = 'http://test.yomento.se/api/v1'

export const buildUrl = (baseUrl, {path, query, hash}) => {
  query = Object.keys(query).
    map(key => `${key}=${encodeURIComponent(query[key])}`).
    join('&')
  return `${baseUrl || ''}${path || ''}${query ? '?' + query : ''}${hash ? '#' +
    hash : ''}`
}

export default class HttpService {

  constructor () {
  }

  buildHeaders (headers) {
    return Object.assign({
      'Content-Type': 'application/json',
    }, headers || {})
  }

  get (path, query, headers) {
    return this.request({
      method: 'GET',
      path, query, headers,
    }).then(res => res)
  }

  post (path, body, headers) {
    return this.request({
      method: 'POST',
      path, body, headers,
    }).then(res => res)
  }

  request ({method, path, query = {}, headers = {}, body = {}}) {
    headers = Object.assign({}, this.buildHeaders(), headers || {})
    const url = /^(http|https):\/\//.test(path) ? path : buildUrl(API_ENDPOINT,
      {path, query})
    const payload = {
      method: method,
      headers: this.buildHeaders(headers),
    }
    if (method !== 'GET' && method !== 'HEAD') {
      payload.body = JSON.stringify(body)
    }
    return fetch(url, payload).then(res => {
      if (res.status !== 200) {
        return res.json().catch(() => {
          return {
            code: res.status,
            message: res['_bodyText'],
          }
        })
      }
      return res
    }).then(res => res.json())
  }
}
