import React, { Component } from 'react'
import { AppState } from 'react-native'
import PushNotification from 'react-native-push-notification'
import RNCalendarReminders from 'react-native-calendar-reminders';
import OneSignal from 'react-native-onesignal';

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
    console.log('Device info: ', device);
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

    RNCalendarReminders.authorizeEventStore()
    .then(status => {
      console.log('printing status', status)

    })
    .catch(error => {
      // handle error
    });

  }

  render () {
    return null
  }
}
