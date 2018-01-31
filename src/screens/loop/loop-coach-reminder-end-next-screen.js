import React, { Component } from 'react'
import { connect } from 'react-redux'
import { extraBoldTextMixin, boldTextMixin, regularTextMixin } from 'src/styles'
import { View, Text, StyleSheet } from 'react-native'
import { PrimaryButton } from '../../components/buttons/Button'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { get } from 'lodash'
import {logEvents} from '../../services/analytics'

const sequenceNumber = 0

@connect()
export default class loopCoachReminderEndNextScreen extends Component {

  componentDidMount () {
  }

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }


  fireEvents = (eventName) => {
    logEvents(eventName)
  }

  goToDashboard = () => {
    const {navigation, dashboard} = this.props
    const themeName = get(dashboard, 'newCard[0].theme_name', 'Intro')
    this.fireEvents(`${themeName}.loopReminderScreenEndFinal.${sequenceNumber}.button.dashboard`)
    navigation.navigate('dashboard')
  }

  render () {
    return (
      <GradientWrapper name={'intro'}>
        <View style={styles.introWrapper}>
          <Text style={styles.profileFinishHead}>Next?</Text>
          <Text style={styles.profileFinishText}>Why don’t you start a new exercise in the meantime.</Text>
          <PrimaryButton upper
            style={styles.profileButton}
            onPress={this.goToDashboard}>YEAH, WHY NOT! </PrimaryButton>
        </View>
      </GradientWrapper>
    )
  }
}

const styles = StyleSheet.create({
  introWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileFinishHead: {
    position: 'absolute',
    left: 40,
    top: 160,
    backgroundColor: 'transparent',
    ...extraBoldTextMixin(24, '#FFFFFF'),
  },
  profileFinishText: {
    position: 'absolute',
    left: 40,
    top: 210,
    right: 40,
    backgroundColor: 'transparent',
    ...regularTextMixin(20, '#FFFFFF'),
  },
  profileIntroText: {
    position: 'absolute',
    left: 10,
    top: 64,
    right: 120,
    ...boldTextMixin(28)
  },
  profileButton: {
    position: 'absolute',
    right: 40,
    bottom: 40,
  },
})


