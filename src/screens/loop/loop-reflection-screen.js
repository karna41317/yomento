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
import {get} from 'lodash'

const sequenceNumber = 0

@connect(loopSelector)
export default class LoopReflectionScreen extends Component {

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }

  goToIntroScreen = () => {
    this.props.navigation.navigate('loopIntro')
  }

  onSkipBtnHandle = (index) => {}

  doneBtnHandle = () => {
    const {navigation, dashboard} = this.props
    const themeName = get(dashboard, 'newCard[0].theme_name', 'Intro')
    this.fireEvents(`${themeName}.loopReflectionScreen.${sequenceNumber}.button.secondaryButton`)
    navigation.navigate('loopCoach', {})

  }
  nextBtnHandle = (index) => {

  }
  onSlideChangeHandle = (index, total) => {
  }

  fireEvents = (eventName) => {
    /*const themeName = get(dashboard, 'newCard[0].theme_name', 'Intro')
    this.fireEvents(`${themeName}.loopHowScreen.${sequenceNumber}.button.close`)*/
    logEvents(eventName)
  }

  readMoreHandle = () => {
    const {navigation, dashboard} = this.props
    const themeName = get(dashboard, 'newCard[0].theme_name', 'Intro')
    this.fireEvents(`${themeName}.loopReflectionScreen.${sequenceNumber}.button.secondaryButton`)
    navigation.navigate('readMore')
  }

  backPress = () => {
    const {navigation} = this.props
    navigation.goBack()
  }

  closePress = () => {
    const {navigation, dashboard} = this.props
    const themeName = get(dashboard, 'newCard[0].theme_name', 'Intro')
    this.fireEvents(`${themeName}.loopReflectionScreen.${sequenceNumber}.button.close`)
    navigation.navigate('dashboard')
  }
  tapSelection = () => {

  }
  render () {
    const {loop, navigation} = this.props
    if (loop) {
      const loopContent = eval(this.parseJson(loop.loop[0]))
      const how_content = eval(this.parseJson(loopContent.how_content))


      if (how_content) {
        return (
          <LoopSwiperComponent
            navigation={navigation}
            tapSelection = {this.tapSelection}
            screenName={'reflection'}
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

/*
return (
  <GradientWrapper name={'default'}>
    <View style={styles.mainCard}>
      <Header backgroundColor={'transparent'} style={styles.header}>
        <Left>

        </Left>
        <Body>
        <Button transparent
                style={styles.finishedButton}>
          <Text style={styles.finishedText}>Feedback</Text>
        </Button>
        </Body>
        <Right>
          <Button transparent onPress={this.goToSetting}>
            <Icon name='close'
                  style={{fontSize: 35, color: '#419BF9'}}/>
          </Button>
        </Right>
      </Header>
      <View style={styles.wrapper}>
        <Animated.View>
          <Text numberOfLines={3}
                style={styles.title}>{data.title}</Text>
        </Animated.View>
        <Animated.View style={styles.descWrapper}>
          <HTMLView value={htmlContent} stylesheet={htmlStyles}/>
        </Animated.View>
      </View>
      <View style={styles.buttonsWrapper}>
        <View style={styles.why_buttons}>
          <SecondaryButton onPress={()=>this.props.navigation.goBack()}>Not Interested</SecondaryButton>
          <PrimaryButton onPress={this.goToIntroScreen}>Let's go</PrimaryButton>
        </View>
      </View>
    </View>
  </GradientWrapper>
)*/
