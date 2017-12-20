import React, { Component } from 'react'
import { connect } from 'react-redux'
import { extraBoldTextMixin, boldTextMixin, regularTextMixin } from 'src/styles'
import { View, Text, StyleSheet } from 'react-native'
import { PrimaryButton } from '../../components/buttons/Button'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { get } from 'lodash'
import { loopSelector } from './loopSelector'
import HTML from 'react-native-render-html'
import {logEvents} from '../../services/analytics'

const sequenceNumber = 0

@connect(loopSelector)
export default class loopCoachReminderEndScreen extends Component {

  goToLoopEndNext = () => {
    const {navigation, dashboard} = this.props
    const themeName = get(dashboard, 'newCard[0].theme_name', 'Intro')
    this.fireEvents(`${themeName}.loopReminderScreenEnd.${sequenceNumber}.button.next`)
    navigation.navigate('loopReminderEndNext')
  }

  fireEvents = (eventName) => {
    logEvents(eventName)
  }

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }

  updateContent = (text) => {
    const {auth, loop, navigation} = this.props
    const userName = get(auth, 'userData.user.first_name')
    const personName = get(loop, 'loopData.personName')
    const reminder_time = get(navigation, 'state.params.reminder_time')
    let originalText = text

    if(userName) {
      originalText = originalText.replace('<first_name>', userName)
    }
    if(personName) {
      originalText = originalText.replace('<name_of_colleague>', personName)
    }

    if(reminder_time) {
      originalText = originalText.replace('<set_time>', reminder_time)
    }

    return originalText
  }

  render () {
    const {loop, dashboard} = this.props
    const currentLoop = get(loop, 'loop[0]')

    if (currentLoop) {
      const loopContent = eval(this.parseJson(currentLoop))

      const loopStyles = get(loop, 'loopStyles[0]', {})
      const reminder_action_content = eval(
        this.parseJson(loopContent.reminder_action_content))
      console.log('printing', reminder_action_content)

      const headerName = get(dashboard, 'newCard[0].theme_name', 'Intro')
      if (reminder_action_content[1]) {
        const {title} = get(reminder_action_content[1], 'data[0]')
        const {description} = get(reminder_action_content[1], 'data[0]')



    return (
      <GradientWrapper name={'intro'}>
        <View style={styles.introWrapper}>
          <Text style={styles.profileFinishHead}>{this.updateContent(title)}</Text>
          <Text style={styles.profileFinishText}>{this.updateContent(description)}</Text>

          <PrimaryButton
            upper
            style={styles.profileButton}
            onPress={this.goToLoopEndNext}>ok, thanks </PrimaryButton>
        </View>
      </GradientWrapper>
    )
      }
      return (
        <GradientWrapper name={'intro'}>
          <View style={styles.introWrapper}>
            <Text style={styles.profileFinishHead}>Great Work</Text>
            <Text style={styles.profileFinishText}>I will remind you in this particular time</Text>

            <PrimaryButton
              upper
              style={styles.profileButton}
              onPress={this.goToLoopEndNext}>ok, thanks </PrimaryButton>
          </View>
        </GradientWrapper>
      )
  }
    return null
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


