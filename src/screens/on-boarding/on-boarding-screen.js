/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native'
import Swiper from 'src/components/Swiper/swiper'
import demoData from './demo-data'
import { getProfileContent } from 'src/actions'
import { profileState } from 'src/selectors'
import { styles, htmlStyles } from './onboarding.styles'
import {logEvents} from 'src/services/analytics'
import {get} from 'lodash'
@connect(profileState)
export default class OnBoarding extends Component {


  componentDidMount () {
    this.props.dispatch(getProfileContent())
    this.fireEvents(`OnBoarding.launched`)
  }

  fireEvents = (eventName) => {

    logEvents(eventName)
  }

  onSkipBtnHandle = (index) => {
    console.log(index)
  }
  doneBtnHandle = () => {
    const {navigation} = this.props
    this.fireEvents(`OnBoarding.navigateTo.ProfileIdealRating`)
    navigation.navigate('idealRatingMain')
  }
  nextBtnHandle = (index) => {
    console.log(index)
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total)
  }
  readMoreHandle = () => {
    const {navigation} = this.props
    navigation.navigate('readMore')
  }

  render () {

    if (demoData) {
      return (
        <Swiper
          showDots={false}
          showSkipButton={false}
          onNextBtnClick={this.nextBtnHandle}
          onDoneBtnClick={this.doneBtnHandle}
          onSkipBtnClick={this.onSkipBtnHandle}
          onSlideChange={this.onSlideChangeHandle}
          readMoreClick={this.readMoreHandle}
          pageArray={demoData}
          wrapperStyle={styles.wrapper}
          titleStyle={styles.title}
          descWrapperStyle={styles.descWrapper}
          descriptionStyle={htmlStyles}
        />
      )
    }
    return <ActivityIndicator/>
  }
}

