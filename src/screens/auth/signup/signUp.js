/**
 * Created by Karan on 2017-10-22.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, Image, StyleSheet, TextInput, Dimensions } from 'react-native'
import { authState } from 'src/selectors'
import GradientWrapper from 'src/components/partials/gradientWrapper'
//import { ViewWrapper } from 'src/components/wrappers/viewWrapper'
import { Container, Header, Left, Body, Right, Button as NativeButton, Icon, Title, Item, Input } from 'src/components/native-base'
import { usernameChanged, passwordChanged, emailChanged, registerUser } from 'src/actions'
import { PrimaryButton } from '../../../components/buttons/Button'
import {CustomTextInput } from 'src/components/form'
@connect(authState)
export default class SignUpScreenComponent extends Component {

  constructor (props) {
    super(props)
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
    }
  }

  goToLogin = () => {
    const {navigation} = this.props
    navigation.navigate('login')
  }
  goToSignup = () => {
    const {navigation} = this.props
    navigation.navigate('signup')
  }

  goBack = () => {
    this.props.navigation.goBack()
  }

  onChange = (name, text) => {


    const {dispatch} = this.props
    switch (name) {

      case 'user':
        dispatch(usernameChanged(text))
        break

      case 'email':
        dispatch(emailChanged(text))
        break

      case 'pass':
        dispatch(passwordChanged(text))
        break
      default:
        break
    }
  }

  validation (user) {
    return true
  }

  signUpUser = () => {
    const {user, dispatch, navigation} = this.props
    if (user && this.validation(user)) {
      dispatch(registerUser(user, navigation))
    }
    navigation.navigate('onBoarding')
  }

  render () {
    return (
      <GradientWrapper name={'default'}>
        <View style={styles.formContainer}>
          <View>
            <CustomTextInput rounded style={styles.item}>
            </CustomTextInput>
          </View>
          {/*<View>
            <Item rounded style={styles.item}>
              <Icon active name='ios-mail' style={styles.icon}/>
              <Input placeholder='email'
                     placeholderTextColor={'white'}
                     onChangeText={this.onChange.bind(this, 'email')}
                     style={styles.textInput}/>
            </Item>
          </View>
          <View>
            <Item rounded style={styles.item}>
              <Icon active name='lock' style={styles.icon}/>
              <Input placeholder='pass'
                     placeholderTextColor={'white'}
                     onChangeText={this.onChange.bind(this, 'pass')}
                     style={styles.textInput}/>
            </Item>
          </View>*/}
          <PrimaryButton rounded full style={styles.buttonStyle}
                         onPress={this.signUpUser}>
            Sign Up
          </PrimaryButton>
        </View>
      </GradientWrapper>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    color: 'white',
  },
  logoText: {
    width: 250,
    height: 100,
    marginTop: 50,
    resizeMode: 'contain',
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  textInput: {
    color: 'white',
  },
  item: {
    borderColor: '#007DFF',
    margin: 5,
  },

  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: 'white',
  },
  content: {
    // not cool but good enough to make all inputs visible when keyboard is active
    paddingBottom: 300,
  },
  card1: {
    paddingVertical: 16,
  },
  card2: {
    padding: 16,
  },
  input: {
    marginTop: 4,
  },
  title: {
    paddingBottom: 16,
    textAlign: 'center',
    color: '#404d5b',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  buttonStyle: {
    backgroundColor: '#0079FF',
  },
  formContainer: {
  }

})
