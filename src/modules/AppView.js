import React, { PropTypes, Component } from 'react'
import { View, StyleSheet, StatusBar, ActivityIndicator } from 'react-native'
import {NavigatorView} from 'src/screens/navigator'
import * as snapshotUtil from '../utils/snapshot'
import * as SessionStateActions from 'src/actions/session-state'
import store from '../redux/store'
import DeveloperMenu from '../components/DeveloperMenu'

class AppView extends Component {
  static displayName = 'AppView'

  static propTypes = {
    isReady: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount () {
    snapshotUtil.resetSnapshot().then(snapshot => {
      const {dispatch} = this.props
      if (snapshot) {
        dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot))
      } else {
        dispatch(SessionStateActions.initializeSessionState())
      }

      store.subscribe(() => {
        snapshotUtil.saveSnapshot(store.getState())
      })
    })
  }

  render () {
    if (!this.props.isReady) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator style={styles.centered}/>
        </View>
      )
    }

    return (
      <View>
        <StatusBar backgroundColor='#0B0B48' barStyle="light-content"/>

        <NavigatorView/>
        {__DEV__ && <DeveloperMenu/>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center',
  },
})

export default AppView
