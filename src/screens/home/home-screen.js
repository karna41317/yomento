import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ViewWrapper } from '../../components/wrappers/viewWrapper'
import TextFont from '../../components/typography/textFont'
import { View, StyleSheet, AsyncStorage, Image, Text, Dimensions, AppState } from 'react-native'
import { Button } from 'src/components/buttons'
import { Button as RNEButton } from 'react-native-elements'
import GradientWrapper from 'src/components/partials/gradientWrapper'
import { homeSelector } from './home-selector'
import { regularTextMixin, semiBoldTextMixin } from '../../styles/mixins'
import { SecondaryButton } from '../../components/buttons/Button'
import { getLoopStyles } from 'src/actions'
import {map, get} from 'lodash'
const logo = require('src/images/mercury_logo.png')
import {logEvents} from 'src/services/analytics'

@connect(homeSelector)
export default class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {
      user: null,
      appState: AppState.currentState
    }
  }

  componentWillMount = () => {
    const {auth: {userData}, profile} = this.props


    if (userData) {
      const token = get(userData, 'authorization')
      const PCreated = get(userData, 'profile_created')


      const isValid = token.includes('Bearer')
      if (isValid) {
        const profileCreated = get(profile, 'profileCreated')


        if(profileCreated) {
          this.props.navigation.navigate('dashboard')
        } else {
          this.props.navigation.navigate('onBoarding')
        }
      }
    }
  }

  componentDidMount () {
    //this.props.dispatch(getLoopStyles())
    logEvents('app.launched', {})
  }

  goToLogin = () => {
    const {navigation} = this.props
    navigation.navigate('login')
  }

  goToSignUp = () => {
    const {navigation} = this.props
    navigation.navigate('signup')
  }

  render () {
    return (
      <GradientWrapper name={'default'}>
        <ViewWrapper style={styles.container}>
          <ViewWrapper>
            <Image source={logo} style={styles.logoText}/>
          </ViewWrapper>
          <ViewWrapper>
            <TextFont style={styles.introText}>
              Your pocket mentor that makes
              leadership fun, relevant and rewarding.
            </TextFont>
          </ViewWrapper>
          <ViewWrapper>
            <TextFont style={styles.member}>Become a member</TextFont>
            <RNEButton
              onPress={this.goToSignUp}
              backgroundColor={'#D5EDFF'}
              color={'black'}
              large
              leftIcon={{
                name: 'ios-mail-outline',
                type: 'ionicon',
                color: 'black',
              }}
              borderRadius={30}
              buttonStyle={styles.rneButton}
              raised
              title='Sign up with email'/>
          </ViewWrapper>
          <ViewWrapper>
            <TextFont style={{textAlign: 'center'}}>Already a Member</TextFont>
            <SecondaryButton onPress={this.goToLogin}
                             style={[styles.rneSecondary,]}>
              Member Login
            </SecondaryButton>
          </ViewWrapper>
        </ViewWrapper>
      </GradientWrapper>
    )
  }
}

Home.propTypes = {
  disableInteractionCheck: PropTypes.bool,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logoText: {
    width: 250,
    height: 100,
    marginTop: 50,
    resizeMode: 'contain',
  },
  introText: {
    marginHorizontal: 20,
    textAlign: 'center',
    ...regularTextMixin(20, '#FFF')
  },
  member: {
    ...semiBoldTextMixin(14, '#FFF'),
    textAlign: 'center',
  },
  rneButton: {
    marginVertical: 10,
    marginHorizontal: 40,
    width: Dimensions.get('window').width - 20,
  },
  rneSecondary: {
    backgroundColor: 'transparent',
    borderColor: '#007DFF',
    marginVertical: 10,
    marginHorizontal: 40,
    paddingVertical: 20,
    width: Dimensions.get('window').width - 20,
  },
})
