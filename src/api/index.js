import { Platform } from 'react-native'
import {
  reduce,
  uniq,
  get,
  map,
  filter,
  toString,
  toLower,
  trim,
  first,
  split,
  includes,
} from 'lodash'

const API_END_POINT = 'http://test.yomento.se/api/v1'

function getHeaders () {
  return {
    headers: {
      Accept: 'application/json',
      'x-api-key': '',
    },
  }
}

export function fetchProfileContent () {
  const uri = `${API_END_POINT}/getOnBoardingContent`
  return fetch(uri, getHeaders()).then(res => res.json())
}

export function fetchOnBoardingContent () {
  const uri = `${API_END_POINT}/getOnBoardingContent`
  return fetch(uri, getHeaders()).then(res => res.json())
}

/*


export function getUsageTips(config, person, tenantId, lang, page, collection, device, myProducts) {
  const base = get(config, 'urls.base', config.baseUri)
  const query = createQueryFromMyProducts(myProducts, page, lang, collection, device)
  const uri = `${base}/contentengine/1.0/contentengine/contentTips?query=${query}`
  return fetch(uri, getHeaders(tenantId, person, config.channelName, config.xApiKey))
  .then(res => res.json())
}*/
