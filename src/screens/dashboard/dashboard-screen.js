import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, ActivityIndicator } from 'react-native'
import { Spinner} from 'src/components'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { get, toUpper, head, map, each, sortBy, includes } from 'lodash'
import { styles } from './dashboard.styles'
import {
  Header, Button, Icon, Left, Body, Right, DeckSwiper,
} from 'src/components/native-base'
import { semiBoldTextMixin } from '../../styles/mixins'
import { getDashboardCards, getLoops, updateDashboardCards, updateCards } from 'src/actions'
import { connect } from 'react-redux'
import { dashboardSelector } from './dashboard-selector'
import { PrimaryButton, SecondaryButton } from '../../components/buttons/Button'
import Moment from 'moment'
import { height } from '../../../src_native/Helpers/constant'
import { logEvents } from 'src/services/analytics'
import PushNotification from 'react-native-push-notification'

const normalHeight = 220
const extendedHeight = 320
const headerPadding = 20

@connect(dashboardSelector)
export default class DashboardScreen extends Component {
  goToSetting = () => {
    this.props.navigation.navigate('profile')
  }

  constructor (props) {
    super(props)
    this.state = {
      showMainCard: this.showMainCard(),
    }
  }

  showMainCard = () => {
    return true
  }

  fireEvents = (eventName, params = {}) => {
    logEvents(eventName, params)
  }

  componentDidUpdate () {
    this.skipFutureCards()
  }

  skipFutureCards = () => {
    const {dashboard: {finishedCards}} = this.props
    if (finishedCards && finishedCards.length > 0) {
      let scrollHeight = finishedCards.length * normalHeight
      scrollHeight = scrollHeight + (finishedCards.length * 10)
      if (this.scrollView) {
        this.scrollView.scrollTo({x: 0, y: scrollHeight, animated: true})
      }
    }
  }

  updateCard = (loopId, cardType, nextScreen) => {
    const {dispatch, loop, navigation} = this.props

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

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }

  goToReflect = (item) => {
    const {navigation, dispatch} = this.props
    dispatch(getLoops(item.loop_id))
    PushNotification.cancelLocalNotifications({
      id: `reminder_${item.themeName}_${item.loop_id}`,
    })
    this.fireEvents(`dashboard.remindercard.${item.theme_name}.button.gotoreflect`, item)
    this.updateCard(item.loop_id, 'reflection', 'loopReflection')
  }

  reflectReminderCards = (item) => {
    this.goToReflect(item)
  }

  reflectReflectionCard = (item) => {
    const {navigation, dispatch} = this.props
    this.fireEvents(`dashboard.reflectioncard.${item.theme_name}.button.gotoreflect`, item)
    dispatch(getLoops(item.loop_id))
    navigation.navigate('loopReflection', item)
  }

  goToHow = (item) => {
    const {navigation, dispatch} = this.props
    this.fireEvents(`dashboard.remindercard.${item.theme_name}.button.how`, item)
    dispatch(getLoops(item.loop_id))
    /*TODO: Fix for only how screen*/
    navigation.navigate('loopHow', {howRoute: true})
  }

  goToLoop = (item) => {
    const {navigation, dispatch} = this.props
    //this.fireEvents(`dashboard.maincard.${item.theme_name}.button.gotoloop`, item)
    this.fireEvents(`dashboard.maincard.button.gotoloop`, item)
    dispatch(getLoops(item.loop_id))
    navigation.navigate('loop', item)
  }

  finishedCards = () => {
    const {dashboard: {finishedCards}} = this.props
    if (finishedCards && finishedCards.length > 0) {
      return map(finishedCards, (card, index) => {
        const style = {
          flex: 1,
          height: normalHeight,
          backgroundColor: '#9696A5',
        }

        return (
          <View
            style={[styles.completedCard, style]}
            key={index}>
            <View style={styles.textWrapper}>
              <View style={styles.textHeadWrapper}>
                <Text style={styles.profileIntroHead}>
                  {toUpper(card.theme_name)}
                </Text>
              </View>
              <View style={{marginVertical: 20}}>
                <Text
                  style={styles.profileIntroText}>
                  {card.loop_title}
                </Text>
              </View>

              <View style={styles.ButtonsWrapper}>
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                  <Icon
                    name={
                      card.card_status && card.card_status === 'not_interested'
                        ? 'md-close'
                        : 'md-checkmark'
                    }
                    style={styles.finishedCardStatusIcon}/>
                  <SecondaryButton
                    upper
                    style={{minWidth: 80, paddingHorizontal: 5, borderWidth: 0}}
                    textStyles={{color: '#FFFFFF'}}
                    onPress={() => {}}>
                    {toUpper(card.card_status)}
                  </SecondaryButton>
                </View>
              </View>
            </View>
          </View>
        )
      })
    }
    return null
  }

