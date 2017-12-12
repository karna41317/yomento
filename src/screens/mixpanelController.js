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
      //Mixpanel.addPushDeviceToken("APNS push token")
    } else {
      Mixpanel.setPushRegistrationId('GCM/FCM push token')
      //tell Mixpanel which user record in People Analytics should receive the messages when they are sent from the Mixpanel app,
      //make sure you call this right after you call `identify`
      Mixpanel.initPushHandling(YOUR_12_DIGIT_GOOGLE_SENDER_ID)
    }
  }

  render () {
    return null
  }
}
