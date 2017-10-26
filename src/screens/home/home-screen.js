/**
 * Created by Karan on 2017-10-22.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, AsyncStorage, Text, Dimensions } from 'react-native'
import { Button } from 'src/components/buttons'
import LinkedinLogin from 'react-native-linkedin-login'
import GradientWrapper from 'src/components/partials/gradientWrapper'

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
    // initialize LinkedinApi
    console.log('init')
    LinkedinLogin.init(
      [
        'r_emailaddress',
        'r_basicprofile',
      ],
    )

    this.getUserSession()

  }

  getUserSession () {
    // get the user session from the store

    AsyncStorage.getItem('user', (err, result) => {
      if (result) {
        const user = JSON.parse(result)

        // set the api session if found
        LinkedinLogin.setSession(user.accessToken, user.expiresOn)

        this.setState({
          user,
        })

        console.log('user', user)
      }
    })

  }

  login () {
    LinkedinLogin.login().then((user) => {
      console.log('User logged in: ', user)
      
      // recieved auth token
      this.setState({user})

      AsyncStorage.setItem('user', JSON.stringify(user), () => {
        this.getUserProfile()
      })

    }).catch((e) => {
      var err = JSON.parse(e.description)
      alert('ERROR: ' + err.errorMessage)
      console.log('Error', e)
    })

    return true
  }

  logout () {
    LinkedinLogin.logout()
    console.log('user logged out')

    AsyncStorage.removeItem('user')
    this.setState({user: null})
  }

  getUserProfile (user) {
    LinkedinLogin.getProfile().then((data) => {
      console.log('received profile', data)
      const userdata = Object.assign({}, this.state.user, data)

      console.log('user: ', userdata)
      this.setState({user: userdata})

      AsyncStorage.setItem('user', JSON.stringify(userdata), () => {
        this.getUserProfileImage()
      })

    }).catch((e) => {
      console.log(e)
    })
  }

  getUserProfileImage () {
    LinkedinLogin.getProfileImages().then((images) => {
      console.log('received profile image', images)

      const userdata = Object.assign({}, this.state.user, {images})

      AsyncStorage.setItem('user', JSON.stringify(userdata), () => {
        this.setState({user: userdata})
      })

    }).catch((e) => {
      console.log(e)
    })
  }

  render () {
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
