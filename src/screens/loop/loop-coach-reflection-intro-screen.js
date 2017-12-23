/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { extraBoldTextMixin, lightTextMixin, boldTextMixin, semiBoldTextMixin, regularTextMixin } from 'src/styles'
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native'
import { Spinner} from 'src/components'
import HTML from 'react-native-render-html'
import Button from '../../components/form/customButton'
import { PrimaryButton } from '../../components/buttons/Button'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { loopSelector } from './loopSelector'
import {get, toUpper} from 'lodash'
import {logEvents} from '../../services/analytics'

@connect(loopSelector)
export default class loopCoachReflectionIntroScreen extends Component {

  componentDidMount () {
  }

  goToLoopEndNext = (currentLoop) => {

    this.fireEvents(`${currentLoop.theme_name}.reflectionIntro.button.next`)
    this.props.navigation.navigate('dashboard')
  }

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }


  fireEvents = (eventName) => {
    logEvents(eventName)
  }


  updateContent = (text) => {
    const {auth, loop} = this.props
    const userName = get(auth, 'userData.user.first_name')
    const personName = get(loop, 'loopData.personName')
    let originalText = text

    if(userName) {
      originalText = originalText.replace('<first_name>', userName)
    }
    if(personName) {
      originalText = originalText.replace('<name_of_colleague>', personName)
    }

    return originalText
  }

  render () {

    const {loop} = this.props
    const currentLoop = get(loop, 'loop[0]')
    if (loop.loop[0]) {
      const loopContent = eval(this.parseJson(loop.loop[0]))
      const coach_action_done_content = eval(
        this.parseJson(loopContent.coach_action_done_content))

      if (coach_action_done_content) {
        const {title, description} = get(coach_action_done_content[0], 'data[0]')

        console.log('printingcoach_action_done_content', coach_action_done_content)


        const {text} = get(coach_action_done_content[0], 'buttons[0]')
        const updatedTitle = this.updateContent(title)
        const updatedDescription = this.updateContent(description)
        const profileFinishText = {
          'regular-p': {
            ...regularTextMixin(20, '#FFFFFF'),
          }
        }

        return (
          <GradientWrapper name={'intro'}>
            <View style={styles.introWrapper}>
              <Text style={styles.profileFinishHead}>{updatedTitle}</Text>
              <Text style={styles.profileFinishText}>{updatedDescription}</Text>
              <PrimaryButton
                style={styles.profileButton}
                onPress={this.goToLoopEndNext.bind(this, currentLoop)}>
                {toUpper(text)}
              </PrimaryButton>
            </View>
          </GradientWrapper>
        )
      }
    }
    return (
      <Spinner />
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


