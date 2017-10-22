/**
 * Created by Karan on 2017-10-22.
 */
import React, { Component, PropTypes } from 'react'
import {
  View, Text, Image, StyleSheet, Animated, InteractionManager, Alert,
} from 'react-native'
import { Input, Button, Logo, Heading, BackgroundWrapper, AlertStatus } from './../../../components'
import Icon from 'react-native-vector-icons/FontAwesome'
import { getPlatformValue } from './../../../utils'
import { styles } from './signup-styles'
import LinearGradient from 'react-native-linear-gradient'

export default class Login extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    animation: {
      headerPositionTop: new Animated.Value(-148),
      formPositionLeft: new Animated.Value(614),
      buttonPositionTop: new Animated.Value(1354),
    },
  }

  handleChangeInput (stateName, text) {
    this.setState({
      [stateName]: text,
    })
  }

  handleRegister () {
    Alert.alert(
      'Button press',
      'Created user',
    )
  }

  unmountComponent (callback) {
    const timing = Animated.timing
    Animated.parallel([
      timing(this.state.animation.headerPositionTop, {
        toValue: -148,
        duration: 400,
        delay: 100,
      }),
      timing(this.state.animation.formPositionLeft, {
        toValue: 614,
        duration: 500,
        delay: 120,
      }),
      timing(this.state.animation.buttonPositionTop, {
        toValue: 1354,
        duration: 400,
        delay: 130,
      }),
    ]).start(callback)
  }

  handleBack () {
    this.unmountComponent(() => {
      /*Actions.pop();*/
      //this.props.navigation.pop()
    })
  }

  handleLogin () {
    this.unmountComponent(() => {
      this.props.navigation.navigate('login')
    })
  }

  componentDidMount () {
    Animated.timing(this.state.animation.headerPositionTop, {
      toValue: 0,
      duration: 725,
      delay: 100,
    }).start()
    Animated.timing(this.state.animation.formPositionLeft, {
      toValue: 0,
      duration: 700,
      delay: 120,
    }).start()
    Animated.timing(this.state.animation.buttonPositionTop, {
      toValue: 0,
      duration: 600,
      delay: 130,
    }).start()
  }

  render () {
    return <LinearGradient colors={[
      '#0B0B48',
      '#0F0E4E',
      '#0F0F55',
      '#111059',
      '#17166D',
      '#181776',
      '#1D1C80',
      '#1E1D85']} style={{flex: 1}}>
      <BackgroundWrapper transparent iconLeft="arrow-left-circle"
                         onPressIcon={this.handleBack.bind(this)}>
        <View style={styles.loginContainer}>
          <Animated.View style={{
            position: 'relative',
            top: this.state.animation.headerPositionTop,
          }}>
            <Heading color="#ffffff" textAlign="center">
              {'Sign up'}
            </Heading>
          </Animated.View>
          <Logo marginTop={25}/>
          <View style={styles.formContainer}>
            <Animated.View style={{
              position: 'relative',
              left: this.state.animation.formPositionLeft,
            }}>
              <Input label="Username"
                     icon={<Icon name="user"/>}
                     value={this.state.username}
                     onChange={this.handleChangeInput.bind(this, 'username')}
              />
              <Input label="Email"
                     icon={<Icon name="envelope-o"/>}
                     value={this.state.email}
                     marginTop={23}
                     onChange={this.handleChangeInput.bind(this, 'email')}
              />
              <Input label="Password"
                     icon={<Icon name="key"/>}
                     value={this.state.password}
                     marginTop={23}
                     onChange={this.handleChangeInput.bind(this, 'password')}
                     secureTextEntry
              />
            </Animated.View>
            <Animated.View style={{
              position: 'relative',
              top: this.state.animation.buttonPositionTop,
            }}>
              <Button marginTop={getPlatformValue('android', 25, 38)}
                      width={200}
                      onPress={this.handleRegister.bind(this)}>
                Create
              </Button>
            </Animated.View>
          </View>
        </View>
        <AlertStatus textHelper="You're ready account" textAction="Login"
                     onPressAction={this.handleLogin.bind(this)}></AlertStatus>
      </BackgroundWrapper>
    </LinearGradient>
  }
}
