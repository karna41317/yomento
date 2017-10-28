/**
 * Created by Karan on 2017-10-22.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, Image, StyleSheet, } from 'react-native'
import { Button, Heading } from 'src/components'
import GradientWrapper from 'src/components/partials/gradientWrapper'
import { ViewWrapper } from '../../components/wrappers/viewWrapper'
import TextFont from '../../components/typography/TextFont'

const logo = require('src/images/logoText.png')

@connect()
export default class Home extends Component {

  constructor (props) {
    super(props)
  }

  goToLogin = () => {
    const {navigation} = this.props
    navigation.navigate('login')
  }

  render () {
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
            <Button onPress={this.goToLogin}>
              Sign in With LinkedIn
            </Button>
            <Button onPress={this.goToLogin}>
              Sign up with e-mail
            </Button>
          </ViewWrapper>
          <ViewWrapper>
            <TextFont style={{textAlign: 'center'}}>Already a Member</TextFont>
            <Button onPress={this.goToLogin}>
              Login
            </Button>
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
    fontSize: 24,
    color: 'white',
  },
})
