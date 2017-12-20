import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, View, Text, } from 'react-native'
import { styles, htmlStyles } from './profile.styles'
import Button from '../../components/form/customButton'
import { PrimaryButton } from '../../components/buttons/Button'
import GradientWrapper from '../../components/partials/gradientWrapper'
import {get} from 'lodash'
import { profileSelector } from './profile.selector'
import {logEvents} from 'src/services/analytics'

@connect(profileSelector)
export default class idealRatingMainScreen extends Component {

  componentDidMount () {
  }

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }

  fireEvents = (eventName) => {
    logEvents(eventName)
  }

  goToIdealRating = () => {
    this.fireEvents(`profile.idealRating.main.button.Next`)
    this.props.navigation.navigate('idealRatingIntro')
  }

  render () {

  const {profile} = this.props
    const introContent = get(profile, 'intro_content')
    console.log('printing', introContent)
    if (!profile.fetching && introContent) {
      const loopContent = eval(this.parseJson(introContent))

      console.log('printing', loopContent)

    }
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


