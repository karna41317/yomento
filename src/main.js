import Store from './store'
import RootScreen from './screens/root'
import React, { Component } from 'react'
import { AppRegistry, BackHandler, Platform } from 'react-native'
import { NavigationActions } from 'react-navigation'

//GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest

class yemonto extends Component {

  componentWillMount () {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.navigateBack)
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
        <RootScreen/>
      </Store>
    )
  }
}

AppRegistry.registerComponent('yemonto', () => yemonto)
