/**
 * Created by Karan on 2017-11-20.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StatusBar,
  Text,
  View,
  Animated,
  Dimensions,
  Platform,
} from 'react-native'
import { connect } from 'react-redux'
import Swiper from './components/swiper'
import DoneButton from './components/DoneButton'
import SkipButton from './components/SkipButton'
import RenderDots from './components/Dots'
import GradientWrapper from '../partials/gradientWrapper'
import { styles, htmlStyles } from './swiper-styles'
import { upperCase } from 'lodash'

import { get } from 'lodash'
import HTMLView from 'react-native-htmlview'
import { RatingComponent } from '../rating/rating'
import { saveProfileRating } from 'src/actions'
import { profileSelector } from '../../selectors/common'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import data from '../../screens/profile/demo-data'
import MultipleChoice from '../multi-select/index'

const {width, height} = Dimensions.get('window')
@connect(profileSelector)
export default class LoopSwiperComponent extends Component {

  constructor (props) {
    super(props)
    this.state = {
      skipFadeOpacity: new Animated.Value(1),
      doneFadeOpacity: new Animated.Value(0),
      nextOpacity: new Animated.Value(1),
      parallax: new Animated.Value(0),
    }
  }

  onNextBtnClick = (context) => {
    if (context.state.isScrolling || context.state.total < 2) return
    const state = context.state
    const diff = (context.props.loop ? 1 : 0) + 1 + context.state.index
    let x = 0
    if (state.dir === 'x') x = diff * state.width
    if (Platform.OS === 'ios') {
      context.scrollView.scrollTo({y: 0, x})
    } else {
      context.scrollView.setPage(diff)
      context.onScrollEnd({
        nativeEvent: {
          position: diff,
        },
      })
    }
    this.props.onNextBtnClick(context.state.index)
  }

  setDoneBtnOpacity = (value) => {
    Animated.timing(
      this.state.doneFadeOpacity,
      {toValue: value},
    ).start()
  }

  setSkipBtnOpacity = (value) => {
    Animated.timing(
      this.state.skipFadeOpacity,
      {toValue: value},
    ).start()
  }

  setNextOpacity = (value) => {
    Animated.timing(
      this.state.nextOpacity,
      {toValue: value},
    ).start()
  }
  getTransform = (index, offset, level) => {
    const isFirstPage = index === 0
    const statRange = isFirstPage ? 0 : width * (index - 1)
    const endRange = isFirstPage ? width : width * index
    const startOpacity = isFirstPage ? 1 : 0
    const endOpacity = isFirstPage ? 1 : 1
    const leftPosition = isFirstPage ? 0 : width / 3
    const rightPosition = isFirstPage ? -width / 3 : 0
    const transform = [
      {
        transform: [
          {
            translateX: this.state.parallax.interpolate({
              inputRange: [statRange, endRange],
              outputRange: [
                isFirstPage ? leftPosition : leftPosition - (offset * level),
                isFirstPage ? rightPosition + (offset * level) : rightPosition,
              ],
            }),
          }],
      }, {
        opacity: this.state.parallax.interpolate({
          inputRange: [statRange, endRange],
          outputRange: [startOpacity, endOpacity],
        }),
      }]
    return {
      transform,
    }
  }

  renderPagination = (index, total, context) => {
    let isDoneBtnShow
    let isSkipBtnShow
    if (index === total - 1) {
      this.setDoneBtnOpacity(1)
      this.setSkipBtnOpacity(0)
      this.setNextOpacity(0)
      isDoneBtnShow = true
      isSkipBtnShow = false
    } else {
      this.setDoneBtnOpacity(0)
      this.setSkipBtnOpacity(1)
      this.setNextOpacity(1)
      isDoneBtnShow = false
      isSkipBtnShow = true
    }
    const {pageArray} = this.props
    console.log('printing pageArray', pageArray)
    const buttonText = get(pageArray[index].buttons[0], 'text')
    //const buttonText = get(pageArray[index], 'button_text', 'next')
    const readMoreText = get(pageArray[index], 'read_more', null)

    return (
      <View style={styles.paginationContainer}>
        {this.props.showSkipButton ? <SkipButton
            {...this.props}
            {...this.state}
            isSkipBtnShow={isSkipBtnShow}
            styles={styles}
            onSkipBtnClick={() => this.props.onSkipBtnClick(index)}/> :
          <View style={styles.btnContainer}/>
        }

        {this.props.showDoneButton ? <DoneButton
            {...this.props}
            {...this.state}
            nextBtnLabel={buttonText}
            doneBtnLabel={buttonText}
            isDoneBtnShow={isDoneBtnShow}
            readMoreLable={readMoreText}
            styles={styles}
            onNextBtnClick={this.onNextBtnClick.bind(this, context)}
            onDoneBtnClick={this.props.onDoneBtnClick}/> :
          <View style={styles.btnContainer}/>
        }
      </View>
    )
  }
  valueChanged = (page, value) => {
    const profileData = {
      ...page,
      result: value,
    }
    this.props.dispatch(saveProfileRating(profileData))
  }

  getRatingComponent = (page) => {
    if (page.content_type === 'rate') {
      return (
        <RatingComponent page={page} valueChanged={this.valueChanged}/>
      )
    }
  }

  shouldHaveHeader = (type) => {
    return type === 'rate' || 'quote' || 'tap'
  }

  getSwiperHeader = (index, total, content_type) => {
    if (this.shouldHaveHeader(content_type)) {
      return (
        <View backgroundColor={'transparent'} style={styles.headerStyle}>
          <Button transparent onPress={this.props.backPress}>
            <Icon name='arrow-back' style={{fontSize: 30, color: '#419BF9'}}/>
          </Button>
          <View>
            <Text style={styles.headerTextStyle}>{this.props.name ? upperCase(
              this.props.name) : null}</Text>
            <View style={styles.dotContainer}>
              {this.props.showDots && RenderDots(index, total, {
                ...this.props, styles: styles,
              })}
            </View>
          </View>
          <Button transparent onPress={this.props.closePress}>
            <Icon name='close' style={{fontSize: 30, color: '#419BF9'}}/>
          </Button>
        </View>
      )
    }
    return null
  }

  renderIntroPages = (dataObject) => {
    const {content_type} = dataObject
    if (content_type === 'quote') {
      const {Author, content_type, description, title} = dataObject
      return (
        <View style={{position: 'absolute', top: 150, left: 20, right: 20}}>
          <Text style={styles.quoteText}>
            {title}
          </Text>
          <Text style={styles.authorText}>{Author}</Text>
        </View>
      )
    } else if (content_type === 'tap') {
      const {title} = dataObject
      console.log('printing', dataObject)
      let options = dataObject.options[0].data
      if(options) {
        return (
          <View style={{position: 'absolute', top: 100, left: 20, right: 20}}>
            <Text style={styles.tapText}>
              {title}
            </Text>
            <Text style={styles.authorText}>select Option</Text>
            <MultipleChoice
              options={options}
              selectedOptions={[]}
              maxSelectedOptions={2}
              onSelection={(option)=>{}}
            />
          </View>
        )
      }
      return null
    }
  }

  renderBasicSlidePage = (index, page, total) => {
    const {data} = page
    const dataObject = data[0]
    const {content_type} = dataObject
    console.log('printing', dataObject)

    return (
      <GradientWrapper key={index} name={content_type}>
        <View style={{flex:1}}>
          {this.getSwiperHeader(index, total, content_type)}
          {this.renderIntroPages(dataObject)}
        </View>
      </GradientWrapper>
    )
  }

  renderChild = (children, pageIndex, index) => {
    const level = children.props.level || 0
    const {transform} = this.getTransform(pageIndex, 10, level)
    const root = children.props.children
    let nodes = children
    if (Array.isArray(root)) {
      nodes = root.map(
        (node, i) => this.renderChild(node, pageIndex, `${index}_${i}`))
    }
    let animatedChild = children
    if (level !== 0) {
      animatedChild = (
        <Animated.View key={index} style={[children.props.style, transform]}>
          {nodes}
        </Animated.View>
      )
    } else {
      animatedChild = (
        <View key={index} style={children.props.style}>
          {nodes}
        </View>
      )
    }
    return animatedChild
  }

  shadeStatusBarColor (color, percent) {
    const first = parseInt(color.slice(1), 16)
    const black = first & 0x0000FF
    const green = first >> 8 & 0x00FF
    const percentage = percent < 0 ? percent * -1 : percent
    const red = first >> 16
    const theme = percent < 0 ? 0 : 255
    const finalColor = (0x1000000 +
      (Math.round((theme - red) * percentage) + red) * 0x10000 +
      (Math.round((theme - green) * percentage) + green) * 0x100 +
      (Math.round((theme - black) * percentage) + black)).toString(16).slice(1)

    return `#${finalColor}`
  }

  isToTintStatusBar () {
    return this.props.pageArray && this.props.pageArray.length > 0 &&
      Platform.OS === 'android'
  }

  render () {
    const childrens = this.props.children
    const {pageArray} = this.props
    let pages = []
    let androidPages = null
    if (pageArray.length > 0) {
      pages = pageArray.map(
        (page, i) => this.renderBasicSlidePage(i, page, pageArray.length))
    } else {
      if (Platform.OS === 'ios') {
        pages = childrens.map(
          (children, i) => this.renderChild(children, i, i))
      } else {
        androidPages = childrens.map((children, i) => {
          const {transform} = this.getTransform(i, -width / 3 * 2, 1)
          pages.push(<View key={i}/>)
          return (
            <Animated.View key={i} style={[
              {
                position: 'absolute',
                height: height,
                width: width,
                top: 0,
              }, {
                ...transform[0],
              }]}
            >
              {this.renderChild(children, i, i)}
            </Animated.View>
          )
        })
      }
    }

    if (this.isToTintStatusBar()) {
      StatusBar.setBackgroundColor(
        this.shadeStatusBarColor(this.props.pageArray[0].backgroundColor, -0.3),
        false)
    }

    return (
      <View style={{flex: 1}}>
        {androidPages}
        <Swiper
          scrollEnabled={false}
          scrollEventThrottle={50}
          loop={false}
          index={this.props.defaultIndex}
          renderPagination={this.renderPagination}
          onMomentumScrollEnd={(e, state) => {
            if (this.isToTintStatusBar()) {
              StatusBar.setBackgroundColor(
                this.shadeStatusBarColor(
                  this.props.pageArray[state.index].backgroundColor, -0.3),
                false)
            }
            this.props.onSlideChange(state.index, state.total)
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.yValue}}}],
          )}
        >
          {pages}
        </Swiper>
      </View>
    )
  }
}

LoopSwiperComponent.propTypes = {
  dotColor: PropTypes.string,
  activeDotColor: PropTypes.string,
  rightTextColor: PropTypes.string,
  leftTextColor: PropTypes.string,
  onSlideChange: PropTypes.func,
  onSkipBtnClick: PropTypes.func,
  onDoneBtnClick: PropTypes.func,
  onNextBtnClick: PropTypes.func,
  pageArray: PropTypes.array,
  doneBtnLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  skipBtnLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  nextBtnLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  customStyles: PropTypes.object,
  defaultIndex: PropTypes.number,
  showSkipButton: PropTypes.bool,
  showDoneButton: PropTypes.bool,
  showDots: PropTypes.bool,
}

LoopSwiperComponent.defaultProps = {
  dotColor: '#B3B2BD',
  activeDotColor: '#282553',
  rightTextColor: '#fff',
  leftTextColor: '#fff',
  pageArray: [],
  onSlideChange: () => {},
  onSkipBtnClick: () => {},
  onDoneBtnClick: () => {},
  onNextBtnClick: () => {},
  doneBtnLabel: 'Done',
  skipBtnLabel: 'Skip',
  nextBtnLabel: '›',
  defaultIndex: 0,
  showSkipButton: true,
  showDoneButton: true,
  showDots: true,
}
