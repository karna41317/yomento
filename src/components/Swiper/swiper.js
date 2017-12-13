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

import { Slider } from 'src/components/slider'
import { get } from 'lodash'
import HTMLView from 'react-native-htmlview'
import { RatingComponent } from '../rating/rating'

import { saveProfileRating } from 'src/actions'
import { profileState } from '../../selectors/common'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'src/components/native-base'

const {width, height} = Dimensions.get('window')
@connect(profileState)
export default class SwiperComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0,
      skipFadeOpacity: new Animated.Value(1),
      doneFadeOpacity: new Animated.Value(0),
      nextOpacity: new Animated.Value(1),
      parallax: new Animated.Value(0),
    }
  }

  componentDidMount = () => {
    this.setState({
      disable: this.props.name === 'profile' ? true : false,
    })
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
    if (this.props.name === 'profile') {
      this.setState({disable: true, value: 0})
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
    const buttonText = get(pageArray[index], 'button_text', 'next')
    const readMoreText = get(pageArray[index], 'read_more', null)
    return (
      <View style={styles.paginationContainer}>
        {this.props.showSkipButton ? <SkipButton
          {...this.props}
          {...this.state}
          isSkipBtnShow={isSkipBtnShow}
          styles={styles}
          onSkipBtnClick={() => this.props.onSkipBtnClick(index)}/> : <View style={styles.btnContainer}/>
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
          onDoneBtnClick={this.props.onDoneBtnClick}/> : <View style={styles.btnContainer}/>
        }
      </View>
    )
  }

  valueChanged = (value, page) => {
    const profileData = {
      ...page,
      result: value,
    }

    this.props.dispatch(saveProfileRating(profileData))
    if (value > 0) {
      this.setState({disable: false, value: value})
    } else {
      this.setState({disable: true, value: value})
    }

  }

  getRatingComponent = (page) => {

    if (page.content_type === 'rate') {
      return (
        <View>
          <View style={{marginVertical: 30}}>
            <Text style={styles.ratingResult}>
              {this.state.value}
            </Text>
          </View>
          <Slider
            page={page}
            minimumValue={0}
            maximumValue={10}
            step={1}
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
            minimumTrackTintColor='#419BF9'
            maximumTrackTintColor={'#b3b3b3'}
            thumbTintColor={'#bbbbbb'}
            thumbTouchSize={{width: 40, height: 40}}
            animationType={'spring'}
            value={this.state.value}
            onSlidingComplete={this.valueChanged}
          />
          <View style={styles.ratingRange}>
            <Text style={styles.rangeText}>
              1
            </Text>
            <Text style={styles.rangeText}>
              10
            </Text>
          </View>
        </View>


      )
    }
  }

  shouldHaveHeader = (type) => {
    return type === 'rate'
  }

  backArrowPress = (index) => {
    const {navigation, screenName} = this.props
    if (index === 0) {
      switch (screenName) {
        case 'self-rating':
          navigation.navigate('selfRatingIntro')
          break
        case 'ideal-rating':
          navigation.navigate('idealRatingIntro')
          break
        default:
          break
      }
    } else {
      if (this.refs && this.refs.swiper.scrollBy) {
        this.refs.swiper.scrollBy(-1)
      } else {
        navigation.goBack()
      }
    }
  }

  getSwiperHeader = (index, total, content_type) => {
    if (this.shouldHaveHeader(content_type)) {
      return (
        <View backgroundColor={'transparent'} style={styles.headerStyle}>
          <Button transparent onPress={this.backArrowPress.bind(this, index)}>
            <Icon name='arrow-back' style={{fontSize: 30, color: '#419BF9'}}/>
          </Button>
          <View>
            <Text style={styles.headerTextStyle}>
              {this.props.screenName
                ? upperCase(this.props.screenName)
                : upperCase(this.props.name)}
            </Text>
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
  renderBasicSlidePage = (index, page, total) => {
    const {
      title,
      description,
      content_type,
    } = page
    const {wrapperStyle, titleStyle, descriptionStyle, descWrapperStyle} = this.props
    const htmlContent = `<div>${description}</div>`

    const pageView = (
      <View style={wrapperStyle}>
        <Animated.View>
          <Text numberOfLines={3} style={titleStyle}>{title}</Text>
        </Animated.View>
        <Animated.View style={descWrapperStyle}>
          <HTMLView value={htmlContent} stylesheet={descriptionStyle}/>
        </Animated.View>
        {this.getRatingComponent(page)}
      </View>
    )

    return (
      <GradientWrapper key={index} name={content_type}>
        {this.getSwiperHeader(index, total, content_type)}
        {pageView}
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
          ref={'swiper'}
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

SwiperComponent.propTypes = {
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

SwiperComponent.defaultProps = {
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
