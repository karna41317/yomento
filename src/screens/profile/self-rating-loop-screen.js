import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native'
import SwiperComponent from 'src/components/Swiper/swiper'
import { get } from 'lodash'
import { getProfileContent, AddProfileContent } from 'src/actions'
import { profileState } from 'src/selectors'
import { styles, htmlStyles } from './profile.styles'
import { logEvents } from 'src/services/analytics'

@connect(profileState)
export default class selfRatingLoopScreen extends Component {

  componentDidMount () {
    this.props.dispatch(getProfileContent())
  }

/*
  this.fireEvents('profile.idealRating.loopScreen.button.done')
  this.fireEvents('profile.idealRating.loopScreen.button.next')
  this.fireEvents('profile.idealRating.loopScreen.button.readmore')
  this.fireEvents('profile.idealRating.loopScreen.button.back')
  this.fireEvents('profile.idealRating.loopScreen.button.close')
  */

  fireEvents = (eventName) => {
    logEvents(eventName)
  }


  onSkipBtnHandle = (index) => {
    console.log(index)
  }
  doneBtnHandle = () => {
    const {navigation, profileRating, dispatch} = this.props
    const myself = get(profileRating, 'myself')
    const myideal = get(profileRating, 'myideal')
    if (myself.length && myideal.length) {
      dispatch(AddProfileContent(profileRating))
    }
    this.fireEvents('profile.idealRating.loopScreen.button.done')
    navigation.navigate('selfRatingFinish')
  }
  nextBtnHandle = (index) => {
    this.fireEvents('profile.idealRating.loopScreen.button.next')
  }
  onSlideChangeHandle = (index, total) => {
  }
  readMoreHandle = () => {
    const {navigation} = this.props
    this.fireEvents('profile.idealRating.loopScreen.button.readmore')
    navigation.navigate('readMore')
  }

  backPress = () => {
    const {navigation} = this.props
    this.fireEvents('profile.idealRating.loopScreen.button.back')
    navigation.goBack()
  }

  closePress = () => {
    const {navigation} = this.props
    this.fireEvents('profile.idealRating.loopScreen.button.close')
    navigation.navigate('selfRatingIntro')
  }

  render () {

    const {myself, navigation} = this.props
    if (myself) {
      return (
        <SwiperComponent
          navigation={navigation}
          name={'profile'} // need this to disable next buttons
          screenName={'self-rating'}
          showDots={true}
          showSkipButton={false}
          onNextBtnClick={this.nextBtnHandle}
          onDoneBtnClick={this.doneBtnHandle}
          onSkipBtnClick={this.onSkipBtnHandle}
          onSlideChange={this.onSlideChangeHandle}
          readMoreClick={this.readMoreHandle}
          pageArray={myself}
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
}

