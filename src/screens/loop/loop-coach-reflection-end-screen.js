/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { extraBoldTextMixin, boldTextMixin, regularTextMixin } from 'src/styles'
import { View, Text, StyleSheet } from 'react-native'
import HTML from 'react-native-render-html'
import { PrimaryButton } from '../../components/buttons/Button'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { loopSelector } from './loopSelector'
import {get} from 'lodash'

@connect(loopSelector)

export default class loopCoachReflectionEndScreen extends Component {

  componentDidMount () {
  }

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }

  goToLoopEndNext = () => {
    this.props.navigation.navigate('dashboard')
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
    if (loop.loop[0]) {
      const loopContent = eval(this.parseJson(loop.loop[0]))
      const coach_end_content = eval(this.parseJson(loopContent.coach_end_content))
      if (coach_end_content) {
        const {title, description} = get(coach_end_content[0], 'data[0]')
        const loopStyles = get(loop, 'loopStyles[0]', {})
        const updatedTitle = this.updateContent(title)
        const updatedDescription = this.updateContent(description)
        return (
          <GradientWrapper name={'intro'}>
            <View style={styles.introWrapper}>
              <Text style={styles.profileFinishHead}>{title}</Text>
              <Text style={styles.profileFinishText}>{description}</Text>
              <PrimaryButton
                style={styles.profileButton}
                onPress={this.goToLoopEndNext}>
                INTERESTING!
              </PrimaryButton>
            </View>
          </GradientWrapper>
        )
      }
    }
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


