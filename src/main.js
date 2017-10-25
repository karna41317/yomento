import { Provider } from 'react-redux'
import Store from './store'
import AppViewContainer from './modules/AppViewContainer'
import React, { Component } from 'react'
import { AppRegistry, BackAndroid, Platform } from 'react-native'
import { NavigationActions } from 'react-navigation'

class yemonto extends Component {

  componentWillMount () {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.navigateBack)
    }
  }

  navigateBack () {
    const navigatorState = store.getState().navigatorState
    const currentStackScreen = navigatorState.index
    const currentTab = navigatorState.routes[0].index
    if (currentTab !== 0 || currentStackScreen !== 0) {
      store.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render () {
    return (
      <Store>
        <AppViewContainer/>
      </Store>
    )
  }
}

AppRegistry.registerComponent('yemonto', () => yemonto)
