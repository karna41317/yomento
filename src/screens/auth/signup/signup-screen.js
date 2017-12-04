/**
 * Created by Karan on 2017-10-22.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { KeyboardAvoidingView, TextInput, View, Image, StyleSheet, Dimensions, Text, TouchableOpacity, Alert, AsyncStorage } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import { authState } from 'src/selectors'
import GradientWrapper from 'src/components/partials/gradientWrapper'
//import { View } from 'src/components/wrappers/viewWrapper'
import { Container, Header, Left, Body, Right, Button as NativeButton, Icon, Title, Item, Input } from 'native-base'
import { usernameChanged, passwordChanged, emailChanged, registerUser } from 'src/actions'
import { PrimaryButton } from '../../../components/buttons/Button'
import MonoLogo from 'src/components/logos/mono-logo'
import { lightTextMixin, semiBoldTextMixin } from '../../../styles/mixins'
import SvgUri from 'react-native-svg-uri'
import {get} from 'lodash'

@connect(authState)
export default class SignUp extends Component {

  constructor (props) {
    super(props)
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
    }
  }

  componentWillMount = () => {
    const {userData} = this.props
    if(userData) {
      const token = get(userData, 'authorization')
      const isValid = token.includes('Bearer')
      console.log('printing', isValid)
      if(isValid) {


        this.props.navigation.navigate('dashboard')
      }
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
    console.log('printing user', this.props)

    if (user && this.validation(user)) {
      const userInfo = Object.assign({}, user, {source: 'email'})
      dispatch(registerUser(userInfo, navigation))
      try {
        AsyncStorage.setItem('user', JSON.stringify(user))
        Alert.alert(
          'Success',
          'Successfully signed',
          [
            {text: 'OK', onPress: () => navigation.navigate('onBoarding')},
          ],
          {cancelable: false},
        )
      } catch (error) {
        Alert.alert(
          'Error',
          'Error saving user info',
          [
            {text: 'OK', onPress: () => {}},
          ],
          {cancelable: false},
        )
      }
    }

    console.log('printing', this.props)

    //navigation.navigate('login')
  }

  onIconPress = () => {
    console.log('printing', this.props)

    this.props.navigation.goBack()
  }

  render () {
    return (
      <GradientWrapper name={'default'}>

        <View style={styles.formContainer}>
          {/*<View>*/}

          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Create Account</Text>
            <TouchableOpacity onPress={this.onIconPress}>
              <Icon active name='close'
                    style={[styles.icon, styles.closeIcon]}/>
            </TouchableOpacity>
          </View>


          <View style={{marginVertical: 20, alignSelf: 'center'}}>
            <Image source={require('src/images/mercury_logo.png')}
                   style={{width: 100, height: 100}}/>
          </View>
          <Item rounded style={styles.item}>
            <Icon active name='person' style={styles.icon}/>
            <Input placeholder='Name'
                   placeholderTextColor={'white'}
                   onChangeText={this.onChange.bind(this, 'user')}
                   style={styles.textInput}/>
          </Item>
          <Item rounded style={styles.item}>
            <Icon active name='ios-mail' style={styles.icon}/>
            <Input placeholder='Email'
                   keyboardType='email-address'
                   placeholderTextColor={'white'}
                   onChangeText={this.onChange.bind(this, 'email')}
                   style={styles.textInput}/>
          </Item>
          <Item rounded style={styles.item}>
            <Icon active name='lock' style={styles.icon}/>
            <Input placeholder='Password'
                   secureTextEntry

                   placeholderTextColor={'white'}
                   onChangeText={this.onChange.bind(this, 'pass')}
                   style={styles.textInput}/>
          </Item>
          <PrimaryButton rounded full style={styles.buttonStyle}
                         onPress={this.signUpUser}>
            Sign Up
          </PrimaryButton>

        </View>

      </GradientWrapper>
    )
  }
}

SignUp.propTypes = {
  disableInteractionCheck: PropTypes.bool,
}

const styles = StyleSheet.create({

  icon: {
    fontSize: 25,
    color: 'white',
    marginLeft: 10,
  },
  textInput: {
    color: 'white',
    ...lightTextMixin(20, '#FFF')
  },

  item: {
    borderColor: '#007DFF',
    marginVertical: 5,
    width: Dimensions.get('window').width - 50,
  },
  buttonStyle: {
    marginTop: 10,
    backgroundColor: '#0079FF',
    width: Dimensions.get('window').width - 50,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  headerContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  headerText: {
    marginLeft: 80,
    backgroundColor: 'transparent',
    ...semiBoldTextMixin(20, '#FFF'),
  },
  closeIcon: {
    left: 50,
    fontSize: 70,
    width: 60,
    color: '#0079FF',
    alignItems: 'center',
  },
})
