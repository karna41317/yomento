/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'moment'
import { styles, htmlStyles } from './loop-styles'
import { ActivityIndicator, View, Text, DatePickerIOS } from 'react-native'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { Button, Icon } from 'src/components/native-base'
import { loopSelector } from './loopSelector'
import { updateCards } from 'src/actions'
import { getLoops } from 'src/actions'
import { get } from 'lodash'
import { PrimaryButton } from '../../components/buttons/Button'

@connect(loopSelector)
export default class loopReminderScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount () {
    //this.props.dispatch(getLoops())
  }

  goBack = () => {
    this.props.navigation.goBack()
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
  confirmReminder = (currentLoop) => {
    const {dispatch, navigation} = this.props
    const dataInEpoch = Moment(this.state.date).unix()
    const params = {
      card_type: 'reminder',
      reminder_time: dataInEpoch,
      loop_id: get(currentLoop, 'loop_id'),
    }
    dispatch(updateCards(params, navigation))
  }

  render () {
    const {loop} = this.props
    const currentLoop = loop.loop[0]
    if (currentLoop) {
      const loopContent = eval(this.parseJson(currentLoop))
      const reminder_action_content = eval(
        this.parseJson(loopContent.reminder_action_content))

      if (reminder_action_content) {
        const {title} = get(reminder_action_content[0], 'data[0]')
        return (
          <GradientWrapper name='reminder'>
            <View backgroundColor={'transparent'} style={styles.headerStyle}>
              <Button transparent onPress={this.goBack}>
                <Icon name='settings' style={{fontSize: 30, color: '#419BF9'}}/>
              </Button>
              <Text style={[styles.headerTextStyle, {}]}>FEEDBACK
                EXERCISE</Text>
              <Button transparent onPress={this.goToDashBoard}>
                <Icon name='close' style={{fontSize: 40, color: '#419BF9'}}/>
              </Button>
            </View>
            <View style={styles.reminderWrapper}>
              <Text style={styles.reminderText}>{title}</Text>
              <View style={styles.dateTimePicker}>
                <DatePickerIOS
                  date={this.state.date}
                  mode="datetime"
                  onDateChange={this.onDateChange}
                  minuteInterval={15}/>
              </View>
            </View>
            <View style={styles.confirmReminder}>
              <PrimaryButton
                onPress={this.confirmReminder.bind(this, currentLoop)} upper>
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


