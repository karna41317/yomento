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

  goToIdealRating = () => {
    this.props.navigation.navigate('idealRating')
  }

  render () {
    return (
      <GradientWrapper name={'intro'}>
        <View style={styles.introWrapper}>
          <View style={styles.regularCard}>
            <Text style={styles.profileIntroHead}>PROFILE</Text>
            <Text style={styles.profileIntroText} >Rate your ideal self</Text>
            <PrimaryButton style={styles.profileButton}
                           onPress={this.goToIdealRating}>START</PrimaryButton>
          </View>

        </View>
      </GradientWrapper>
    )
  }
}


