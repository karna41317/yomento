/**
 * Created by Karan on 2017-11-20.
 */

import React, { Component } from 'react'
import { View, Text, Animated, ActivityIndicator } from 'react-native'
import { Spinner } from 'src/components'
import { connect } from 'react-redux'
import { loopSelector } from './loopSelector'
import { styles, htmlStyles } from './loop-styles'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { Header, Left, Right, Body, Icon, Button } from 'src/components/native-base'
import HTMLView from 'react-native-htmlview'
import { PrimaryButton, SecondaryButton } from '../../components/buttons/Button'
import LoopSwiperComponent from 'src/components/Swiper/loop-swiper'
import { get } from 'lodash'
import { logEvents } from 'src/services/analytics'

const sequenceNumber = 0

@connect(loopSelector)

export default class LoopIntroScreen extends Component {

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }
  goToIntroScreen = () => {
    this.props.navigation.navigate('loopIntro')
  }

  fireEvents = (eventName) => {
    logEvents(eventName)
  }

  onSkipBtnHandle = (index) => {}

  doneBtnHandle = () => {
    const {navigation, dashboard} = this.props
    const themeName = get(dashboard, 'newCard[0].theme_name', 'Intro')
    this.fireEvents(`${themeName}.loopIntroScreen.${sequenceNumber}.button.done`)
    navigation.navigate('loopHow')
  }

  nextBtnHandle = (index) => {}

  onSlideChangeHandle = (index, total) => {}

  readMoreHandle = () => {
    const {navigation, dashboard} = this.props
    const themeName = get(dashboard, 'newCard[0].theme_name', 'Intro')
    this.fireEvents(`${themeName}.loopIntroScreen.${sequenceNumber}.button.back`)
    navigation.navigate('readMore')
  }

  backPress = () => {
    const {navigation, dashboard} = this.props
    const themeName = get(dashboard, 'newCard[0].theme_name', 'Intro')
    this.fireEvents(`${themeName}.loopIntroScreen.${sequenceNumber}.button.back`)
    navigation.goBack()
  }

  closePress = () => {
    const {navigation, dashboard} = this.props
    const themeName = get(dashboard, 'newCard[0].theme_name', 'Intro')
    this.fireEvents(`${themeName}.loopIntroScreen.${sequenceNumber}.button.close`)
    navigation.navigate('loopIntro')
  }

  tapSelection = () => {

  }

  render () {
    const {loop, navigation, dashboard} = this.props
    if (loop.loop[0]) {
      const loopContent = eval(this.parseJson(loop.loop[0]))
      const introPages = eval(this.parseJson(loopContent.introduction_content))
      const headerName = get(dashboard, 'newCard[0].theme_name', 'Intro')

      if (introPages) {
        return (
          <LoopSwiperComponent
            navigation={navigation}
            tapSelection={this.tapSelection}
            headerName={headerName}
            screenName={'Introduction'}
            showDots={true}
            showSkipButton={false}
            onNextBtnClick={this.nextBtnHandle}
            onDoneBtnClick={this.doneBtnHandle}
            onSkipBtnClick={this.onSkipBtnHandle}
            onSlideChange={this.onSlideChangeHandle}
            readMoreClick={this.readMoreHandle}
            pageArray={introPages}
            wrapperStyle={styles.wrapper}
            titleStyle={styles.title}
            descWrapperStyle={styles.descWrapper}
            descriptionStyle={htmlStyles}
            backPress={this.backPress}
            closePress={this.closePress}
          />
        )
      }
      return <Spinner/>
    }
    return <Spinner/>
  }
}