  getReminderCard = () => {
    const {dashboard: {reminderCards}} = this.props
    if (reminderCards && reminderCards.length > 0) {
      let haveMaxCard = false
      const sortByLatest = sortBy(reminderCards, card => {
        return new Moment(Number(card.card_time)).format('Do MMM H:mm')
      })
      return map(sortByLatest, (card, index) => {
        const current = Moment(new Date()).unix()
        const isTimePassed = Moment(current).isAfter(Number(card.reminder_time))

        /*
          normal height if deadline is not crossed,
          max height if deadline is crossed
          if you have 2 cards -->
          --->(1 is crossed deadline , 1 is not crossed deadline) --> sort cards by deadline and show deadline crossed card with max height and not crossed card with normal height
          --->(2 deadlines crossed) --> sort cards by deadline and show latest crossed deadline card with max height and show second crossed card with normal height
          --->(2 deadlines not crossed) --> sort cards by deadline and show cards with with normal height
        */

        const reminderColor = isTimePassed ? '#FF0000' : '#12124B'
        const height = isTimePassed && !haveMaxCard
          ? extendedHeight
          : normalHeight
        if (isTimePassed) {
          haveMaxCard = true
        }
        const style = {
          flex: 1,
          height: height,
          backgroundColor: '#FFFBCD',
        }

        const reminderTime = Moment.unix(Number(card.reminder_time)).format('Do MMM H:mm')
        return (
          <View
            style={[styles.completedCard, style]}
            key={index}>
            <View style={styles.textWrapper}>
              <View style={styles.textHeadWrapper}>
                <Text style={styles.profileIntroHead}>
                  {toUpper(card.theme_name)}
                </Text>
                <Text style={[
                  styles.profileIntroHead,
                  styles.reminderWrapper, {
                    borderColor: reminderColor,
                  }]}>
                  <Icon name={'ios-time-outline'}
                        style={{fontSize: 20, color: reminderColor}}/>
                  {'    '}
                  <Text style={{fontSize: 15, color: reminderColor}}>
                    {reminderTime}</Text>
                </Text>
              </View>
              <View style={{marginVertical: 20}}>
                <Text
                  style={styles.profileIntroText}>
                  {card.loop_title}
                </Text>
              </View>

              <View style={styles.ButtonsWrapper}>
                <SecondaryButton
                  upper
                  style={{minWidth: 80}}
                  textStyles={{color: '#0D0B3F'}}
                  onPress={this.goToHow.bind(this,
                    card)}>How?</SecondaryButton>
                <PrimaryButton
                  upper
                  onPress={this.reflectReminderCards.bind(this,
                    card)}>Finish</PrimaryButton>
              </View>
            </View>

          </View>
        )
      })
    }
    return null
  }

  isReminderCardTimePassed = () => {
    const {dashboard: {reflectionCards, reminderCards}} = this.props
    let reminderTimePassed = false
    if (reminderCards && reminderCards.length > 0) {
      let reminderTimeArrays = []
      map(reminderCards, card => {

        const current = Moment(new Date()).unix()
        const timePassed = Moment(current).isAfter(Number(card.reminder_time))

        reminderTimeArrays.push(timePassed)
      })
      reminderTimePassed = includes(reminderTimeArrays, true)
    }
    return reminderTimePassed
  }

  getReflectionCard = () => {
    const {dashboard: {reflectionCards, reminderCards}} = this.props
    let reminderTimePassed = false
    if (reminderCards && reminderCards.length > 0) {
      let reminderTimeArrays = []
      map(reminderCards, card => {
        const timePassed = Moment(Date.now()).
          isAfter(Number(card.reminder_time))
        reminderTimeArrays.push(timePassed)
      })
      reminderTimePassed = includes(reminderTimeArrays, true)
    }

    if (reflectionCards && reflectionCards.length > 0) {
      const height = normalHeight
      const style = {

        /*normal height, if you have any reminder card with crossed deadline or have 2 reflection cards
        max height: if only one reflection card and  reminder card not crossed deadline.*/

        flex: 1,
        height: (reminderTimePassed || reflectionCards.length > 1)
          ? height
          : extendedHeight,
        backgroundColor: '#D5EDFF',
      }

      return map(reflectionCards, (card, index) => {

        return (
          <View
            style={[styles.completedCard, style]}
            key={index}>
            <View style={styles.textWrapper}>
              <View style={styles.textHeadWrapper}>
                <Text style={styles.profileIntroHead}>
                  {toUpper(card.theme_name)}
                </Text>
              </View>
              <View style={{marginVertical: 20}}>
                <Text
                  style={styles.profileIntroText}>
                  {card.loop_title}
                </Text>
              </View>
            </View>
            <View style={styles.ButtonsWrapper}>
              <SecondaryButton
                upper
                style={{minWidth: 80}}
                textStyles={{color: '#0D0B3F'}}
                onPress={this.goToHow.bind(this,
                  card)}>How?</SecondaryButton>
              <PrimaryButton
                upper
                onPress={
                  this.reflectReflectionCard.bind(this, card)}>
                Lets reflect
              </PrimaryButton>
            </View>
          </View>
        )
      })
    }
    return null
  }

