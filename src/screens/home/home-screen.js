/**
 * Created by Karan on 2017-10-22.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ViewWrapper } from '../../components/wrappers/viewWrapper'
import TextFont from '../../components/typography/TextFont'
import { View, StyleSheet, AsyncStorage, Image, Text, Dimensions } from 'react-native'
import { Button } from 'src/components/buttons'
import { Button as RNEButton } from 'react-native-elements'
import LinkedinLogin from 'react-native-linkedin-login'
import GradientWrapper from 'src/components/partials/gradientWrapper'
import { loginWithLinkedIn, loginSuccess, loginFailure, loginLocal, linkedInLogout } from 'src/actions/auth-action'
import * as Constans from 'src/constants'
import { authSelector } from 'src/selectors/common'

const logo = require('src/images/logoText.png')

@connect(authSelector)
export default class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {
      user: null,
    }
    this.goToLinkedInLogin = this.goToLinkedInLogin.bind(this)
  }

  componentWillMount () {
    const linkedInScopes = ['r_emailaddress', 'r_basicprofile']
    LinkedinLogin.init(linkedInScopes)
    this.getUserSession()
  }

  getUserSession () {
    AsyncStorage.getItem('user', (err, result) => {
      if (result) {
        const user = JSON.parse(result)
        LinkedinLogin.setSession(user.accessToken, user.expiresOn)
      }
    })

  }

  goToLinkedInLogin () {
    const {dispatch} = this.props
    dispatch(loginWithLinkedIn({
      authType: Constans.LINKEDIN,
    }))
    LinkedinLogin.login().then((user) => {
      AsyncStorage.setItem('user', JSON.stringify(user), () => {
        this.getUserProfile(user)
      })
    }).catch((e) => {
      var err = JSON.parse(e.description)
      alert('ERROR: ' + err.errorMessage)
      dispatch(loginFailure({
        authType: Constans.LINKEDIN,
      }))
    })

    return true
  }

  goToLinkedInLogout () {
    LinkedinLogin.logout()
    AsyncStorage.removeItem('user')
    this.props.dispatch(linkedInLogout({
      authType: Constans.LINKEDIN,
    }))
  }

  getUserProfile (user) {
    LinkedinLogin.getProfile().then((data) => {
      let userData = {
        email: data.emailAddress,
        firstName: data.firstName,
        lastName: data.lastName,
        authType: Constans.LINKEDIN,
      }
      this.props.dispatch(loginSuccess(userData))
      this.props.navigation.navigate('onBoarding')
      /*AsyncStorage.setItem('user', JSON.stringify(userData), () => {
        this.getUserProfileImage()
      })*/
    }).catch((e) => {
      dispatch(loginFailure({
        authType: Constans.LINKEDIN,
      }))
    })
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
    console.log('printing', this.props)
    return (
      <GradientWrapper>
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
            <TextFont style={{textAlign: 'center'}}>Become Member</TextFont>
            <RNEButton onPress={this.goToLinkedInLogin}
                       backgroundColor={'#2B7AB6'}
                       color={'white'}
                       buttonStyle={styles.rneButton}
                       borderRadius={30}
                       raised
                       large
                       leftIcon={{name: 'logo-linkedin', type: 'ionicon', color: 'white'}}
                       title='Login with LinkedIn'/>
            <RNEButton onPress={this.goToSignUp}
                       backgroundColor={'#D5EDFF'}
                       color={'black'}
                       large
                       leftIcon={{name: 'ios-mail-outline', type: 'ionicon', color: 'black'}}
                       borderRadius={30}
                       buttonStyle={styles.rneButton}
                       raised
                       title='Login with email'/>

            {/* <Button onPress={this.goToSignUp}>

            </Button>*/}
          </ViewWrapper>
          <ViewWrapper>
            <TextFont style={{textAlign: 'center'}}>Already a Member</TextFont>
            <RNEButton onPress={this.goToLogin}
                       backgroundColor={'#2B7AB6'}
                       color={'white'}
                       large
                       borderRadius={30}
                       buttonStyle={styles.rneButton}
                       raised
                       title='Member Login'/>

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
    fontSize: 25,
    color: 'white',
  },
  rneButton: {
    marginVertical: 10,
    marginHorizontal: 40,
    width: Dimensions.get('window').width,

  },
})
