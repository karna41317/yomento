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

  goToSelfRating = () => {
    this.props.navigation.navigate('selfRating')
  }

  render () {
    return (
      <GradientWrapper name={'intro'}>
        <View style={styles.introWrapper}>

          <Text style={styles.profileFinishHead}>Great work!</Text>
          <Text style={styles.profileFinishText} >Now, let’s do
            something even more fun. Let’s rate yourself as a leader.</Text>
          <PrimaryButton style={styles.profileButton}
                         onPress={this.goToSelfRating}>INTERESTING!</PrimaryButton>


        </View>
      </GradientWrapper>
    )
  }
}


