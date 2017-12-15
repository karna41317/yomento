import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native'
import SwiperComponent from 'src/components/Swiper/swiper'
import { get } from 'lodash'
import { getProfileContent, AddProfileContent } from 'src/actions'
import { profileState } from 'src/selectors'
import { styles, htmlStyles } from './profile.styles'

@connect(profileState)
export default class selfRatingLoopScreen extends Component {

  componentDidMount () {
    this.props.dispatch(getProfileContent())
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
    navigation.navigate('selfRatingFinish')
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

  backPress = () => {
    const {navigation} = this.props
    navigation.goBack()
  }

  closePress = () => {
    const {navigation} = this.props
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

