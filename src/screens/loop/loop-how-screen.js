import React, { Component } from 'react'
import { View, Text, Animated, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { loopSelector } from './loopSelector'
import { styles, htmlStyles } from './loop-styles'
import LoopSwiperComponent from 'src/components/Swiper/loop-swiper'
import { get } from 'lodash'
import { updateCards, getLoops } from 'src/actions'
import { logEvents } from 'src/services/analytics'

const sequenceNumber = 0

@connect(loopSelector)
export default class LoopHowScreen extends Component {
  constructor (props) {
    super(props)
    const {navigation: {state}} = props
    const howRoute = get(state, 'params.howRoute')

    this.state = {
      isHowRoute: howRoute ? howRoute : false,
    }
  }

  componentDidMount () {
    //this.props.dispatch(getLoops())
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

  updateCard = (cardType, nextScreen) => {
    const {dispatch, loop, navigation} = this.props
    const loopId = get(loop, 'loop[0].loop_id')

    if (loopId) {
      const pathParams = {
        card_type: cardType,
        loop_id: loopId,
      }
      bodyParams = {}

      const params = {
        pathParams,
        bodyParams,
        nextScreen,
      }
      dispatch(updateCards(params, navigation))
    }
  }

  fireEvents = (eventName) => {
    //this.fireEvents(`${themeName}.loopHowScreen.${sequenceNumber}.button.close`)
    logEvents(eventName)
  }

  doneBtnHandle = () => {
    const {dashboard} = this.props
    const themeName = get(dashboard, 'newCard[0].theme_name', 'Intro')
    this.fireEvents(`${themeName}.loopHowScreen.${sequenceNumber}.button.done`)
    this.updateCard('reflection', 'loopCoachReflectionIntro')
  }

  nextBtnHandle = (index) => {
    console.log(index)
  }

  onSlideChangeHandle = (index, total) => {
    console.log(index, total)
  }

  readMoreHandle = () => {
    const {dashboard} = this.props
    const themeName = get(dashboard, 'newCard[0].theme_name', 'Intro')
    this.fireEvents(`${themeName}.loopHowScreen.${sequenceNumber}.button.reminder`)
    this.updateCard('reminder', 'loopReminder')
  }

  backPress = () => {
    const {navigation, dashboard} = this.props
    const themeName = get(dashboard, 'newCard[0].theme_name', 'Intro')
    this.fireEvents(`${themeName}.loopHowScreen.${sequenceNumber}.button.back`)
    navigation.goBack()
  }

  closePress = () => {
    const {navigation, dashboard} = this.props
    const themeName = get(dashboard, 'newCard[0].theme_name', 'Intro')
    this.fireEvents(`${themeName}.loopHowScreen.${sequenceNumber}.button.close`)
    navigation.navigate('loopIntro')
  }

  tapSelection = () => {}

  render () {
    const {loop, navigation} = this.props
    console.log('printingnavigation', this.state)

    if (loop.loop[0]) {
      const loopContent = eval(this.parseJson(loop.loop[0]))
      const how_content = eval(this.parseJson(loopContent.how_content))
      const {dashboard} = this.props
      const headerName = get(dashboard, 'newCard[0].theme_name', 'Intro')

      if (how_content) {
        return (
          <LoopSwiperComponent
            navigation={navigation}
            tapSelection={this.tapSelection}
            headerName={headerName}
            isHowRoute={this.state.isHowRoute}
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
      return <ActivityIndicator/>
    }
    return null
  }
}
