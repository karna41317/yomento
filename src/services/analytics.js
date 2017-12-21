import Moment from 'moment'
import Mixpanel from 'react-native-mixpanel'
import AppEventsLogger from 'react-native-fbsdk'
import { reduxStore } from 'src/store/store'
import { get } from 'lodash'
import { AsyncStorage } from 'react-native'

export function logEvents (eventName, params = {}) {
  const state = reduxStore.getState()

  const userInfo = get(state, 'auth.userData.user')
  const properties = Object.assign(params, {
    //timestamp: Moment().format('MMMM Do YYYY, h:mm:ss a'),
    //user: userInfo,
  })
  logMixPanelEvents(eventName, properties)
  logFacebookEvents(eventName, properties)
}

export function logMixPanelEvents (eventName, properties) {
  if (eventName === 'user.signup.success') {

    const deviceInfo = AsyncStorage.getItem('deviceInfo')
    const email = get(properties, 'user.email')
    Mixpanel.identify(deviceInfo.userId)

    Mixpanel.set({'$email': email})
  }
  Mixpanel.trackWithProperties(eventName, properties)
}

export function logFacebookEvents (eventName, properties) {


  //AppEventsLogger.logEvent(eventName, properties)
}
