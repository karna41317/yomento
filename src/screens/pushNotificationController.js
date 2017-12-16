import React, { Component } from 'react'
import { AppState } from 'react-native'
import PushNotification from 'react-native-push-notification'
import Pusher from 'pusher-js/react-native'

export default class PushController extends Component {
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

    Pusher.logToConsole = true

    const pusher = new Pusher('a5b3fa8839d4a6a94840', {
      cluster: 'eu',
      encrypted: true,
    })

    const channel = pusher.subscribe('my-channel')
    channel.bind('my-event', function (data) {
      console.log('pringingdevicetoken', data)
    })

  }

  render () {
    return null
  }
}
