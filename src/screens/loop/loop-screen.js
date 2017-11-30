/**
 * Created by Karan on 2017-11-20.
 */

import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'
import { connect } from 'react-redux'
import { loopSelector } from './loopSelector'
import { styles, htmlStyles } from './loop-styles'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { Header, Left, Right, Body, Icon, Button } from 'native-base'
import HTMLView from 'react-native-htmlview'
import { PrimaryButton, SecondaryButton } from '../../components/buttons/Button'

@connect(loopSelector)
export default class LoopScreen extends Component {

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }
  goToIntroScreen = (introduction_content) => {
    this.props.navigation.navigate('loopIntro', introduction_content)
  }

  render () {

    const {state} = this.props.navigation
    const theme_id = state.params ? state.params.theme_id : null

    if (theme_id) {
      const {loop} = this.props

      if (loop.loop[0]) {
        const loopContent = eval(this.parseJson(loop.loop[0]))
        const coach_action_done_content = eval(
          this.parseJson(loopContent.coach_action_done_content))
        const coach_end_content = eval(
          this.parseJson(loopContent.coach_end_content))
        const description = this.parseJson(loopContent.description)
        const how_content = eval(this.parseJson(loopContent.how_content))
        const introduction_content = eval(
          this.parseJson(loopContent.introduction_content))
        const loop_id = this.parseJson(loopContent.loop_id)
        const reflection_content = this.parseJson(
          loopContent.reflection_content)
        const reminder_action_content = eval(
          this.parseJson(loopContent.reminder_action_content))
        const theme_id = this.parseJson(loopContent.theme_id)
        const title = this.parseJson(loopContent.title)
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
                  <SecondaryButton
                    style={{left: 20}}
                    textStyles={{color: '#0F0F3D'}}
                    onPress={()=>this.props.navigation.goBack()}>Not Interested</SecondaryButton>
                  <PrimaryButton
                    style={{left: 40}}
                    onPress={this.goToIntroScreen.bind(this,introduction_content)}>Let's go</PrimaryButton>
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
