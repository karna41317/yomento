/**
 * Created by Karan on 2017-12-12.
 */
/**
 * Created by Karan on 2017-12-09.
 */
import React, { Component } from 'react'
import { Platform } from 'react-native'
import Mixpanel from 'src/services/mixpanel-service'

export default class PushController extends Component {

  constructor () {
    super()
    Mixpanel.sharedInstanceWithToken('79861ceaed8c442a57515ec71a2f1005')
  }
  componentDidMount () {
    if (Platform.OS === 'ios') {
    } else {
      //Mixpanel.setPushRegistrationId('GCM/FCM push token')
      //Mixpanel.initPushHandling(YOUR_12_DIGIT_GOOGLE_SENDER_ID)
    }
  }

  render () {
    return null
  }
}
