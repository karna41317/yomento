/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native'
import { Spinner} from 'src/components'
import SwiperComponent from 'src/components/Swiper/swiper'
import demoData from './demo-data'
import { getProfileContent } from 'src/actions'
import { profileState } from 'src/selectors'
import { styles, htmlStyles } from './profile.styles'
import { logEvents } from 'src/services/analytics'


@connect(profileState)
export default class idealRatingLoopScreen extends Component {

  componentDidMount () {
    this.props.dispatch(getProfileContent())
  }

  onSkipBtnHandle = (index) => {
    console.log(index)
  }
  doneBtnHandle = () => {
    const {navigation} = this.props
    this.fireEvents('profile.idealRating.loopScreen.button.done')
    navigation.navigate('idealRatingFinish')
  }
  nextBtnHandle = (index) => {
    this.fireEvents('profile.idealRating.loopScreen.button.next')
    console.log(index)
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total)
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
    this.fireEvents('profile.idealRating.loopScreen.button.close')
    const {navigation} = this.props
    navigation.navigate('idealRatingIntro')
  }

  fireEvents = (eventName) => {
    logEvents(eventName)
  }


  render () {

    const {myideal, navigation} = this.props
    if (myideal) {
      return (
        <SwiperComponent
          navigation={navigation}
          name={'profile'} // need this to disable next buttons
          screenName={'ideal-rating'}
          showDots={true}
          showSkipButton={false}
          onNextBtnClick={this.nextBtnHandle}
          onDoneBtnClick={this.doneBtnHandle}
          onSkipBtnClick={this.onSkipBtnHandle}
          onSlideChange={this.onSlideChangeHandle}
          readMoreClick={this.readMoreHandle}
          pageArray={myideal}
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
}
