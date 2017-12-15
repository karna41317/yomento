/**
 * Created by Karan on 2017-12-12.
 */
/**
 * Created by Karan on 2017-12-09.
 */
import React, { Component } from 'react'
import { Platform } from 'react-native'
import MixPanel from 'react-native-mixpanel'

export default class PushController extends Component {
  componentDidMount () {
    MixPanel.sharedInstanceWithToken('79861ceaed8c442a57515ec71a2f1005')
    if (Platform.OS === 'ios') {
    } else {
      Mixpanel.setPushRegistrationId('GCM/FCM push token')
      Mixpanel.initPushHandling(YOUR_12_DIGIT_GOOGLE_SENDER_ID)
    }
  }

  render () {
    return null
  }
}
