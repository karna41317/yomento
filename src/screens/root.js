/**
 * Created by Karan on 2017-10-26.
 */
import React, { PropTypes, Component } from 'react'
import { View, StyleSheet, StatusBar, ActivityIndicator } from 'react-native'
import { NavigatorView } from 'src/screens/navigator'
import * as snapshotUtil from '../utils/snapshot'
import * as SessionStateActions from 'src/actions/session-state'
import { store } from './../store/store'
import DeveloperMenu from '../components/DeveloperMenu'
import { connect } from 'react-redux'
import GradientWrapper from '../components/partials/gradientWrapper'

@connect(
  state => {
    return {
      isReady: state.session.isReady,
    }
  },
)
export default class rootScreen extends Component {
  static displayName = 'rootScreen'

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
      <GradientWrapper>
        <View style={{flex: 1}}>
          <StatusBar backgroundColor='#0B0B48' barStyle="light-content"/>
          <NavigatorView/>
          {__DEV__ && <DeveloperMenu/>}
        </View>
      </GradientWrapper>
    )
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
})
