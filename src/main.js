import Store from './store'
import { reduxStore } from 'src/store/store'
import RootScreen from './screens/root'
import React, { Component } from 'react'
import { AppRegistry, BackHandler, Platform, AppState, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import CodePush from 'react-native-code-push'

import PushNotification from 'react-native-push-notification'

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest

class Yomento extends Component {

  componentDidMount () {
    console.disableYellowBox = true
    AppState.addEventListener('change', this.handleAppStateChange)
    CodePush.sync({
      updateDialog: true,
      installMode: CodePush.InstallMode.IMMEDIATE,
    })

  }

  componentWillUnmount () {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  handleAppStateChange (appState) {
    if (appState === 'background') {
      PushNotification.localNotificationSchedule({
        message: 'My Notification Message', // (required)
        date: new Date(Date.now() + (6 * 1000)) // in 60 secs
      })
    }
  }

  constructor () {
    super()
    this.handleAppStateChange = this.handleAppStateChange.bind(this)
    this.state = {restartAllowed: true}
  }

  codePushStatusDidChange (syncStatus) {
    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        this.setState({syncMessage: 'Checking for update.'})
        break
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        this.setState({syncMessage: 'Downloading package.'})
        break
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        this.setState({syncMessage: 'Awaiting user action.'})
        break
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        this.setState({syncMessage: 'Installing update.'})
        break
      case CodePush.SyncStatus.UP_TO_DATE:
        this.setState({syncMessage: 'App up to date.', progress: false})
        break
      case CodePush.SyncStatus.UPDATE_IGNORED:
        this.setState(
          {syncMessage: 'Update cancelled by user.', progress: false})
        break
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        this.setState({
          syncMessage: 'Update installed and will be applied on restart.',
          progress: false,
        })
        break
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        this.setState(
          {syncMessage: 'An unknown error occurred.', progress: false})
        break
    }
  }

  codePushDownloadDidProgress (progress) {
    this.setState({progress})
  }

  toggleAllowRestart () {
    this.state.restartAllowed
      ? CodePush.disallowRestart()
      : CodePush.allowRestart()

    this.setState({restartAllowed: !this.state.restartAllowed})
  }

  getUpdateMetadata () {
    CodePush.getUpdateMetadata(CodePush.UpdateState.RUNNING).
      then((metadata: LocalPackage) => {
        this.setState({
          syncMessage: metadata
            ? JSON.stringify(metadata)
            : 'Running binary version', progress: false,
        })
      }, (error: any) => {
        this.setState({syncMessage: 'Error: ' + error, progress: false})
      })
  }

  /** Update is downloaded silently, and applied on restart (recommended) */
  sync () {
    CodePush.sync(
      {},
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this),
    )
  }

  /** Update pops a confirmation dialog, and then immediately reboots the app */
  syncImmediate () {
    CodePush.sync(
      {installMode: CodePush.InstallMode.IMMEDIATE, updateDialog: true},
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this),
    )
  }

  componentWillMount () {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.navigateBack)
    }
    console.disableYellowBox = true
  }

  navigateBack () {

    const navigatorState = reduxStore.getState().navigatorState
    const currentStackScreen = navigatorState.index
    const currentTab = navigatorState.routes[0].index
    if (currentTab !== 0 || currentStackScreen !== 0) {
      reduxStore.dispatch(NavigationActions.back())
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

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.MANUAL}
const App = CodePush(codePushOptions)(Yomento)

AppRegistry.registerComponent('yemonto', () => App)
