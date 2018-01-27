/**
 * Created by Karan on 2017-10-22.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as snapshotUtil from 'src/utils/snapshot'
import { store } from 'src/store/store'
import { KeyboardAvoidingView, TextInput, View, Image, StyleSheet, Dimensions, Text, TouchableOpacity, Alert, AsyncStorage } from 'react-native'
import { authState } from 'src/selectors'
import GradientWrapper from 'src/components/partials/gradientWrapper'
import { Icon, Item, Input } from 'src/components/native-base'
import { usernameChanged, passwordChanged, emailChanged, registerUser, resetSessionStateFromSnapshot, initializeSessionState } from 'src/actions'
import { PrimaryButton } from '../../../components/buttons/Button'
import { lightTextMixin, semiBoldTextMixin } from '../../../styles/mixins'
import { get } from 'lodash'
import { Spinner } from 'src/components/spinner'

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

  resetUserState = () => {
    const {dispatch} = this.props
    snapshotUtil.clearSnapshot()
    dispatch(resetSessionStateFromSnapshot({}))
    dispatch(initializeSessionState())
    store.subscribe(() => {
      snapshotUtil.saveSnapshot(store.getState())
    })
  }

  componentWillMount = () => {
    const {userData, navigation} = this.props
    if (userData) {
      const token = get(userData, 'authorization')
      const isValid = token.includes('Bearer')

      if (isValid) {
        try {
          Alert.alert(
            'Signed up',
            'You are alredy Signed up on this device, You want to signup again ?',
            [
              {text: 'No', onPress: () => navigation.navigate('onBoarding')},
              {text: 'Signup', onPress: () => this.resetUserState()},
            ],
            {cancelable: false},
          )
        } catch (error) {
          Alert.alert(
            'Error',
            'Error while Signing up, please contact app team',
            [
              {text: 'OK', onPress: () => {}},
            ],
            {cancelable: false},
          )
        }
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

  signUpUser = async () => {
    const {user, dispatch, navigation} = this.props
    if (user && this.validation(user)) {
      const deviceInfo = await AsyncStorage.getItem('deviceInfo')
      const deviceId = JSON.parse(deviceInfo).userId
      const userInfo = Object.assign({}, user, {source: 'email', deviceId} )
      this.resetUserState()
      dispatch(registerUser(userInfo, navigation))
    }
  }

  onIconPress = () => {
    this.props.navigation.goBack()
  }

  render () {
    const {fetching} = this.props

    console.log('printing', this.props)

    if (fetching) {
      return (
        <Spinner/>
      )
    }

    return (
      <GradientWrapper name={'default'}>
        <View style={styles.formContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Create Account</Text>
            <TouchableOpacity onPress={this.onIconPress}>
              <Icon
                active name='close'
                style={[styles.icon, styles.closeIcon]}/>
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 20, alignSelf: 'center'}}>
            <Image
              source={require('src/images/mercury_logo.png')}
              style={{width: 100, height: 100}}/>
          </View>
          <Item
            rounded
            style={styles.item}>
            <Icon
              active
              name='person'
              style={styles.icon}/>
            <Input
              placeholder='Name'
              placeholderTextColor={'white'}
              onChangeText={this.onChange.bind(this, 'user')}
              style={styles.textInput}/>
          </Item>
          <Item
            rounded
            style={styles.item}>
            <Icon
              active
              name='ios-mail'
              style={styles.icon}/>
            <Input
              placeholder='Email'
              keyboardType='email-address'
              placeholderTextColor={'white'}
              onChangeText={this.onChange.bind(this, 'email')}
              style={styles.textInput}/>
          </Item>
          <Item
            rounded
            style={styles.item}>
            <Icon
              active
              name='lock' style={styles.icon}/>
            <Input
              placeholder='Password'
              secureTextEntry
              placeholderTextColor={'white'}
              onChangeText={this.onChange.bind(this, 'pass')}
              style={styles.textInput}/>
          </Item>
          <PrimaryButton
            rounded
            full
            style={styles.buttonStyle}
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
