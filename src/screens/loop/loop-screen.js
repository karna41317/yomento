/**
 * Created by Karan on 2017-11-20.
 */

import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'
import { connect } from 'react-redux'
import { loopSelector } from './loopSelector'
import { styles, htmlStyles } from './loop-styles'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { Header, Left, Right, Body, Icon, Button } from 'src/components/native-base'
import HTMLView from 'react-native-htmlview'
import HTML from 'react-native-render-html'
import { PrimaryButton, SecondaryButton } from '../../components/buttons/Button'
import { updateCards } from '../../actions/loop-action'
import { get } from 'lodash'

@connect(loopSelector)
export default class LoopScreen extends Component {

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }
  goToIntroScreen = () => {
    this.props.navigation.navigate('loopIntro')
  }

  goToDashboard = () => {
    this.props.navigation.navigate('dashboard')
  }
  notInterested = (currentLoop) => {
    const loopId = get(currentLoop, 'loop_id')
    if (loopId) {
      const pathParams = {
        card_type: 'finished',
        loop_id: get(currentLoop, 'loop_id'),
        card_status: 'not_interested',
      }
      const bodyParams = {}
      const params = {
        pathParams,
        bodyParams,
        nextScreen: 'dashboard',
      }
      const {dispatch, navigation} = this.props
      dispatch(updateCards(params, navigation))
    }
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
        nextScreen: 'loopCoachReflectionAfter',
      }
      dispatch(updateCards(params, navigation))
    }
  }

  render () {

    const {loop, navigation, dashboard} = this.props
    const currentLoop = get(loop, 'loop[0]')

    if (!loop.fetching && currentLoop) {
      const currentLoop = get(loop, 'loop[0]')
      const loopStyles = get(loop, 'loopStyles[0]', {})
      const loopContent = eval(this.parseJson(loop.loop[0]))
      const whyContent = eval(this.parseJson(loopContent.why_content))
      const headerName = get(dashboard, 'newCard[0].theme_name', 'Intro')

      if (whyContent) {

        const data = whyContent[0].data[0]
        const htmlContent = `<p>${data.description}</p>`
        return (
          <GradientWrapper name={'default'}>
            <View style={styles.mainCard}>
              <Header backgroundColor={'transparent'} style={styles.header}>
                <Left></Left>
                <Body>
                <Button transparent
                        style={styles.finishedButton}>
                  <Text style={styles.finishedText}>{headerName}</Text>
                </Button>
                </Body>
                <Right>
                  <Button transparent onPress={this.goToDashboard}>
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
                  {/*<Text>{htmlContent} </Text>*/}
                  <HTML html={htmlContent==="" ? "<p></p>" : htmlContent} classesStyles={loopStyles}/>
                </Animated.View>
              </View>

              <View style={styles.buttonsWrapper}>
                <View style={styles.why_buttons}>
                  <SecondaryButton
                    style={{left: 20, minWidth: 150}}
                    textStyles={{color: '#0F0F3D'}}
                    onPress={this.notInterested.bind(this, currentLoop)}>
                    Not Interested
                  </SecondaryButton>
                  <PrimaryButton
                    style={{left: 40, minWidth: 150}}
                    onPress={this.goToIntroScreen}>Let's go</PrimaryButton>
                </View>
              </View>
            </View>
          </GradientWrapper>
        )
      }
      return null
    }
    return null
  }
}
