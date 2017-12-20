import React, { Component } from 'react'
import { AppState, AsyncStorage, Platform } from 'react-native'
import PushNotification from 'react-native-push-notification'
import OneSignal from 'react-native-onesignal';
import Mixpanel from 'react-native-mixpanel'

export default class PushController extends Component {
  componentWillMount() {
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('registered', this.onRegistered);
    OneSignal.addEventListener('ids', this.onIds);
  }
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('registered', this.onRegistered);
    OneSignal.removeEventListener('ids', this.onIds);
  }
  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onRegistered(notifData) {
    console.log("Device had been registered for push notifications!", notifData);
  }

  onIds(device) {
    const {userId, pushToken} = device
    Mixpanel.identify(userId)
    if(Platform.OS=== 'ios') {
      Mixpanel.addPushDeviceToken(pushToken)
    }
    AsyncStorage.setItem('deviceInfo', JSON.stringify(device))
  }

  componentDidMount () {
    PushNotification.configure({
      onNotification: function (notification) {
      },
      onRegister: function (token) {
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
