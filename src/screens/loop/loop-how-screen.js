/**
 * Created by Karan on 2017-11-20.
 */

import React, { Component } from 'react'
import { View, Text, Animated, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { loopSelector } from './loopSelector'
import { styles, htmlStyles } from './loop-styles'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { Header, Left, Right, Body, Icon, Button } from 'src/components/native-base'
import HTMLView from 'react-native-htmlview'
import { PrimaryButton, SecondaryButton } from '../../components/buttons/Button'
import LoopSwiperComponent from 'src/components/Swiper/loop-swiper'
import { get } from 'lodash'
import {updateCards} from 'src/actions'
@connect(loopSelector)
export default class LoopHowScreen extends Component {

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }
  goToIntroScreen = () => {
    this.props.navigation.navigate('loopCoach')
  }

  onSkipBtnHandle = (index) => {
    console.log(index)
  }

  updateCard = (cardType, nextScreen) => {
    const {dispatch, loop, navigation} = this.props

    const loopId = get(loop, 'loop[0].loop_id')

    if(loopId) {
      const pathParams = {
        card_type: cardType,
        loop_id: loopId
      }
      bodyParams = {
      }

      const params = {
        pathParams,
        bodyParams,
        nextScreen
      }
      dispatch(updateCards(params, navigation))
    }
  }

  doneBtnHandle = () => {
    const {navigation} = this.props
    this.updateCard('reflection', 'loopCoachReflectionIntro')
    navigation.navigate('loopCoachReflectionIntro')
  }
  nextBtnHandle = (index) => {
    console.log(index)
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total)
  }
  readMoreHandle = () => {
    const {navigation} = this.props
    this.updateCard('reminder')
    navigation.navigate('loopReminder')
  }

  backPress = () => {
    const {navigation} = this.props
    navigation.goBack()
  }

  closePress = () => {
    const {navigation} = this.props
    navigation.navigate('loopIntro')
  }
  tapSelection = () => {

  }
  render () {
    const {loop} = this.props
    if (loop) {


      const loopContent = eval(this.parseJson(loop.loop[0]))
      const how_content = eval(this.parseJson(loopContent.how_content))
      const {dashboard} = this.props
      const headerName = get(dashboard, 'newCard[0].theme_name', 'Intro')

      if (how_content) {
        return (
          <LoopSwiperComponent
            tapSelection={this.tapSelection}
            headerName={headerName}
            screenName={'how'}
            showDots={true}
            showSkipButton={false}
            onNextBtnClick={this.nextBtnHandle}
            onDoneBtnClick={this.doneBtnHandle}
            onSkipBtnClick={this.onSkipBtnHandle}
            onSlideChange={this.onSlideChangeHandle}
            readMoreClick={this.readMoreHandle}
            pageArray={how_content}
            wrapperStyle={styles.wrapper}
            titleStyle={styles.title}
            descWrapperStyle={styles.descWrapper}
            descriptionStyle={htmlStyles}
            backPress={this.backPress}
            closePress={this.closePress}
          />
        )
      }
    }
    return null
  }
}