  getMainCard = () => {
    const {dashboard: {newCard, reminderCards, reflectionCards}} = this.props
    if (newCard && newCard.length > 0) {
      const onlyMainCard = reminderCards.length === 0 && reflectionCards.length === 0
      let customStyles = {}
      const mainCard = newCard[0]
      const isTimePassed = this.isReminderCardTimePassed()


      const height = (isTimePassed || reflectionCards.length > 0) ? normalHeight : extendedHeight

      if (onlyMainCard) {
        customStyles = {
          flex: 1,
          height: height,
          marginTop: 130,
          marginBottom: 120,
        }
      } else {
        customStyles = {
          height: height,
          marginTop: 10,
        }
      }
      return (
        <View
          style={[styles.mainCard, customStyles]}>
          <View style={styles.textWrapper}>
            <Text style={styles.profileIntroHead}>
              {toUpper(mainCard.theme_name)}
            </Text>
            <View style={{marginVertical: 20}}>
              <Text
                style={styles.profileIntroText}>{mainCard.loop_title}</Text>
            </View>
          </View>
          <PrimaryButton
            style={styles.profileButton}
            onPress={this.goToLoop.bind(this,
              mainCard)}>START</PrimaryButton>
        </View>
      )
    }
  }

  getFutureCards = () => {
    const {dashboard: {futureCards}} = this.props
    if (futureCards && futureCards.length > 0) {
      return map(futureCards, (card, index) => {
        const style = {
          flex: 1,
        }
        return (
          <View style={[styles.futureCards, style]} key={index}>
            <View style={styles.textWrapper}>
              <Text style={styles.profileIntroHead}>
                {toUpper(card.theme_name)}
              </Text>
              <View style={{marginVertical: 20}}>
                <Text
                  style={styles.profileIntroText}>{card.loop_title}</Text>
              </View>
            </View>
          </View>
        )
      })
    }
    return null
  }
  refScrollView = view => {
    this.scrollView = view
  }
  scrollToFinished = () => {
    //this.scrollView.scrollTo({y: 0, animated: true})
    this.props.navigation.navigate('finished')
  }
  getHeader = () => {
    return (
      <Header backgroundColor={'transparent'} style={customStyles.header}>
        <Left>
          <Button transparent onPress={this.goToSetting}>
            <Icon name='md-contact'
                  style={{fontSize: 30, color: '#419BF9'}}/>
          </Button>
        </Left>
        <Body>
        <Button
          iconLeft transparent rounded bordered info
          onPress={this.scrollToFinished}
          style={customStyles.finishedButton}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            <Icon name='ios-arrow-round-up'
                  style={[customStyles.finishedText, {fontSize: 24}]}/>
            <Text style={customStyles.finishedText}>FINISHED</Text>
          </View>
        </Button>
        </Body>
        <Right></Right>
      </Header>
    )
  }

  render () {
    const {dashboard: {fetching}} = this.props


    if (fetching) {
      return (
        <View style={{flex: 1}}>
          <Spinner/>
        </View>
      )
    } else {
      return (
        <GradientWrapper name={'default'}>
          <View style={{backgroundColor: 'transparent'}}>
            {this.getHeader()}
            <View style={styles.dashboardWrapper}>
              <ScrollView
                ref={this.refScrollView}
                automaticallyAdjustContentInsets={false}
                onScroll={() => {}}
                scrollEventThrottle={200}
                showsVerticalScrollIndicator={false}>
                {this.getReminderCard()}
                {this.getReflectionCard()}
                {this.getMainCard()}
                {this.getFutureCards()}
              </ScrollView>
            </View>
          </View>
        </GradientWrapper>
      )
    }

  }
}

const customStyles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  finishedButton: {
    minWidth: 130,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 35,
  },
  finishedText: {
    marginHorizontal: 10,
    ...semiBoldTextMixin(14, '#FFF')
  },
})
