import HttpService from './http-service'

const yomentoParams = {
  'client-id': 4,
  'client-secret': 'sfdd5V3HWQ1rCCIqnEG5TCgwLke45EsC7ksEo6C1',
}

class ApiModule extends HttpService {
  registerUser (user) {
    const path = '/register'
    const body = user
    const headers = {
      ...yomentoParams
    }
    return this.post(path, body, headers)
  }

  loginUser (username, password) {
    const path = `/login?email=${username}&password=${password}`
    const body = {}
    const headers = {
      ...yomentoParams
    }
    return this.post(path, body, headers)
  }

  fetchProfileContent (token) {
    const path = '/getOnBoardingContent'
    const headers = {
      'authorization': token,
    }
    const body = {}
    return this.get(path, body, headers)
  }

  AddProfileContent (token, profileRatingContent) {
    const path = '/addOnBoardingContent'
    const headers = {
      'authorization': token,
    }
    const body = profileRatingContent
    return this.post(path, body, headers)
  }

  fetchDashboardCards (token) {
    const path = '/getAllCards'
    const headers = {
      'authorization': token,
    }
    const body = {}
    return this.get(path, body, headers)
  }

  fetchLoops (token, loop_id) {
    const path = `/getLoopDetails?loop_id=${loop_id}`
    const headers = {
      'authorization': token,
    }
    const body = {}
    return this.get(path, body, headers)
  }

  updateCard (token, params) {
    const {pathParams, bodyParams} = params
    const headers = {
      'authorization': token,
    }
    const {card_type, loop_id, reminder_time, card_status} = pathParams

    const body = bodyParams
    const path = `/updateCard?card_type=${card_type}&loop_id=${loop_id}&card_status=${card_status}&reminder_time=${reminder_time}`
    return this.post(path, body, headers)
  }

  fetchLoopStyles (token) {
    const path = `/jsonStyles`
    const headers = {
      'authorization': token,
    }
    const body = {}
    return this.get(path, body, headers)
  }
}

export const apiModule = new ApiModule()

/*const API_END_POINT = 'http://test.yomento.se/api/v1'

export function getHeaders (token) {
  return {
    headers: {
      Accept: 'application/json',
      'token': token,
    },
  }
}

export function registerUser (user) {
  const path = '/register'
  const body = user
  const headers = {
    client_id: 4,
    client_secret: 'sfdd5V3HWQ1rCCIqnEG5TCgwLke45EsC7ksEo6C1',
  }

  HttpService.post(path, body, headers)
}*/

/*

export function registerUser (user) {
  const uri = `${API_END_POINT}/getOnBoardingContent`
  return fetch(uri, options).then(res => res.json())
}

export function fetchProfileContent (token) {
  const uri = `${API_END_POINT}/getOnBoardingContent`
  const options = {
    method: 'POST',
    getHeaders(token)
  }
  return fetch(uri, options).then(res => res.json())
}

export function fetchOnBoardingContent (token) {
  const options = {
    method: 'POST',
    getHeaders(token)
  }
  const uri = `${API_END_POINT}/getOnBoardingContent`
  return fetch(uri, options).then(res => res.json())
}

export function fetchDashboardCards (token) {
  const options = {
    method: 'POST',
    getHeaders(token)
  }
  const uri = `${API_END_POINT}/getAllCards`
  return fetch(uri, options).then(res => res.json())
}

export function fetchLoops (token) {
  const options = {
    method: 'POST',
    getHeaders(token)
  }
  const uri = `${API_END_POINT}/getLoopDetails`
  return fetch(uri, options).then(res => res.json())
}*/

/*


export function getUsageTips(config, person, tenantId, lang, page, collection, device, myProducts) {
  const base = get(config, 'urls.base', config.baseUri)
  const query = createQueryFromMyProducts(myProducts, page, lang, collection, device)
  const uri = `${base}/contentengine/1.0/contentengine/contentTips?query=${query}`
  return fetch(uri, getHeaders(tenantId, person, config.channelName, config.xApiKey))
  .then(res => res.json())
}*/
