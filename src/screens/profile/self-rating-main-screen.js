import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, View, Text, } from 'react-native'
import { Spinner} from 'src/components'
import { styles, htmlStyles } from './profile.styles'
import Button from '../../components/form/customButton'
import { PrimaryButton } from '../../components/buttons/Button'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { logEvents } from 'src/services/analytics'

@connect()
export default class selfRatingMainScreen extends Component {

  componentDidMount () {
  }

  fireEvents = (eventName) => {
    logEvents(eventName)
  }

  goToSelfRating = () => {
    this.fireEvents(`profile.selfRating.main.button.Next`)
    this.props.navigation.navigate('selfRatingIntro')
  }

  render () {
    return (
      <GradientWrapper name={'intro'}>
        <View style={styles.introWrapper}>
          <View style={styles.regularCard}>
            <Text style={styles.profileIntroHead}>PROFILE</Text>
            <Text style={styles.profileIntroText}>Rate yourself as a leader</Text>
            <PrimaryButton
              style={styles.profileButton}
              onPress={this.goToSelfRating}>START</PrimaryButton>
          </View>

        </View>
      </GradientWrapper>
    )
  }
}


