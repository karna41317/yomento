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
    console.log('printing', this.props)
    const loopId = get(loop, 'loop[0].loop_id')

    if(loopId) {
      const pathParams = {
        card_type: 'reflection',
        loop_id: loopId,
      }
      bodyParams = {
        tap: this.state.selectedOptions,
        selectedText: '',
      }
      const params = {
        pathParams,
        bodyParams
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
    const {navigation} = this.props
    navigation.goBack()
  }

  closePress = () => {
    const {navigation} = this.props
    navigation.navigate('loopIntro')
  }

  render () {
    const {loop} = this.props
    if (loop) {
      const loopContent = eval(this.parseJson(loop.loop[0]))
      const reflection_content = eval(
        this.parseJson(loopContent.reflection_content))
      if (reflection_content) {
        return (
          <LoopSwiperComponent
            name={'reflection'}
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
