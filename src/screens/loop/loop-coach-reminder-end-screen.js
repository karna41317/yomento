import React, { Component } from 'react'
import { connect } from 'react-redux'
import { extraBoldTextMixin, boldTextMixin, regularTextMixin } from 'src/styles'
import { View, Text, StyleSheet } from 'react-native'
import { PrimaryButton } from '../../components/buttons/Button'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { get } from 'lodash'

@connect()
export default class loopCoachReminderEndScreen extends Component {

  goToLoopEndNext = () => {
    this.props.navigation.navigate('loopCoachEndNext')
  }

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }

  render () {


    return (
      <GradientWrapper name={'intro'}>
        <View style={styles.introWrapper}>
          <Text style={styles.profileFinishHead}>Great work!</Text>
          <Text style={styles.profileFinishText}>I will remind you to XXX on
            {'<loop.theme.loopnumber.sequence.coachreminder.remindertime>'}</Text>
          <PrimaryButton
            upper
            style={styles.profileButton}
            onPress={this.goToLoopEndNext}>ok, thanks </PrimaryButton>
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


