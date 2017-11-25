/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { extraBoldTextMixin, lightTextMixin, boldTextMixin, semiBoldTextMixin, regularTextMixin } from 'src/styles'
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native'

import Button from '../../components/form/customButton'
import { PrimaryButton } from '../../components/buttons/Button'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { loopSelector } from './loopSelector'
import {get} from 'lodash'
@connect(loopSelector)
export default class loopCoachReflectionIntroScreen extends Component {

  componentDidMount () {
  }

  goToLoopEndNext = () => {
    this.props.navigation.navigate('loopReflection')
  }

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }

  render () {

    const {loop} = this.props

    if (loop.loop[0]) {
      const loopContent = eval(this.parseJson(loop.loop[0]))
      const coach_action_done_content = eval(
        this.parseJson(loopContent.coach_action_done_content))

      if (coach_action_done_content) {
        const {title, description} = get(coach_action_done_content[0], 'data[0]')
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


