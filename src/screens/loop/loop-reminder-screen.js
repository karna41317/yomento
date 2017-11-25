/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { styles, htmlStyles } from './loop-styles'
import { ActivityIndicator, View, Text, DatePickerIOS } from 'react-native'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { Button, Icon } from 'src/components/native-base'
import { loopSelector } from './loopSelector'
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
    this.props.dispatch(getLoops())
  }

  goToSelfRating = () => {
    this.props.navigation.navigate('loopAction')
  }

  onDateChange = (date) => {
    console.log('printing', date)
    this.setState({
      date: date,
    })
  }

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }
  confirmReminder = () => {
    this.props.navigation.navigate('loopCoachEnd')
  }

  render () {
    const {loop} = this.props
    console.log('printing loop', loop)

    if (loop.loop[0]) {
      console.log('printing loop.loop[0]', loop.loop[0])

      const loopContent = eval(this.parseJson(loop.loop[0]))
      const reminder_action_content = eval(
        this.parseJson(loopContent.reminder_action_content))


      const coach_end_content = eval(
        this.parseJson(loopContent.coach_end_content))

      const coach_action_done_content = eval(
        this.parseJson(loopContent.coach_action_done_content))

console.log('coach_end_contentafter', coach_end_content)
console.log('printingcoach_action_done_contentbefore', coach_action_done_content)
console.log('printingreminder_action_contentbefore', reminder_action_content)

      if (reminder_action_content) {

        const {title} = get(reminder_action_content[0], 'data[0]')
        console.log('printing', title)
        return (
          <GradientWrapper name='reminder'>
            <View backgroundColor={'transparent'} style={styles.headerStyle}>
              <Button transparent onPress={this.settingsPress}>
                <Icon name='settings' style={{fontSize: 30, color: '#419BF9'}}/>
              </Button>
              <Text style={[styles.headerTextStyle, {}]}>FEEDBACK
                EXERCISE</Text>
              <Button transparent onPress={this.closePress}>
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
                onPress={this.confirmReminder} upper>
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


