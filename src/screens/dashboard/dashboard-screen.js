import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, ActivityIndicator } from 'react-native'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { get, toUpper, head, map, each } from 'lodash'
import { styles } from './dashboard.styles'
import {
  Header, Button, Icon, Left, Body, Right, DeckSwiper,
} from 'src/components/native-base'
import { semiBoldTextMixin } from '../../styles/mixins'
import { getDashboardCards, getLoops, updateDashboardCards } from 'src/actions'
import { connect } from 'react-redux'
import { dashboardSelector } from './dashboard-selector'
import { PrimaryButton, SecondaryButton } from '../../components/buttons/Button'
import Moment from 'moment'

@connect(dashboardSelector)
export default class DashboardScreen extends Component {
  goToSetting = () => {
    this.props.navigation.navigate('profile')
  }

  constructor () {
    super()
    this.state = {
      showMainCard: this.showMainCard(),
    }
  }

  showMainCard = () => {
    return true
  }

  componentWillMount () {
    this.props.dispatch(getDashboardCards())
  }

  componentDidMount () {
    this.skipFutureCards()
  }

  skipFutureCards = () => {
    if(this.scrollView) {
      this.scrollView.scrollTo({y: 760, animated: true})
    }

  }

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }

  goToReflect = (item) => {
    const {navigation, dispatch} = this.props
    dispatch(getLoops(item.loop_id))
    navigation.navigate('loopReflection', item)
  }

  goToHow = (item) => {
    const {navigation, dispatch} = this.props
    dispatch(getLoops(item.loop_id))
    navigation.navigate('loop', item)
  }

  goToLoop = (item) => {
    const {navigation, dispatch} = this.props
    dispatch(getLoops(item.loop_id))
    navigation.navigate('loop', item)
  }

  moveCardBack = (arr, n) => {
    const arrayLength = arr.length
    return arr.slice(arrayLength - n).concat(arr.slice(0, arrayLength - n))
  }

  finishedCards = () => {
    const {dashboard: {finishedCards}} = this.props
    if (finishedCards && finishedCards.length > 0) {
      return map(finishedCards, card => {
        return (
          <View style={styles.futureCards}>
            <View style={styles.textWrapper}>
              <Text style={styles.profileIntroHead}>
                {toUpper(card.theme_name)}
              </Text>
              <Text
                style={styles.profileIntroText}>
                {card.loop_title}
              </Text>
              <View style={styles.ButtonsWrapper}>
                <Button transparent>
                  <Icon name={'checkmark'}
                        style={styles.finishedCardStatusIcon}/>
                  <Text style={styles.finishedCardStatusText}>Done</Text>
                </Button>
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
      return map(reminderCards, card => {
        //console.log('printingreminder_time', card.reminder_time)
        const isTimePassed = Moment(Date.now()).isAfter(Number(card.reminder_time))
        const reminderColor = isTimePassed ? '#FF0000' : '#12124B'
        const height = isTimePassed ? 300 : 170
        const style = {
          height: height,
          backgroundColor: '#FFFBCD',
        }

        const reminderTime = Moment(new Date(Number(card.reminder_time))).format('Do MMM h:mm')

        return (
          <View style={[styles.completedCard, style]}>
            <View style={styles.textWrapper}>
              <View style={styles.textHeadWrapper}>
                <Text style={styles.profileIntroHead}>
                  {'FEEDBACK'}
                </Text>
                <Text style={[
                  styles.profileIntroHead,
                  styles.reminderWrapper]}>
                  <Icon name={'ios-time-outline'}
                        style={{fontSize: 20, color: reminderColor}}/>
                  {'    '}
                  <Text style={{fontSize: 15, color: reminderColor}}>
                    {reminderTime}</Text>
                </Text>
              </View>
              <Text
                style={styles.profileIntroText}>
                {'Send a message with positive feedback!'}
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
                onPress={this.goToReflect.bind(this,
                  card)}>Finish</PrimaryButton>
            </View>
          </View>
        )
      })
    }
    return null
  }

  getReflectionCard = () => {
    const {dashboard: {reflectionCards}} = this.props
    console.log('printingreflectionCards', this.props)
    if (reflectionCards && reflectionCards.length > 0) {

      const isTimePassed = Moment(Date.now()).isAfter(1511913600)
      const reminderColor = isTimePassed ? '#FF0000' : '#12124B'
      const height = 170
      const style = {
        height: height,
        backgroundColor: '#D5EDFF',
      }
      console.log('printingreflectionCards', reflectionCards)

      return map(reflectionCards, card => {
        return (
          <View style={[styles.completedCard, style]}>
            <View style={styles.textWrapper}>
              <View style={styles.textHeadWrapper}>
                <Text style={styles.profileIntroHead}>
                  {'FEEDBACK'}
                </Text>
              </View>
              <Text
                style={styles.profileIntroText}>
                {'Send a message with positive feedback!'}
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
                onPress={this.goToReflect.bind(this,
                  card)}>Lets reflect</PrimaryButton>
            </View>
          </View>
        )
      })
    }
    return null
  }

  getMainCard = () => {
    if (this.state.showMainCard) {
      const {dashboard: {newCard}} = this.props
      if (newCard && newCard.length > 0) {
        const mainCard = newCard[0]
        const isTimePassed = Moment(Date.now()).isAfter(1511913600)
        const height = isTimePassed ? 170 : 300
        return (
          <View style={[styles.mainCard, {height: height}]}>
            <View style={styles.textWrapper}>
              <Text style={styles.profileIntroHead}>
                {toUpper(mainCard.theme_name)}
              </Text>
              <Text
                style={styles.profileIntroText}>{mainCard.loop_title}</Text>
            </View>
            <PrimaryButton
              style={styles.profileButton}
              onPress={this.goToLoop.bind(this,
                mainCard)}>START</PrimaryButton>
          </View>
        )
      }
    }
  }

  getFutureCards = (futureCards) => {
    if (futureCards && futureCards.length > 0) {
      return map(futureCards, card => {
        return (
          <View style={styles.futureCards}>
            <View style={styles.textWrapper}>
              <Text style={styles.profileIntroHead}>
                {toUpper(card.theme_name)}
              </Text>
              <Text
                style={styles.profileIntroText}>{card.loop_title}</Text>
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
    this.scrollView.scrollTo({y: 0, animated: true})
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
        <Button iconLeft transparent rounded bordered info
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
      return <ActivityIndicator/>
    } else {
      const {
        dashboard: {
          newCard,
          futureCards,
          nextCards,
          redoCards,
          finishedCards,
          reminderCards,
          reflectionCards,
        },
      } = this.props

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
                {this.finishedCards(finishedCards)}
                {this.getReminderCard(reminderCards)}
                {this.getReflectionCard(reflectionCards)}
                {this.getMainCard(newCard)}
                {this.getFutureCards(futureCards)}
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
