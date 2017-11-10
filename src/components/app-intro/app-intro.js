import React, { Component, PropTypes } from 'react'
import {
  StatusBar,
  Text,
  View,
  Animated,
  Dimensions,
  Platform,
} from 'react-native'
import { Swiper } from 'src/components/swiper'
import DoneButton from './components/DoneButton'
import SkipButton from './components/SkipButton'
import RenderDots from './components/Dots'
import GradientWrapper from '../partials/gradientWrapper'
import { styles } from './app-intro-styles'
import {get} from 'lodash'
import HTMLView from 'react-native-htmlview'

const {width, height} = Dimensions.get('window')

export default class AppIntro extends Component {
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
    console.log('printing', pageArray)
    const desc = get(pageArray[index], 'description')
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
        {this.props.showDots && RenderDots(index, total, {
          ...this.props,
          styles: styles,
        })}
        {this.props.showDoneButton ? <DoneButton
            {...this.props}
            {...this.state}
            isDoneBtnShow={isDoneBtnShow}
            styles={styles}
            onNextBtnClick={this.onNextBtnClick.bind(this, context)}
            onDoneBtnClick={this.props.onDoneBtnClick}/> :
          <View style={styles.btnContainer}/>
        }
      </View>
    )
  }

  renderBasicSlidePage = (index, {
    title,
    description,
    level,
  }) => {
    const pageView = (
      <GradientWrapper key={index}>
        <View style={styles.wrapper}>
          <Animated.View>
            <Text style={styles.title}>{title}</Text>
          </Animated.View>
          <Animated.View>
            <HTMLView
              value={description}
              stylesheet={styles}
            />
          </Animated.View>
        </View>
      </GradientWrapper>
    )
    return pageView
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
      pages = pageArray.map((page, i) => this.renderBasicSlidePage(i, page))
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
          scrollEnabled={true}
          scrollEventThrottle={50}
          loop={true}
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

AppIntro.propTypes = {
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

AppIntro.defaultProps = {
  dotColor: 'rgba(255,255,255,.3)',
  activeDotColor: '#fff',
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
