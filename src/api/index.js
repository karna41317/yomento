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

  loginUser (user) {
    const path = '/register'
    const body = user
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

  fetchLoops (token) {
    const path = '/getLoopDetails'
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
    const cardType = get(pathParams, 'card_type')
    if (cardType === 'reflection') {
      const {cardType, loop_id} = pathParams
      const body = bodyParams
      const path = `/updateCard?card_type=${cardType}&loop_id=${loop_id}`
      return this.post(path, body, headers)
    } else if (cardType === 'reminder') {
      const body = {}
      const {cardType, loop_id, reminder_time} = pathParams
      const path = `/updateCard?card_type=${cardType}&reminder_time=${reminder_time}&loop_id=${loop_id}`
      return this.post(path, body, headers)
    }
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
