/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ActivityIndicator, View, Text, } from 'react-native'
import { styles, htmlStyles } from './profile.styles'
import Button from '../../components/form/customButton'
import { PrimaryButton } from '../../components/buttons/Button'
import GradientWrapper from '../../components/partials/gradientWrapper'

@connect()
export default class selfRatingIntro extends Component {

  componentDidMount () {
  }

  goToProfile = () => {
    this.props.navigation.navigate('profile')
  }

  render () {
    return (
      <GradientWrapper name={'intro'}>
        <View style={styles.introWrapper}>
          <Text style={styles.profileFinishHead}>Now, take a look at
            this!</Text>
          <Text style={styles.profileFinishText}>Let me show you your own
            leadership profile.</Text>
          <PrimaryButton style={styles.profileButton}
                         onPress={this.goToProfile}>SHOW ME!</PrimaryButton>
        </View>
      </GradientWrapper>
    )
  }
}


