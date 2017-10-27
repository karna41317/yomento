/**
 * Created by Karan on 2017-10-22.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, StyleSheet, AsyncStorage, Text, Dimensions } from 'react-native'
import { Button } from 'src/components/buttons'
import LinkedinLogin from 'react-native-linkedin-login'
import GradientWrapper from 'src/components/partials/gradientWrapper'
import { loginWithLinkedIn, loginSuccess, loginFailure, loginLocal, linkedInLogout } from 'src/actions/auth-action'
import * as Constans from 'src/constants'
import { authSelector } from 'src/selectors/common'

@connect(authSelector)
export default class Home extends Component {
  constructor (props) {
    super(props)

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)

    this.state = {
      user: null,
    }
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

  login () {
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

  logout () {
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
      /*AsyncStorage.setItem('user', JSON.stringify(userData), () => {
        this.getUserProfileImage()
      })*/
    }).catch((e) => {
      dispatch(loginFailure({
        authType: Constans.LINKEDIN,
      }))
    })
  }

  /*getUserProfileImage () {
    LinkedinLogin.getProfileImages().then((images) => {
      const userdata = Object.assign({}, this.state.user, {images})
      AsyncStorage.setItem('user', JSON.stringify(userdata), () => {
        this.setState({user: userdata})
      })

    }).catch((e) => {
    })
  }*/

  render () {
    console.log('printing', this.props, this.state)

    return (
      <GradientWrapper>
        <View style={styles.container}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button onPress={this.login}>
              Login
            </Button>
            <Button onPress={this.logout}>
              Logout
            </Button>
          </View>
        </View>
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
    justifyContent: 'space-between',
  },
})
