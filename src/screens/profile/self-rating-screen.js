/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native'
import Swiper from 'src/components/Swiper/swiper'
import demoData from './demo-data'
import { getProfileContent } from 'src/actions'
import { profileSelector } from 'src/selectors'
import { styles, htmlStyles } from './profile.styles'

@connect(profileSelector)
export default class selfRatingScreen extends Component {

  componentDidMount () {
    this.props.dispatch(getProfileContent())
  }

  onSkipBtnHandle = (index) => {
    console.log(index)
  }
  doneBtnHandle = () => {
    const {navigation} = this.props
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

  render () {

    const {myself} = this.props
    if (myself) {
      return (
        <Swiper
          showDots={false}
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
        />
      )
    }
    return <ActivityIndicator/>
  }
}

