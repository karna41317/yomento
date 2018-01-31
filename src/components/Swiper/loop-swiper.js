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
  Image,
  Dimensions,
  Platform,
} from 'react-native'
import { connect } from 'react-redux'
import Swiper from './components/swiper'
import DoneButton from './components/DoneButton'
import SkipButton from './components/SkipButton'
import RenderDots from './components/Dots'
import GradientWrapper from '../partials/gradientWrapper'
import { styles } from './swiper-styles'
import { upperCase, toLower } from 'lodash'
import { get } from 'lodash'
import { profileSelector } from 'src/screens/profile/profile.selector'
import { Container, Header, Left, Body, Right, Button, Icon, Title , Input} from 'src/components/native-base'
import MultipleChoice from '../multi-select/index'
import HTML from 'react-native-render-html'
import { Slider } from 'src/components/slider'
import {updateLoopDetails} from 'src/actions'
import { boldTextMixin } from '../../styles/mixins'
import {contentStyles} from 'src/loop-styles'

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
      value: 0,
      text: '',
      selectedOptions: [],
    }
  }

  componentDidMount = () => {
    this.setState({
      disable: this.props.name === 'reflection' ? true : false,
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

    /*Need this if two rating screens in reflection*/

    /*
      if (this.props.name === 'reflection') {
        this.setState({disable: true, value: 0})
      }
    */
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
    let firtButtonAction, secondButtonAction
    const firstButton = get(pageArray[index].buttons[0], 'text')

    if(get(pageArray[index].buttons[0], 'action') === 'reminder') {
      firtButtonAction = this.props.readMoreClick
      secondButtonAction = this.props.onDoneBtnClick
    } else if(get(pageArray[index].buttons[1], 'action') === 'reminder'){
      firtButtonAction = this.props.onDoneBtnClick
      secondButtonAction = this.props.readMoreClick
    } else {
      firtButtonAction = this.props.onDoneBtnClick
    }

    const secondButton = get(pageArray[index].buttons[1], 'text')

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
            nextBtnLabel={firstButton}
            doneBtnLabel={firstButton}
            isDoneBtnShow={isDoneBtnShow}
            readMoreLable={secondButton}
            styles={styles}
            onNextBtnClick={this.onNextBtnClick.bind(this, context)}
            readMoreClick={secondButtonAction}
            onDoneBtnClick={firtButtonAction}/> :
          <View style={styles.btnContainer}/>
        }
      </View>
    )
  }
  valueChanged = (value, page) => {

    const profileData = {
      ...page,
      result: value,
    }
    if (value > 0) {
      this.setState({
        disable: false,
        value: value,
      })
    } else {
      this.setState({disable: true, value: value})
    }

    //this.props.dispatch(saveProfileRating(profileData))
  }

  tapSelection = (option, options) => {


    if (options.length > 0) {
      this.setState({
        disable: false,
        selectedOptions: options,

      })
    }
    this.props.tapSelection.bind(option, options)
  }

  getRatingComponent = (dataObject, seq_order, page) => {

    const {title, description} = dataObject
    const htmlContent = `${description}`
    const updatedTitle = this.updateContent(title)

    return (
      <View style={{
        position: 'absolute',
        top: 100,
        left: 30,
        right: 30,
      }}>
        <Text style={[
          styles.tapText,
          {
            ...boldTextMixin(18),
            textAlign: 'left',
            marginVertical: 20,
          }]}>
          {updatedTitle}
        </Text>
        <View>
          <View style={{marginVertical: 30}}>
            <Text style={styles.ratingResult}>
              {this.state.value}
            </Text>
          </View>
          <Slider
            page={dataObject}
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
      </View>
    )
  }

  shouldHaveHeader = (type) => {
    return type === 'rate' || 'quote' || 'tap' || 'general'
  }
  getHeaderName = () => {
    const {loop} = this.props
    const headerName = get(loop, 'loop[0].theme_name')
    return headerName ? upperCase(headerName) : upperCase(this.props.screenName)
  }

  backArrowPress = (index) => {
    const {navigation, dispatch, screenName, loop} = this.props
    const loopId = get(loop, 'loop[0].loop_id')

    if(index === 0) {
      switch (screenName) {
        case 'Introduction':
          navigation.navigate('loop')
          break
        case 'how':
          navigation.navigate('loopIntro')
          break
        case 'reflection':
          navigation.navigate('loopCoachReflectionIntro', loopId)
          break
        default:
          break
      }
    } else {
      if(this.refs && this.refs.swiper.scrollBy) {
        this.refs.swiper.scrollBy(-1)
      } else {
        navigation.goBack()
      }
    }
  }
  goToDashboard = () => {
    this.props.navigation.navigate('dashboard')
  }



  getHeader = () => {
    return (
      <Header backgroundColor={'transparent'} style={customStyles.header}>
        <Left></Left>
        <Body>
        <Text style={customStyles.finishedText}>PROFILE</Text>
        </Body>
        <Right>
          <Button transparent onPress={this.closePress}>
            <Icon
              name='close'
              style={{fontSize: 40, color: '#419BF9'}}/>
          </Button>
        </Right>
      </Header>
    )
  }



  getSwiperHeader = (index, total, content_type) => {

    if (this.shouldHaveHeader(content_type)) {
      return (
        <Header  style={styles.headerStyle} backgroundColor={'transparent'}>
          <Left>{ index ? (
            <Button style={{maxWidth: 100}} transparent onPress={this.backArrowPress.bind(this,index)}>
              <Icon name='arrow-back' style={{fontSize: 30, color: '#419BF9'}}/>
            </Button>
          ): null
          }</Left>
          <Body>
            <Text style={styles.headerTextStyle}>{this.getHeaderName()}</Text>
            <View style={styles.dotContainer}>
              {this.props.showDots && RenderDots(index, total, {
                ...this.props, styles: styles,
              })}
            </View>
          </Body>
          <Right>
          <Button transparent onPress={this.goToDashboard}>
            <Icon name='close' style={{fontSize: 40, color: '#419BF9'}}/>
          </Button>
          </Right>
        </Header>
      )
    }
    return null
  }

  getTapComponent = (dataObject, seq_order, page) => {
    let {title} = dataObject

    const updatedTitle = this.updateContent(title)

    let options = dataObject.options[0].data
    let max_select = dataObject.options[0].max_select

    const optionTitle = max_select === 1 ? 'Select one option' : 'Select any relevant'

    if (options) {
      return (
        <View style={{position: 'absolute', top: 100, left: 20, right: 20}}>
          <Text style={styles.tapText}>
            {updatedTitle}
          </Text>
          <Text style={styles.authorText}>{optionTitle}</Text>
          <MultipleChoice
            options={options}
            selectedOptions={this.state.selectedOptions}
            maxSelectedOptions={max_select}
            onSelection={this.tapSelection}
          />
        </View>
      )
    }
    return null
  }

  getQuoteComponent = (dataObject, seq_order, page) => {
    const {Author, content_type, description, title} = dataObject
    const updatedTitle = this.updateContent(title)
    return (
      <View style={{position: 'absolute', top: 150, left: 20, right: 20}}>
        <Text style={styles.quoteText}>
          "{updatedTitle}"
        </Text>
        <Text style={styles.authorText}>{Author}</Text>
      </View>
    )
  }

  updateContent = (text) => {
    const {auth, loop} = this.props
    const userName = get(auth, 'userData.user.first_name')
    const personName = get(loop, 'loopData.personName')
    let originalText = text

    if(userName) {
      originalText = originalText.replace('<first_name>', userName)
    }
    if(personName) {
      originalText = originalText.replace('<name_of_colleague>', personName)
    }

    return originalText
  }


  getGeneralComponent = (dataObject, seq_order, page) => {
    const {title, description} = dataObject
    const {loop, auth} = this.props
    const loopStyles = get(loop, 'loopStyles[0]', {})
    const personName = get(loop, 'loopData.personName')

    const updatedTitle = this.updateContent(title)
    const updatedDescription = this.updateContent(description)

    const htmlContent = `${updatedDescription}`



    const wrapperStyle = {
      position: 'absolute',
      top: seq_order === 1 ? 200 : 100,
      left: 20,
      right: 20,
    }
    const imageStyle = {
      width: seq_order === 1 ? 72 : 50,
      height: seq_order === 1 ? 72 : 50,
      marginBottom: seq_order === 1 ? 0 : 30,
      alignSelf: 'center',
    }
    const textStyle = {
      fontSize: seq_order === 1 ? 24 : 20,
      marginHorizontal: 30,
      marginVertical: seq_order === 1 ? 20 : 0,
    }

    const renderers = {
      p: (htmlAttribs, children, convertedCSSStyles, passProps) => children
    }


    return (
      <View style={wrapperStyle}>
        <Image style={imageStyle} source={require('src/images/padIcon.png')}/>
        <Text style={[styles.tapText, textStyle]}>{updatedTitle}</Text>
        <HTML html={htmlContent === "" ? "<p></p>" : htmlContent} classesStyles={contentStyles[0]} />
      </View>
    )
  }
  textChange = (text) => {
    this.setState({text, disable: false})
    const data = {
      type: 'write',
      personName: text
    }
    this.props.dispatch(updateLoopDetails(data))
  }
  getWriteComponent = (dataObject, seq_order, page) => {
    const {title, description, text_box_name, text_box_placeholder} = dataObject
    const {loop} = this.props
    const loopStyles = get(loop, 'loopStyles[0]', {})
    const htmlContent = `${description}`
    const textWrapper = {
      position: 'absolute',
      top: 100,
      left: 20,
      right: 20,
    }

    const textStyle = {
      fontSize: 18,
      marginHorizontal: 30,
      marginVertical:  0,
    }

    const updatedTitle = this.updateContent(title)

    return (
      <View style={textWrapper}>
        <Text style={[styles.tapText, textStyle]}>{updatedTitle}</Text>
        <View
          style={{
            top: 120,
            marginHorizontal: 20,
            backgroundColor: '#FFFFFF',
            borderColor: '#979797',
            borderWidth: 1,
            height: 50,
          }}>
          <Input
            style={{fontSize: 20}}
            placeholder={text_box_placeholder}
            autoCapitalize={'words'}
            editable={true}
            multiLine={false}
            maxLength={40}
            onChangeText={this.textChange}
            value={this.state.text}
          />
        </View>
      </View>


    )
  }
  renderIntroPages = (dataObject, seq_order, page) => {
    const {content_type} = dataObject
    if (content_type === 'quote') {
      return this.getQuoteComponent(dataObject, seq_order, page)
    } else if (content_type === 'tap') {
      return this.getTapComponent(dataObject, seq_order, page)
    } else if (content_type === 'rate') {
      return this.getRatingComponent(dataObject, seq_order, page)
    } else if (content_type === 'general') {
      return this.getGeneralComponent(dataObject, seq_order, page)
    } else if (content_type === 'write') {
      return this.getWriteComponent(dataObject, seq_order, page)
    }

  }

  renderBasicSlidePage = (index, page, total) => {
    const {data, seq_order} = page
    const dataObject = data[0]
    const {content_type} = dataObject


    return (
      <GradientWrapper key={index} name={this.props.screenName}>
        <View style={{flex: 1}}>
          {this.getSwiperHeader(index, total, content_type)}
          {this.renderIntroPages(dataObject, seq_order, page)}
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
