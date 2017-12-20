/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'moment'
import { styles, htmlStyles } from './loop-styles'
import { ActivityIndicator, View, Text, DatePickerIOS, Alert, StyleSheet } from 'react-native'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Left, Right, Body, Icon, Button } from 'src/components/native-base'
import { loopSelector } from './loopSelector'
import { updateCards } from 'src/actions'
import { getLoops } from 'src/actions'
import { get, toUpper } from 'lodash'
import { PrimaryButton } from '../../components/buttons/Button'
import { semiBoldTextMixin } from '../../styles/mixins'
import PushNotification from 'react-native-push-notification'
import { logEvents } from '../../services/analytics'

const sequenceNumber = 0
@connect(loopSelector)
export default class loopReminderScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
    }
  }

  fireEvents = (eventName, params) => {
    logEvents(eventName, params)
  }

  componentDidMount () {
    //this.props.dispatch(getLoops())
  }

  goBack = () => {
    const {navigation, dashboard} = this.props
    const themeName = get(dashboard, 'newCard[0].theme_name', 'Reminder')
    this.fireEvents(`${themeName}.loopReminderScreen.${sequenceNumber}.button.confirmReminder`)
    navigation.goBack()
  }

  goToDashBoard = () => {
    this.props.navigation.navigate('dashboard')
  }

  onDateChange = (date) => {

    this.setState({
      date: date,
    })
  }

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }

  validateDate = (date) => {
    if (Object.prototype.toString.call(date) === '[object Date]') {
      if (isNaN(date.getTime())) {
        return false
      }
      else {
        return true
      }
    }
    else {
      return false
    }
  }

  updateContent = (text) => {
    const {auth, loop} = this.props
    const userName = get(auth, 'userData.user.first_name')
    const personName = get(loop, 'loopData.personName')
    let originalText = text

    if (userName) {
      originalText = originalText.replace('<first_name>', userName)
    }
    if (personName) {
      originalText = originalText.replace('<name_of_colleague>', personName)
    }

    return originalText
  }

  confirmReminder = (currentLoop) => {
    const {dispatch, navigation, dashboard, auth} = this.props

    const isValidDate = this.validateDate(this.state.date)
    const loopId = get(currentLoop, 'loop_id')
    const firstName = get(auth, 'userData.user.first_name')
    if (isValidDate) {
      const dataInEpoch = Moment(this.state.date).unix()
      const pathParams = {
        card_type: 'reminder',
        reminder_time: dataInEpoch,
        loop_id: get(currentLoop, 'loop_id'),
      }
      const bodyParams = {}
      const params = {
        pathParams,
        bodyParams,
        nextScreen: 'loopReminderEnd',
        routeParams: {
          reminder_time: Moment(this.state.date).format('Do MMM H:mm'),
        },
      }

      const themeName = get(dashboard, 'newCard[0].theme_name', 'Reminder')
      this.fireEvents(`${themeName}.loopReminderScreen.${sequenceNumber}.button.confirmReminder`, {
        themeName: themeName,
        reminder_time: dataInEpoch,
        loop_id: loopId,
      })

      const prefix = firstName ? firstName : 'Hej'
      const reminderMsg = currentLoop.reminder_msg1 ? currentLoop.reminder_msg1 : `${prefix}! ${currentLoop.title}`
      const notificationMsg = this.updateContent(reminderMsg)

      PushNotification.localNotificationSchedule({
        id: `reminder_${themeName}_${loopId}`,
        message: notificationMsg,
        date: new Date(this.state.date.getTime() + (60 * 1000)) // in 60 secs
      })

      dispatch(updateCards(params, navigation))
    } else {
      Alert.alert(
        'Error',
        'Date is not valid',
        [
          {text: 'OK', onPress: () => {}},
        ],
        {cancelable: false},
      )
    }
  }

  getHeader = (headerName) => {
    return (
      <Header backgroundColor={'transparent'} style={customStyles.header}>
        <Left>
          <Icon onPress={this.goBack} name='ios-arrow-round-back-outline' style={{fontSize: 40, width: 20, color: '#419BF9'}}/>
        </Left>
        <Body style={{minWidth: 150}}>
        <Text style={customStyles.finishedText}>{toUpper(headerName)}</Text>
        </Body>
        <Right></Right>
      </Header>
    )
  }

  render () {
    const {loop, dashboard} = this.props
    const currentLoop = loop.loop[0]
    if (currentLoop) {
      const loopContent = eval(this.parseJson(currentLoop))
      const reminder_action_content = eval(
        this.parseJson(loopContent.reminder_action_content))

      const headerName = get(dashboard, 'newCard[0].theme_name', 'FEEDBACK EXERCISE')
      if (reminder_action_content) {
        const {title} = get(reminder_action_content[0], 'data[0]')
        return (
          <GradientWrapper name='reminder'>
            {this.getHeader(headerName)}
            <View style={styles.reminderWrapper}>
              <Text style={styles.reminderText}>{title}</Text>
              <View style={styles.dateTimePicker}>
                <DatePickerIOS
                  date={this.state.date}
                  mode="datetime"
                  minimumDate={new Date()}
                  onDateChange={this.onDateChange}
                  minuteInterval={5}/>
              </View>
            </View>
            <View style={styles.confirmReminder}>
              <PrimaryButton onPress={this.confirmReminder.bind(this, currentLoop)} upper>
                confirm
              </PrimaryButton>
            </View>
          </GradientWrapper>
        )
      }
      return null
    }
    return null
  }
}

const customStyles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'transparent',
    marginTop: 40,
    marginHorizontal: 20,
  },
  finishedButton: {
    minWidth: 130,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 35,
  },
  finishedText: {
    ...semiBoldTextMixin(14, '#12124B')
  },
})
