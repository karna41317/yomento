import React, { Component } from 'react'
import { AppState, AsyncStorage, Platform } from 'react-native'
import PushNotification from 'react-native-push-notification'
import OneSignal from 'react-native-onesignal'
import Mixpanel from 'src/services/mixpanel-service'

export default class PushController extends Component {
  componentWillMount () {
    OneSignal.configure()
    Mixpanel.sharedInstanceWithToken('79861ceaed8c442a57515ec71a2f1005')
    OneSignal.addEventListener('received', this.onReceived)
    OneSignal.addEventListener('opened', this.onOpened)
    OneSignal.addEventListener('registered', this.onRegistered)
    OneSignal.addEventListener('ids', this.onIds)
  }

  componentWillUnmount () {
    OneSignal.removeEventListener('received', this.onReceived)
    OneSignal.removeEventListener('opened', this.onOpened)
    OneSignal.removeEventListener('registered', this.onRegistered)
    OneSignal.removeEventListener('ids', this.onIds)
  }

  onOpened (openResult) {
    console.log('Message: ', openResult.notification.payload.body)
    console.log('Data: ', openResult.notification.payload.additionalData)
    console.log('isActive: ', openResult.notification.isAppInFocus)
    console.log('openResult: ', openResult)
  }

  onRegistered (notifData) {
    console.log('Device had been registered for push notifications!', notifData)
  }

  async onIds (device) {
    const {userId, pushToken} = device
    Mixpanel.sharedInstanceWithToken('79861ceaed8c442a57515ec71a2f1005').then(()=>{
      Mixpanel.identify(userId)
      if (Platform.OS === 'ios') {
        Mixpanel.addPushDeviceToken(pushToken)
      }
    })
    console.log('printingdevice', device)

    AsyncStorage.setItem('deviceInfo', JSON.stringify(device))
    const deviceInfo = await AsyncStorage.getItem('deviceInfo')
  }

  componentDidMount () {
    //Mixpanel.sharedInstanceWithToken('79861ceaed8c442a57515ec71a2f1005')
    PushNotification.configure({
      onNotification: function (notification) {
      },
      onRegister: function (token) {
        console.log('prinitng', token)
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    })

  }

  render () {
    return null
  }
}
