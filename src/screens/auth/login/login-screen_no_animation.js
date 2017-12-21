/**
 * Created by Karan on 2017-10-22.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'
import { authSelector } from './../auth-selector'
import GradientWrapper from 'src/components/partials/gradientWrapper'
import { Icon, Item, Input } from 'src/components/native-base'
import { loginUser, usernameChanged, passwordChanged, emailChanged,  } from 'src/actions'
import { PrimaryButton, SecondaryButton } from '../../../components/buttons/Button'

import { lightTextMixin, semiBoldTextMixin } from '../../../styles/mixins'
import { get } from 'lodash'

@connect(authSelector)
export default class LoginScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      userName: null,
      email: null,
      password: null,
    }
  }

  componentWillMount = () => {
    const {auth: {userData}, profile} = this.props
    if (userData) {
      const token = get(userData, 'authorization')
      const isValid = token.includes('Bearer')
      console.log('printinguserDatadas', userData)
      const PCreated = get(userData, 'profile_created')
      console.log('printingPCreateddad', PCreated)

      if (!isValid) {
        const profileCreated = get(profile, 'profileCreated')
        if(profileCreated) {
          this.props.navigation.navigate('dashboard')
        } else {
          this.props.navigation.navigate('onBoarding')
        }
      }
    }
  }

  goBack = () => {
    this.props.navigation.goBack()
  }

  onChange = (name, text) => {
    const {dispatch} = this.props
    switch (name) {
      case 'user':
        dispatch(usernameChanged(text))
        this.setState({userName: text})
        break
      case 'email':
        dispatch(emailChanged(text))
        this.setState({email: text})
        break
      case 'pass':

        dispatch(passwordChanged(text))
        this.setState({password: text})
        break
      default:
        break
    }
  }

  validation () {
    return this.state.email && this.state.password
  }

  goToLoginUser = () => {
    const {dispatch, navigation} = this.props
    if (this.validation()) {
      dispatch(loginUser(this.state.email, this.state.password, navigation))
    }
  }

  onIconPress = () => {
    this.props.navigation.goBack()
  }

  goToForgotPassword = () => {
    const {navigation} = this.props
    navigation.navigate('forgot')
  }

  goToContactSupport = () => {

  }

  render () {
    return (
      <GradientWrapper name={'default'}>
        <View style={styles.formContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Member login</Text>
            <TouchableOpacity onPress={this.onIconPress}>
              <Icon active name='close'
                    style={[styles.icon, styles.closeIcon]}/>
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 20}}>
            <Image source={require('src/images/mercury_logo.png')}
                   style={{width: 100, height: 100}}/>
          </View>
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
          <PrimaryButton rounded full style={styles.primaryButtonStyle}
                         onPress={this.goToLoginUser}>
            Log In
          </PrimaryButton>
          <SecondaryButton
            style={styles.secondaryButtonStyle}
            textStyles={styles.forgotText}
            onPress={this.goToForgotPassword}>
            I forgot my password
          </SecondaryButton>
          <SecondaryButton
            style={[styles.secondaryButtonStyle, styles.contactSupport]}
            textStyles={styles.contactText}
            onPress={this.goToContactSupport}>
            Contact Support
          </SecondaryButton>

        </View>
      </GradientWrapper>
    )
  }
}

LoginScreen.propTypes = {
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
  primaryButtonStyle: {
    marginTop: 10,
    backgroundColor: '#0079FF',
    width: Dimensions.get('window').width - 50,
  },
  secondaryButtonStyle: {
    marginTop: 15,
    backgroundColor: 'transparent',
    borderWidth: 0,
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
    fontSize: 80,
    width: 60,
    color: '#0079FF',
    alignItems: 'center',
  },
  contactSupport: {
    position: 'absolute',
    bottom: 40,
  },
  forgotText: {
    ...semiBoldTextMixin(14, '#3EABFF'),
    letterSpacing: 2,
  },
  contactText: {
    ...semiBoldTextMixin(14, '#3EABFF'),
    letterSpacing: 2,
  },
})
