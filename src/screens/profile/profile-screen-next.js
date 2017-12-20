import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ActivityIndicator, View, Text, } from 'react-native'
import { styles, htmlStyles } from './profile.styles'
import { PrimaryButton } from '../../components/buttons/Button'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { logEvents } from 'src/services/analytics'
import { dashboardSelector } from '../dashboard/dashboard-selector'
import { get} from 'lodash'

@connect(dashboardSelector)
export default class profileScreenNext extends Component {

  componentDidMount () {
  }

  fireEvents = (eventName) => {
    logEvents(eventName)
  }

  goToDashboard = () => {
    this.fireEvents(`profile.profileScreenDesc.button.great`)
    this.props.navigation.navigate('dashboard')
  }

  render () {

    const {dashboard: {newCard}} = this.props
    const themeName = get(newCard[0], 'theme_name','')

    return (
      <GradientWrapper name={'intro'}>
        <View style={styles.introWrapper}>
          <Text style={styles.profileFinishHead}>Lets start your training</Text>
          <Text style={styles.profileFinishText}>I have a made a program based on your answers. Let's start with {themeName}, I think you will like it.</Text>
          <PrimaryButton upper
            style={styles.profileButton}
            onPress={this.goToDashboard}>GREAT!</PrimaryButton>
        </View>
      </GradientWrapper>
    )
  }
}


