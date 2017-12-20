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
import { updateCards } from '../../actions/loop-action'
import {logEvents} from 'src/services/analytics'

const sequenceNumber = 0

@connect(loopSelector)
export default class LoopReflectionScreen extends Component {

  constructor () {
    super()
    this.state = {
      selectedOptions: {},
    }
  }

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }
  goToIntroScreen = () => {
    this.props.navigation.navigate('loopCoach')
  }

  onSkipBtnHandle = (index) => {
    console.log(index)
  }

  doneBtnHandle = () => {
    const {navigation, dispatch, loop} = this.props

    const loopId = get(loop, 'loop[0].loop_id')

    if (loopId) {
      const pathParams = {
        card_type: 'finished',
        loop_id: loopId,
        card_status: 'finished',
      }
      bodyParams = {
        tap: this.state.selectedOptions,
        selectedText: '',
      }
      const params = {
        pathParams,
        bodyParams,
        nextScreen: 'loopCoachReflectionAfter'
      }

      dispatch(updateCards(params, navigation))
    }
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

  tapSelection = (option, selectedOptions) => {
    this.setState({selectedOptions: selectedOptions})
  }

  backPress = () => {
    const {navigation, dashboard} = this.props
    const themeName = get(dashboard, 'newCard[0].theme_name', 'Intro')
    this.fireEvents(`${themeName}.loopIntroScreen.${sequenceNumber}.button.back`)
    navigation.goBack()
  }

  fireEvents = (eventName) => {
    logEvents(eventName)
  }

  closePress = () => {
    const {navigation, dashboard} = this.props
    const themeName = get(dashboard, 'newCard[0].theme_name', 'Intro')
    this.fireEvents(`${themeName}.loopIntroScreen.${sequenceNumber}.button.close`)
    navigation.navigate('dashboard')
  }

  render () {
    const {loop, navigation} = this.props
    if (loop) {
      const loopContent = eval(this.parseJson(loop.loop[0]))
      const reflection_content = eval(
        this.parseJson(loopContent.reflection_content))

      if (reflection_content) {
        return (
          <LoopSwiperComponent
            navigation={navigation}
            name={'reflection'}
            screenName={'reflection'}
            showDots={true}
            tapSelection={this.tapSelection}
            showSkipButton={false}
            onNextBtnClick={this.nextBtnHandle}
            onDoneBtnClick={this.doneBtnHandle}
            onSkipBtnClick={this.onSkipBtnHandle}
            onSlideChange={this.onSlideChangeHandle}
            readMoreClick={this.readMoreHandle}
            pageArray={reflection_content}
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
