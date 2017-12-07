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
import { PrimaryButton, SecondaryButton } from '../../components/buttons/Button'
import { updateCards } from '../../actions/loop-action'
import {get} from 'lodash'

@connect(loopSelector)
export default class LoopScreen extends Component {

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }
  goToIntroScreen = (introduction_content) => {
    this.props.navigation.navigate('loopIntro', introduction_content)
  }

  goToDashboard= () => {
    this.props.navigation.navigate('dashboard')
  }
  notInterested = (currentLoop) => {
    const pathParams = {
      card_type: 'finished',
      loop_id: get(currentLoop, 'loop_id'),
      card_status: 'not_interested'
    }
    const params = {
      pathParams: pathParams
    }


    const {dispatch, navigation} = this.props
    dispatch(updateCards(params, navigation))
  }

  render () {

    const {dashboard} = this.props
    const {state} = this.props.navigation
    const theme_id = state.params ? state.params.theme_id : null
    if (theme_id) {
      const {loop} = this.props
      console.log('print', loop)
      const currentLoop = loop.loop[0]
      //const currentLoop = false
      if (currentLoop) {
        const loopContent = eval(this.parseJson(currentLoop))
        const introduction_content = eval(
          this.parseJson(loopContent.introduction_content))
        const why_content = eval(this.parseJson(loopContent.why_content))
        const data = why_content[0].data[0]
        const htmlContent = `<p>${data.description}</p>`
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
                  <HTMLView value={htmlContent} stylesheet={htmlStyles}/>
                </Animated.View>
              </View>

              <View style={styles.buttonsWrapper}>
                <View style={styles.why_buttons}>
                  <SecondaryButton
                    style={{left: 20}}
                    textStyles={{color: '#0F0F3D'}}
                    onPress={this.notInterested.bind(this,currentLoop)}>Not
                    Interested
                  </SecondaryButton>
                  <PrimaryButton
                    style={{left: 40}}
                    onPress={this.goToIntroScreen.bind(this,
                      introduction_content)}>Let's go</PrimaryButton>
                </View>
              </View>
            </View>
          </GradientWrapper>
        )
      }
    }
    return null
  }
}
