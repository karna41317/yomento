/**
 * Created by Karan on 2017-12-09.
 */
import React, { Component } from 'react'
import PushNotification from 'react-native-push-notification'

export default class PushController extends Component {
  componentDidMount () {
    PushNotification.configure({
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification)
      },
      onRegister: function(token) {
        console.log( 'TOKEN:', token );
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },
      popInitialNotification: true,
      requestPermissions: true,
    })

  }

  render () {
    return null
  }
}