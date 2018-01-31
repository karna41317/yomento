import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, } from 'react-native'
import { styles, htmlStyles } from './dashboard.styles'
import { PrimaryButton } from '../../components/buttons/Button'
import GradientWrapper from '../../components/partials/gradientWrapper'

@connect()
export default class initDashboardScreen extends Component {

  goToProfile = () => {
    this.props.navigation.navigate('dashboard')
  }

  render () {
    return (
      <GradientWrapper name={'intro'}>
        <View style={styles.introWrapper}>
          <Text style={styles.profileFinishHead}>Let’s start your
            training!</Text>
          <Text style={styles.profileFinishText}>
            I have made a training program based on your answers. Let’s start
            with theme.biggest.gap, I think you’ll like it.
          </Text>
          <PrimaryButton
            upper
            style={styles.profileButton}
            onPress={this.goToProfile}>Great</PrimaryButton>
        </View>
      </GradientWrapper>
    )
  }
}


